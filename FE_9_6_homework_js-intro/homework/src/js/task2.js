let a = +prompt("a= ");
let b = +prompt("b = ");
let angle = +prompt("angle = ");
if (a < 0 || b < 0 || angle < 0) {
    console.log("invalid data!");
}else{
    let c = Math.sqrt(Math.pow(a, 2)+ Math.pow(b, 2) - 2 * a * b * Math.cos(angle));
    console.log("c length :" + c.toFixed(2));
    let p = a + b + c;
    console.log("perimeter : ", p.toFixed(2));
    let square = (a * b * Math.sin(angle))/2;
    console.log("square : " + square.toFixed(2));
}
