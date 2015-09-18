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

function Order() {
  this.pizzas = []
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

Order.prototype.costs = function() {
  var price = 0;
  this.pizzas.forEach(function(pizza) {
    pizza.costs();
    price += pizza.price;
  });
  this.price = price;
}

$(document).ready(function() {
  $("#add-topping").click(function() {
    var newTopping = ( "<div class='form-group new-topping'>" +
                         "<select id='pizza-topping' class='form-control' required='true'>" +
                           "<option selected disabled>Select topping</option>" +
                           "<option value='Love'>Love</option>" +
                           "<option value='Olive'>Olives</option>" +
                           "<option value='Mayo'>Mayo</option>" +
                         "</select>" +
                       "</div>");
    $(newTopping).appendTo("#new-toppings");
  });

  $('#add-pizza').click(function() {
    var newPizzaForm = ( "<div class='pizza-group'>" +
                           "<div class=form-group'>" +
                             "<select id='pizza-size' class='form-control' required='true'>" +
                               "<option selected disabled>Select Size</option>" +
                               "<option value='small'>small</option>" +
                               "<option value='medium'>medium</option>" +
                               "<option value='large'>large</option>" +
                             "</select>" +
                           "</div>" +
                           "<div id='new-toppings'>" +
                             "<div class='form-group new-topping'>" +
                               "<select id='pizza-topping' class='form-control' required='true'>" +
                                 "<option selected disabled>Select topping</option>" +
                                 "<option value='Love'>Love</option>" +
                                 "<option value='Olive'>Olives</option>" +
                                 "<option value='Mayo'>Mayo</option>" +
                               "</select>" +
                             "</div>" +
                             "<hr>" +
                           "</div>" +
                         "</div>");
    $(newPizzaForm).appendTo(".pizza-order");
  });

  $('form#new-pizza-form').submit(function() {
    event.preventDefault();
    var newOrder = new Order();
    $(this).find('.pizza-group').each(function() {
      var newPizza = new Pizza();

      var inputtedPizzaSize = $(this).find('#pizza-size option:selected').val();

      eval("newPizza.size." + inputtedPizzaSize + " = true");

      $(this).find('.new-topping').each(function() {
        var inputtedPizzaTopping = $(this).find('#pizza-topping option:selected').val();
        var newTopping = new Topping(inputtedPizzaTopping);
        newPizza.toppings.push(newTopping);
      });
      newOrder.pizzas.push(newPizza);
    });

    newOrder.costs();
    $("#result-cost").text(newOrder.price);

    $("#pizza-order").hide();
    $("#order-result").show();
  });
});
