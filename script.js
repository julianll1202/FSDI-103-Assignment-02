let productName = prompt("Enter product name:");
let productPrice = prompt("Enter product pricce:");
let productQty = prompt("Enter product quantity:");
let subTotal = productPrice*productQty;
let salesTax = subTotal*0.0725;
let total = salesTax+subTotal;

console.log("\tWlecome to Best Buy");
console.log("                   ");
console.log(productQty,"   ",productName);
console.log("                ---------");
console.log("Subtotal       ",subTotal);
console.log("Sales Tax      ",salesTax);
console.log("                =========");
console.log("Total          ",total);

document.write(`
    <p style="text-align:center">Welcome to Best Buy!</p>
    <p> </p>
    <p>${productQty}    ${productName}</p>
    <p>--------------</p>
    <p>Subtotal         $${subTotal}</p>
    <p>Subtotal         $${salesTax}</p>
    <p>==============</p>
    <p>Total          $${total}</p>
`);