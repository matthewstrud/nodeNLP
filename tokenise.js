var tokenise = function (str)
{


    str = str.toLowerCase();
    //using regular expressions replace with ""(remove) everything that is not a letter or a space
    str = str.replace(/[^a-zA-Z- ]/g,'');
    //further replace two or more spaces with one space(removes extra spaces)
    str = str.replace(/\s{2,}/g, ' ');
    //split into an array and return the array
    arr = str.split(' ');

    return arr;




}

module.exports = tokenise;

