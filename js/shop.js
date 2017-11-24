var	customername = "Chaky";
var price = 10;
var quantity = 3;
var totalPrice = price * quantity;
var products = [
    "Pizza"
    "Naan"
    "Sourdough"
    "Foccacia"
    "Iphone X"
    ];
var price = [40,10,20,80,1000];
var productsText = "";
var productsElement = document.getElementById("product-list");
productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='bridge'>$" +
               price[0] + "</li>";
productsElement.innerHTML = productsText;

document.getElementById("customer-name").innerHTML = "Chaky";
document.getElementById("price").innerHTML = "$" + totalPrice;