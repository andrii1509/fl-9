let price = prompt('Enter price');
let discount = prompt("discount %");
if (discount < 0 && discount > 100) {
    console.log("invalid discount");
}else if (price < 0) {
    console.log("Wrong price");
} else{
    console.log("price without discount : ", price);
    console.log("Discount : ", discount);
    console.log("Price with discount",  price - (discount / 100 * price));
    console.log("saved : ",  discount / 100 * price);
}