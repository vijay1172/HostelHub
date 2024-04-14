const express = require("express");
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const User = require('./models/User');
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://vijaysharma11702:lgMzwDKQkS7MphL1@hostelhub.csfaplv.mongodb.net/complaints?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.post("/complaints", async (req, res) => {
  try {
    const { rollNumber, roomNumber, name } = req.body;

   
    const client = new MongoClient(mongoURI,{ useNewUrlParser:true, useUnifiedTopology:true });
    await client.connect();

    
    const existingStudentsCollection = client.db("complaints").collection("existingstudents");
    
    
    const student = await existingStudentsCollection.findOne({ rollNumber, name });

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

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});