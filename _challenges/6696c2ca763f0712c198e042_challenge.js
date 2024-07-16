// NAMEEN:
// NAMERU:Вычислить стоимость квадратного фута при покупке квартиры

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `pricePerSquareFoot`, которая принимает габариты трех комнат и цену.

Параметры:
- `length1` - длина первой комнаты
- `width1` - ширина первой комнаты
- `length2` - длина второй комнаты
- `width2` - ширина второй комнаты
- `length3` - длина третьей комнаты
- `width3` - ширина третьей комнаты
- `price` - цена квартиры

Габариты комнаты - это длина и ширина указываются в футах.

Функция должна возвращать стоимость квадратного фута.

Пример:
```javascript
pricePerSquareFoot(10, 10, 10, 10, 10, 10, 30000) // 100
```

Названия параметров должны быть обязательно такими как в условии.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function pricePerSquareFoot(length1, width1, length2, width2, length3, width3, price) {
  const totalSquareFeet = length1 * width1 + length2 * width2 + length3 * width3;
  return price / totalSquareFeet;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function pricePerSquareFoot', () => {
  expect(pricePerSquareFoot).to.be.a('function');
});

it('pricePerSquareFoot(10, 10, 10, 10, 10, 10, 30000) should return 100', () => {
  expect(pricePerSquareFoot(10, 10, 10, 10, 10, 10, 30000)).to.equal(100);
});

it('pricePerSquareFoot(10, 10, 10, 10, 10, 10, 10000) should return 33.33', () => {
  expect(pricePerSquareFoot(10, 10, 10, 10, 10, 10, 10000)).to.equal(33.333333333333336);
});

it('pricePerSquareFoot(10, 10, 10, 10, 10, 10, 100000) should return 333.33', () => {
  expect(pricePerSquareFoot(10, 10, 10, 10, 10, 10, 100000)).to.equal(333.3333333333333);
});

it('Function pricePerSquareFoot has parameters length1, width1, length2, width2, length3, width3, price', () => {
  // function to string and then to array of arguments
  const args = pricePerSquareFoot.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['length1', 'width1', 'length2', 'width2', 'length3', 'width3', 'price']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
