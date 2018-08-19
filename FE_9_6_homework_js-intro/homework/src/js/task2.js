let a = +prompt("a= ");
let b = +prompt("b = ");
let angle = +prompt("angle = ");
if (a <= 0 || b <= 0 || angle <= 0) {
    console.log("invalid data!");
}else{
    let c = Math.sqrt(Math.pow(a, 2)+ Math.pow(b, 2) - (2 * a * b * Math.cos(angle)));
    let p = (a + b + c)/2;
    let square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log("c length :" + c.toFixed(2) +
    "\n" + "perimeter : ", (p*2).toFixed(2) +
    "\n" + "square : " + square.toFixed(2)
    );
}
