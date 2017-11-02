// create variables for welcome
var greeting = "Hello ";
var name = "Sebi";
var message = ", here is your order:";
var welcome = greeting + name + message;

// create varialbes that hold details of the welcome message
var sign = 'Awesome Sign!';
// is as long as var sign
var tiles = sign.length;

// set global cost of a tile
const tileCost = 10;
// depends on the cost of each tile
var subTotal = tiles * tileCost;
// set global cost of shipping
const shipping = 7;
// calculate the total cost of all things
var grandTotal = subTotal + shipping;

// get the element of id 'greeting'
var el = document.getElementById('greeting');
// replace with personal message
el.textContent = welcome;

// get element sign and update
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// get element with id of tiles
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// get element of subtotal and replace content
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// get element of id shipping and update contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// get id elGrandTotal and update
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
