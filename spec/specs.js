describe("Topping", function() {
  it("creates a new instance of Topping with a name attribute", function() {
    var newTopping = new Topping("Whole Pepper");
    expect(newTopping.name).to.equal("Whole Pepper");
  });
});
