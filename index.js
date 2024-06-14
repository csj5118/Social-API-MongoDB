
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);


mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
