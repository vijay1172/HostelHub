const express = require("express");
require('dotenv').config();
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const User = require('./models/User');
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
console.log(process.env.DB_URL)

const mongoURI =process.env.DB_URL;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.post("/warden", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await mongoose.connection.db.collection("admindetails").findOne({ 
      username: { $regex: new RegExp(username, "i") }, 
      password: { $regex: new RegExp(password, "i") } 
    });
    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.redirect("/issues");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/complaints", async (req, res) => {
  try {
    const { rollNumber, roomNumber, name } = req.body;
    const client = new MongoClient(mongoURI,{ useNewUrlParser:true, useUnifiedTopology:true });
    await client.connect();
    const existingStudentsCollection = client.db("complaints").collection("existingstudents");
    const student = await existingStudentsCollection.findOne({ 
      rollNumber, 
      name: { $regex: new RegExp(name, "i") } 
    });
    if (!student) {
      await client.close();
      return res.status(400).json({ error: "Student not found" });
    }
    if (student.roomNumber !== roomNumber) {
      await client.close();
      return res.status(400).json({ error: "Invalid room number" });
    }
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    await client.close();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/complaints", async (req, res) => {
  try {
    const complaints = await User.find({});
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/issues", async (req, res) => {
    try {
      const complaints = await User.find({});
      res.status(200).json(complaints);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.delete("/complaints/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const complaint = await User.findById(id);
    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Complaint deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
