const express = require('express');
const router = express.Router();

// GET request for /product_scraper endpoint
router.get('/', (req, res) => {
  console.log('In product scraper');
  res.send('In product scraper');
});

module.exports = router;