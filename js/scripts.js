function Topping(name) {
  this.name = name;
}

function Size() {
  this.small = false;
  this.medium = false;
  this.large = false;
}

function Pizza() {
  this.size = new Size();
  this.toppings = [];
  this.price = null;
}

Pizza.prototype.costs = function() {
  var price = 0;
  var toppingBasePrice = 1;
  var toppingMultiplier = this.toppings.length;

  if (this.size.large === true){
    price += 15;
  } else if (this.size.medium === true) {
    price += 10;
  } else if (this.size.small === true) {
    price += 5;
  }

  price += toppingBasePrice * toppingMultiplier;

  this.price = price;
}
