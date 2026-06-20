const sumAll = function(firstNumber,secondNumber) {
    let smallerNumber,sum=0,largerNumber;
    if(firstNumber>secondNumber){
        smallerNumber=secondNumber;
        largerNumber=firstNumber;
    }
    else if(firstNumber <0 || secondNumber<0){
        return "ERROR";
    }
    else if(firstNumber%1!==0||secondNumber%1!==0){
        return "ERROR";
    }
    else if(typeof firstNumber!=="number"||typeof secondNumber!=="number"){
        return "ERROR";
    }
    else{
        smallerNumber=firstNumber;
        largerNumber=secondNumber;
    }
    for(let i=smallerNumber;i<=largerNumber;i++){
        sum+=i;

    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
