const router =require('express').Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/standings', isAuthenticated, async (req, res) => {
    res.render('standings');
  });

  module.exports =router;
