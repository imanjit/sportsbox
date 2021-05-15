const router =require('express').Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/players', isAuthenticated, async (req, res) => {
    res.render('players');
  });

module.exports = router;
