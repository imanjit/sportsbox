const router = require('express').Router();
const home = require("./homeRoute");
const players = require("./playersRoute");
const standings =require("./standings.Route");

router.use('/', home);
router.use('/', players);
router.use('/', standings);


module.exports = router;