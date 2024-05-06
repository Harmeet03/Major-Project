const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://Harmeet:Dhanjal2003@cluster0.mob0vls.mongodb.net/schoolDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const marksSchema = new mongoose.Schema({
  classValue: String,
  rollNumber: String,
  studentName: String,
  mathsMarks: Number,
  englishMarks: Number,
  scienceMarks: Number,
  sstMarks: Number,
  hindiMarks: Number
});

const Marks = mongoose.model('Marks', marksSchema);

app.use(bodyParser.json());
app.use(cors());

// Route to store record
app.post('/api/marks', async (req, res) => {
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
app.get('/api/marks', async (req, res) => {
  try {
    const marks = await Marks.find();
    res.json(marks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to delete marks
app.delete('/api/marks', async (req, res) => {
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
