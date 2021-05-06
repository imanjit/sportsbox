const router = require('express').Router();
const home = require("./homeRoute");

router.use('/', home);

module.exports = router;