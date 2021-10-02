const PORT = 1984;

// handles http requests
const axios = require('axios');
// parses markup of a web page
const cheerio = require('cheerio');
const express = require('express');

const app = express();

// url to scrap
const url = 'https://www.arredamentistramenga.it/cof-cf-s-200';

// scraping the page using promises
axios(url)
  .then(response => {
    // the html of the page requested
    const HTML = response.data;
    // passing the html document ot cheerio
    const $ = cheerio.load(HTML);
    // looking for a specific element in the page
    $('.base', HTML).each(function(item) {
      const title = $(this).text();
      console.log(title);
    });
    // looking for a specific element in the page
    $('.price', HTML).each(function(item) {
      const price = $(this).text();
      console.log(price);
    });
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});