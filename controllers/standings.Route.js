const router =require('express').Router();


router.get('/standings', async (req, res) => {
    res.render('standings');
  });

  module.exports =router;
