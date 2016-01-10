
describe("vendingMachine", function(){
  
  it("should accept coins so that money can be collected from the customer", function () {
    var result = vendingMachine.insertCoin(5);
    expect(result).toEqual(successCode);
  });
  
  it("should reject invalid currency", function(){
    var result = vendinmachine.insertCoin(1);
    expect(result).toEqual(failureCode);
  });
  
});