const router =require('express').Router();


router.get('/players', async (req, res) => {
    res.render('players');
  });

module.exports = router;
