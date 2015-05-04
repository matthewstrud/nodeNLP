var express = require('express');
var tokenise = require('../tokenise.js');
var stopset = require('../stopset.js');
var stem = require('../stem.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var query =  JSON.stringify(req.query.text);

    console.log("query: "+ query);

    var arr = tokenise(query);

    arr = stopset(arr);

    arr = stem(arr);

    arr = stopset(arr);

    var retObj = JSON.stringify(arr);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.type('application/json');
    res.send(retObj);
});

module.exports = router;
