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

    // Connect to MongoDB
    const client = new MongoClient(mongoURI,{ useNewUrlParser:true, useUnifiedTopology:true });
    await client.connect();

    // Access the existing students collection
    const existingStudentsCollection = client.db("complaints").collection("existingstudents");
    
    // Check if the student exists in the existing students collection
    const student = await existingStudentsCollection.findOne({ rollNumber, name });

    if (!student) {
      await client.close();
      return res.status(400).json({ error: "Student not found" });
    }

    // Check if the student's room number matches the provided room number
    if (student.roomNumber !== roomNumber) {
      await client.close();
      return res.status(400).json({ error: "Invalid room number" });
    }

    // Create a new complaint instance using the data from the request body
    const newUser = new User(req.body);
    // Save the user to the database
    const savedUser = await newUser.save(); // Fix: call save() function
    // Send a success response with the saved user data
    await client.close();
    res.status(201).json(savedUser); // Fix: change req to res
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});