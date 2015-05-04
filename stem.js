var stems = require('./stems.json');
var stem = function (arr) {
    var outArr = []; //output array
    var found = false;
    for(var i = 0; i < arr.length; i++) {
        //check if items contain a stem
        for(var k = 0; k < stems.length; k++) {
            var obj = stems[k];
            var index = arr[i].indexOf(obj.content);
            var contentLength = obj.content.length;
            console.log(arr[i]);
            var string = arr[i];
            if(index != -1) {
                //if the char at for string + length is a char
                if(string.charAt(index + contentLength) == "") {
                    found = true;
                    //stem
                    string = string.substring(0, index);
                    //if the stem is not already in
                    if (outArr.indexOf(string) == -1) {
                        //add to the array
                        outArr.push(string);
                        break;
                    }
                }
            }
        }
        //stem was not found
        if(found == false) {
            //add only if not found
           if(outArr.indexOf(string) == -1) {
               outArr.push(string);
           }

        }
        else {
            found = false;
        }
    }

    return outArr;
}
module.exports = stem;