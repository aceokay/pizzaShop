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
});
