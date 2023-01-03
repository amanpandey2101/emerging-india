const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');



env.config();


//Routes
const authRoutes = require('./Routes/auth');
const firRoutes = require('./Routes/fir');
const userRoutes = require('./Routes/user');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use(cors());




app.use('/api',authRoutes);
app.use('/api',firRoutes);
app.use('/api',userRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server Startend on port ${process.env.PORT}`);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ksqm3qe.mongodb.net/test`
  )
  .then(() => {
    console.log("DB Connected");
  }).catch((error)=>{
    console.log(error)
  });