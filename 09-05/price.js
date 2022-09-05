var transportationCost = 3000
var foodExpenses = 6000
var drinkFee= 3000

var allExpense = transportationCost + foodExpenses + drinkFee;

console.log(allExpense > 10000 ? `${allExpense - 10000}원 초과` : `돈 관리를 잘했어요!`);