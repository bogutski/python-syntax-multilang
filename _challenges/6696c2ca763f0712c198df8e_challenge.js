// NAMEEN:
// NAMERU:Рассчитать стоимость доставки товара для группы покупателей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `deliveryCost`, которая возвращает стоимость доставки для каждого участника.

Функция принимает параметры:
* `distance` - расстояние в милях
* `weight` - вес в фунтах
* `mileCost` - стоимость одной мили в долларах
* `participants` - количество участников

Участники делят стоимость доставки поровну.

Функция должна возвращать стоимость доставки в долларах.

Используем вес и расстояние для расчета общей стоимости доставки.

Стоимость доставки рассчитывается по формуле:

`общая стоимость доставки = вес * расстояние * стоимость одной мили`

Разделите общую стоимость доставки на количество участников.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun (){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deliveryCost(distance, weight, mileCost, participants) {
  return (distance * weight * mileCost) / participants;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deliveryCost', () => {
  expect(deliveryCost).to.be.a('function');
});

it('deliveryCost(1, 1, 1, 1) returns 1', () => {
  expect(deliveryCost(1, 1, 1, 1)).to.equal(1);
});

it('deliveryCost(1, 1, 1, 2) returns 0.5', () => {
  expect(deliveryCost(1, 1, 1, 2)).to.equal(0.5);
});

it('deliveryCost(10, 10, 10, 2) returns 500', () => {
  expect(deliveryCost(10, 10, 10, 2)).to.equal(500);
});

it('deliveryCost(1, 1, 1, 4) returns 0.25', () => {
  expect(deliveryCost(1, 1, 1, 4)).to.equal(0.25);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
