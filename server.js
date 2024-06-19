

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);


mongoose.connect('mongodb://localhost:27017/social-api'); 

mongoose.connection.once('open', () => {
  console.log('MongoDB connected successfully');
}).on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
