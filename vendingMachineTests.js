
describe("vendingMachine", function(){
  
  it("should accept coins so that money can be collected from the customer", function () {
    var result = vendingMachine.insertCoin(5);
    expect(result).toEqual(true);
  });
  
});