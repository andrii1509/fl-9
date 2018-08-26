// Your code goes here
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}