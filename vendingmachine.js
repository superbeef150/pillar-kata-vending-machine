var vendingMachine = function () {
  
  var coinsCurrentlyInserted = 0;
  
  var insertCoin = function (coin) {
    if (coin === 5 || coin === 10 || coin === 25){ //todo - put acceptable coins into a constant list and refactor this line using that
      coinsCurrentlyInserted += coin;
    }
    return -1; //failure (bad coin?) //todo - log failure to console?
  }
  
  
  
}();