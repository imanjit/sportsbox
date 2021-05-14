const router = require('express').Router();
const home = require("./homeRoute");
const teamRoute = require('./teamRoute');
const playerRoute = require('./playersRoute');
const standings = require('./standings.Route');



router.use('/api/teams', teamRoute);
router.use('/api/players', playerRoute);
router.use('/', home);
router.use('/', playerRoute);
router.use('/', standings);

module.exports = router;