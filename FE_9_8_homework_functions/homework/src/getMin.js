// Your code goes here
function getMin(...args) {
    let arrOfArgs = Array.prototype.slice.call(arguments);
    let minValue;
    minValue = arrOfArgs[1];
    arrOfArgs.forEach(function (item) {
        if (item < minValue) {
            minValue = item;
        }
    });
    return minValue;
}