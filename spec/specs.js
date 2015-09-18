describe("Topping", function() {
  it("creates a new instance of Topping with a name attribute", function() {
    var newTopping = new Topping("Whole Pepper");
    expect(newTopping.name).to.equal("Whole Pepper");
  });
});

describe("Size", function() {
  it("creates a new instance of Size object with size options set to false", function() {
    var newSize = new Size();
    expect(newSize.small).to.equal(false);
    expect(newSize.medium).to.equal(false);
    expect(newSize.large).to.equal(false);
  });
  it("allows the change of a size option within the size instance", function() {
    var newSize = new Size();
    newSize.small = true;
    expect(newSize.small).to.equal(true);
  });
});

describe("Pizza", function() {
  it("creates a new instance of Pizza object with size, topping, and price attributes", function() {
    var newPizza = new Pizza();
    var newSize = new Size();
    expect(newPizza.size).to.eql(newSize);
    expect(newPizza.toppings).to.eql([]);
    expect(newPizza.price).to.eql(null);
  });
});

describe("Pizza.prototype.costs", function() {
  it("calculates the price of a medium Pizza object and updates the price", function() {
    var newPizza = new Pizza();
    var newSize = new Size();
    var newTopping = new Topping("Uncooked Onion");
    newPizza.toppings.push(newTopping);
    newPizza.size.medium = true;
    newPizza.costs();
    expect(newPizza.price).to.equal(11);
  });
  it("calculates the price of a small Pizza object and updates the price", function() {
    var newPizza = new Pizza();
    var newSize = new Size();
    var newTopping = new Topping("Loaf of Bread");
    var newTopping2 = new Topping("Croutons");
    newPizza.toppings.push(newTopping);
    newPizza.toppings.push(newTopping2);
    newPizza.size.small = true;
    newPizza.costs();
    expect(newPizza.price).to.equal(7);
  });
  it("calculates the price of a large Pizza object and updates the price", function() {
    var newPizza = new Pizza();
    var newSize = new Size();
    var newTopping = new Topping("oyster");
    var newTopping2 = new Topping("Saddle Leather");
    newPizza.toppings.push(newTopping);
    newPizza.toppings.push(newTopping2);
    newPizza.size.large = true;
    newPizza.costs();
    expect(newPizza.price).to.equal(17);
  });
});
