
describe("vendingMachine", function(){
  
  // ************* Accept Coins ************* //
  
  it("should accept coins so that money can be collected from the customer", function () {
    var result = vendingMachine.insertCoin(5); //nickels are just fine
    expect(result).toEqual(successCode); //todo - insertCoin return updated display on success?
  });
  //todo - add additional coin acceptance tests
  
  it("should reject invalid currency", function(){
    var result = vendingMachine.insertCoin(1); //pennies are no bueno. They cost more to mint than they're worth anyway lol
    expect(result).toEqual(failureCode); //todo - insertCoin return failureCode (negative number?) on failure?
  });
  //todo - add additional coin failure tests
  
  it("should add to the total when a valid coin is inserted", function(){
    var result = vendingMachine.insertCoin(25);
    expect(result).toEqual(successCode); //todo - insertCoin return updated display on success?
  });
  
  it("should display INSERT COIN when no coins are inserted", function(){ 
    var result = vendingMachine.clearCoins();
    expect(result).toEqual("INSERT COIN"); //todo - INSERT COIN should be a constant
  });
  
  //todo - test to assert display says INSERT COIN when no coins are inserted
  
  
  // ************* Select Product ************* //
  
  
  // ************* Make Change ************* //
  
  
  // ************* Return Coins ************* //
  
  
  // ************* Sold Out ************* //
  
  
  // ************* Exact Change Only ************* //
    
  
});