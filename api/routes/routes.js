const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Express REST API');
});

router.get('/api', (req, res) => {
  res.send("WELCOME TO API PAGE");
});

module.exports = router;