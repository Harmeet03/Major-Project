const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4040;


const Marks = require('./marks');

app.use(bodyParser.json());
app.use(cors());

// Route to store record
app.post('/marks', async (req, res) => {
  try {
    const { classValue, rollNumber, studentName, mathsMarks, englishMarks, scienceMarks, sstMarks, hindiMarks } = req.body;
    const newMarks = new Marks({ classValue, rollNumber, studentName, mathsMarks, englishMarks, scienceMarks, sstMarks, hindiMarks });
    await newMarks.save();
    res.status(201).json({ message: 'Marks stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch record
app.get('/marks', async (req, res) => {
  try {
    const marks = await Marks.find();
    res.json(marks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to delete marks
app.delete('/marks', async (req, res) => {
  try {
    const { rollNumber, studentName } = req.body;
    const deletedMark = await Marks.deleteOne({ rollNumber, studentName });
    if (deletedMark.deletedCount === 0) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
