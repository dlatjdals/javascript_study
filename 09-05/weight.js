/**
 * 적적 체중 구하기!!
 * 
 * 적정 체중 = (본인 신장 - 100) x 0.9
 * 
 * 신장: 175cm
 * 체중: 59kg
 * 적정 체중: 67.5kg
 * 결과: 적정 체중이 67.5kg이며, 현재 적성 체중에서 6.5kg 미만입니다.
 */

var height = 175;
var weight = 59;
var properWeight = (height-100) * 0.9;
console.log(`적정 체중이 ${properWeight}kg이며, 현재 체중에서 ${weight-properWeight}kg 초과했습니다`);