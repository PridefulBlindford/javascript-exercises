const palindromes = function (message) {
    let cleanMessage=message.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reversedMessage=cleanMessage.split("").reverse().join("");
    if(cleanMessage===reversedMessage){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
