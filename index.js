const PORT = 1984;

// handles http requests
const axios = require('axios');
// parses markup of a web page
const cheerio = require('cheerio');
const express = require('express');

const app = express();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});