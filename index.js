/* eslint-disable no-param-reassign */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const pyramid = require('./modules/pyramid');
const similarity = require('./modules/similarity');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'Make post request to /pyramid with query word to find out if the word is a pyramid word'
    );
});

// Query with parameter word
app.post('/pyramid', (req, res) => {
  const input = req.query.word;

  if (!input) {
    res.status(400).send("Bad Request: No query parameter 'word' found");
  } else {
    res.status(200).send({ isPyramidWord: pyramid.checkPyramid(input) });
  }
});

/**
 * Query with text1 and text2 keys in body of JSON request
 */
app.post('/similarity', (req, res) => {
  const { text1 } = req.body;
  const { text2 } = req.body;

  if (!text1 || !text2) {
    res
      .status(400)
      .send("Bad Request: No parameters 'text1' and 'text2' found in body of POST request");
  } else {
    const similarityMetric = similarity.checkSimilarity(text1, text2);
    res.status(200).send({ similarity: similarityMetric });
  }
});

app.listen(8080, () => {
  console.log('Web server started');
});
