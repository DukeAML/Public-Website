const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080; // Step 1

var cors = require('cors');
app.use(cors());

const MONGODB_URI = 'mongodb+srv://daml123:scholars@cluster0.pecv7.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    dbName: "articles",
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Schema
const Schema = mongoose.Schema;
let schemaStructure = {
  title: String,
  authors: String,
  published_date: String,
  doi: String,
  abstract: String,
  publication_location: String,
  link: String,
  citations: String,
  readership: String,
  tweets: String,
  news_mentions: String
};

const machine_learningSchema = new Schema(schemaStructure, {collection: 'machine_learning'});

// Model
const machine_learning_articles = mongoose.model('machine_learning', machine_learningSchema);

const deep_learningSchema = new Schema(schemaStructure, {collection: 'deep_learning'});
const deep_learning_articles = mongoose.model('deep_learning', deep_learningSchema);

const neural_networksSchema = new Schema(schemaStructure, {collection: 'neural_networks'});
const neural_networks_articles = mongoose.model('neural_networks', neural_networksSchema);


app.use(morgan('tiny'));

app.get('/machine_learning', (req, res) => {
  machine_learning_articles.find({})
    .then((data) => {
      // console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.get('/deep_learning', (req, res) => {
  deep_learning_articles.find({})
    .then((data) => {
      // console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.get('/neural_networks', (req, res) => {
  neural_networks_articles.find({})
    .then((data) => {
      // console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));


