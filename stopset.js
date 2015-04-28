var fs = require('fs');
var stopset = function (arr)
{

    var array = fs.readFileSync("stopwords.txt").toString().split("\n");

    console.log("file read: " + array);
    var newArr = [];
    var found = false;
    for(var i = 0; i < arr.length; i++)
    {
        for (var ind = 0; ind < array.length; ind++)
        {
            //console.log(array[ind] + "\n");


            if(array[ind] == arr[i])
            {
                found = true;
            }
        }

        if(found == false)
        {
            newArr.push(arr[i]);
        }
        else
        {
            found = false;
        }
    }

    return newArr;




}

module.exports = stopset;

/**
 * Created by matt on 27/04/2015.
 */
