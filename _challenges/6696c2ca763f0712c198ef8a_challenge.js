// NAMEEN:
// NAMERU:Посчитать количество квартир и сумму платежей. Массив с объектами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В данной задаче необходимо посчитать сколько квартир находится в квартале и какую сумму платежей они платят.

Функция `countFees` принимает массив объектов, содержащих информацию о доме.
Нас интересуют объекты, имеющие следующую структуру (в функцию могут приходить и другие объекты):
* `apartment` - номер квартиры
* `condoFee` - сумма платежа

Необходимо вернуть объект со следующими свойствами:
* `overallApartments` - количество квартир в квартале
* `sumOfPayments` - сумма платежей всех квартир

Пример запуска функции:
```javascript
countFees([{apartment: 1, condoFee: 100}, {apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 100}, {apartment: 4, condoFee: 200}])
// {overallApartments: 4, sumOfPayments: 600}

countFees([{room: 1, name: "Utility room"},{apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 200}])
// {overallApartments: 2, sumOfPayments: 400}
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countFees(arr) {
  let obj = {};
  let count = 0;
  let result = 0;
  for (let i = arr.length-1; i >= 0; i--) {
    if("condoFee" in arr[i]) {
      count++; result = result + arr[i].condoFee;
    }
  }
  obj.overallApartments = count;
  obj.sumOfPayments = result
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countFees', () => {
  expect(countFees).to.be.a('function');
});

it('countFees([{apartment: 1, condoFee: 100}, {apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 100}, {apartment: 4, condoFee: 200}]) should returns {overallApartments: 4, sumOfPayments: 600}', () => {
  expect(countFees([{apartment: 1, condoFee: 100}, {apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 100}, {apartment: 4, condoFee: 200}])).to.deep.equal({overallApartments: 4, sumOfPayments: 600});
});

it('countFees([{apartment: 1, condoFee: 100}, {apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 100}, {apartment: 4, condoFee: 150}, {apartment: 5, condoFee: 100}, {apartment: 6, condoFee: 80}]) should returns {overallApartments: 6, sumOfPayments: 730}', () => {
  expect(countFees([{apartment: 1, condoFee: 100}, {apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 100}, {apartment: 4, condoFee: 150}, {apartment: 5, condoFee: 100}, {apartment: 6, condoFee: 80}])).to.deep.equal({overallApartments: 6, sumOfPayments: 730});
});

it('countFees([{apartment: 1, condoFee: 1000}, {apartment: 2, condoFee: 1200} should return {overallApartments: 2, sumOfPayments:2200}', () => {
  expect(countFees([{apartment: 1, condoFee: 1000}, {apartment: 2, condoFee: 1200}])).to.deep.equal({overallApartments: 2, sumOfPayments: 2200});
});

it('countFees([{room: 1, name: "Utility room"},{apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 200} ]) should return {overallApartments: 2, sumOfPayments: 400}', () => {
  expect(countFees([{room: 1, name: "Utility room"},{apartment: 2, condoFee: 200}, {apartment: 3, condoFee: 200} ])).to.deep.equal({overallApartments: 2, sumOfPayments: 400});
});

it('countFees([{building: "garage", area: 1500}, {shed: "1-1", location: "backyard"}]) should return {overallApartments: 0, sumOfPayments: 0}', () => {
  expect(countFees([{building: "garage", area: 1500}, {shed: "1-1", location: "backyard"}])).to.deep.equal({overallApartments: 0, sumOfPayments: 0});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
