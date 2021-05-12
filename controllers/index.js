const router = require('express').Router();
const home = require("./homeRoute");
const teamRoute = require('./api/teamRoute');
const playerRoute = require('./api/playerRoute');

router.use('/api/teams', teamRoute);
router.use('/api/players', playerRoute);
router.use('/', home);

module.exports = router;