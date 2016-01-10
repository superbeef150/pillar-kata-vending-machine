
describe("vendingMachine", function(){
  
  it("should accept coins so that money can be collected from the customer", function () {
    var result = vendingMachine.insertCoin(5); //nickels are just fine
    expect(result).toEqual(successCode);
  });
  //todo - add additional 
  
  it("should reject invalid currency", function(){
    var result = vendinmachine.insertCoin(1); //pennies are no bueno. They cost more to mint than they're worth anyway lol
    expect(result).toEqual(failureCode);
  });
  
  
  
});