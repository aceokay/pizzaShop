function Topping(name) {
  this.name = name;
}

function Size() {
  this.small = false;
  this.medium = false;
  this. large = false;
}

function Pizza() {
  this.size = new Size();
  this.toppings = [];
  this.price = null;
}
