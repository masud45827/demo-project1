const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const Model = require('./model/model')
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log('database connected');
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post('/registration', async (req, res) => {
  console.log('coming');
  try {
    let data = new Model({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      division: req.body.division
    });
    let result = await data.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.get('/registrations', async (req, res) => {
  try {
      const data = await Model.find({});
      console.log(data);
      res.json(data); // Send response as JSON
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});



app.listen(8000,()=>{
   console.log('8000 port is running');
})