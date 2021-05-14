const router = require('express').Router();
const home = require("./homeRoute");
const teamRoute = require('./api/teamRoute');
const players = require("./playersRoute");
const standings =require("./standings.Route");
const login = require("./loginRoute");

router.use('/', teamRoute);
router.use('/', home);
router.use('/', players);
router.use('/', standings);
router.use('/', login);

module.exports = router;