const router = require('express').Router();
const home = require("./homeRoute");
<<<<<<< HEAD
const teamRoute = require('./api/teamRoute');
const playerRoute = require('./api/playerRoute');
=======
const players = require("./playersRoute");
const standings =require("./standings.Route");
const login = require("./loginRoute");

>>>>>>> 95f1d512e2dd0153c730b07657473ccd879cf1b4

router.use('/api/teams', teamRoute);
router.use('/api/players', playerRoute);
router.use('/', home);
router.use('/', players);
router.use('/', standings);
router.use('/', login);

module.exports = router;