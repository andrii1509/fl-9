// Your code goes here
function getClosestToZero(first, second) {
    if (Math.abs(first) > Math.abs(second)) {
        return second;
    }
    else {
        return first;
    }
}