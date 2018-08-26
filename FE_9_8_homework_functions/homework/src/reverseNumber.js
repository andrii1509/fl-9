// Your code goes here
function reverseNumber(argument) {
    let reverseNum = 0;
    while(argument !== 0){
        reverseNum = reverseNum * 10 + argument % 10;
        argument = Math.floor(argument / 10);
    }
    return(reverseNum);
}