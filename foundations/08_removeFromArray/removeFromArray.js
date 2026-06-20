const removeFromArray = function(array,...thingsToRemove) {
    let finishedArray=array.filter(item=>thingsToRemove.indexOf(item)===-1);
    return finishedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
