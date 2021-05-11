const router = require('express').Router();
const home = require("./homeRoute");
const players = require("./playersRoute");
const standings =require("./standings.Route");
const login = require("./loginRoute");


router.use('/', home);
router.use('/', players);
router.use('/', standings);
router.use('/', login);

module.exports = router;