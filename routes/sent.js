var express = require('express');
var tokenise = require('../tokenise.js');
var router = express.Router();
var lex = require('../AFINN.json');

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log(req.query.text);


    var query =  JSON.stringify(req.query.text);

    var arr = tokenise(query);
    console.log(arr);

    //loop through the json file, look to see if any records have been found

    var count = 0;

    for(var key in arr)
    {

        if(lex.hasOwnProperty(arr[key]))
        {

            var word = arr[key];
            var value = lex[word];

            console.log(arr[key] + " " + value);

            count += value;

        }
    }

    var retObj = {sentiment:count};

    console.log(retObj);

    res.type('application/json');
    res.send(retObj);

    //res.render('sent', { title: 'sent', array: arr });
});

module.exports = router;

