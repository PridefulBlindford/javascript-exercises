const repeatString = function(message,timesToRepeat) {
    let finalString="";
    if(timesToRepeat<0){
        return "ERROR";
    }
for(let i=1;i<=timesToRepeat;i++){
    
    finalString+=message;
}
return finalString;
};

// Do not edit below this line
module.exports = repeatString;
