const fibonacci = function(number) {
    let total=0,firstPrevious=0,secondPrevious=0;
    if(number===0){
        return 0;
    }
    else if(number<0){
        return "OOPS";
    }
    for(let i=1;i<=number;i++){
        if(i===1){
            total=1;
            firstPrevious=1;
        }
        else if(i===2){
            secondPrevious=1;
        }
        
        else{
            total=firstPrevious+secondPrevious;
            secondPrevious=firstPrevious;
            firstPrevious=total;
        }
    }
    return total;

};

// Do not edit below this line
module.exports = fibonacci;
