// NAMEEN:
// NAMERU:Преобразование долей в проценты с форматированием

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `convertToPercentages`, которая принимает массив чисел, каждое из которых представляет долю от целого.

Функция создает новый массив, содержащий строки. Каждая строка представляет собой процентное значение соответствующей доли из исходного массива, округленное до двух десятичных знаков и дополненное символом процента.

Для этого используйте метод `map()`.


Пример запуска функции:
```javascript
convertToPercentages([0.3, 0.1, 0.2, 0.4]); // [ '30.00 %', '10.00 %', '20.00 %', '40.00 %' ]
convertToPercentages([0.25, 0.7, 0.95, 0]); // [ '25.00 %', '70.00 %', '95.00 %', '0.00 %' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function convertToPercentages(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function convertToPercentages(arr) {
  return arr.map(n => (n * 100).toFixed(2) + ' %')
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function convertToPercentages', () => {
  expect(convertToPercentages).to.be.a('function');
});

it('Function formatUserInfo should include method map()', () => {
  const res = convertToPercentages.toString()
  expect(res).to.include('.map(')
});

it("convertToPercentages([0.3, 0.1, 0.2, 0.4]) should return ['30.00 %', '10.00 %', '20.00 %', '40.00 %']", () => {
  expect(convertToPercentages([0.3, 0.1, 0.2, 0.4])).to.deep.equal(['30.00 %', '10.00 %', '20.00 %', '40.00 %']);
});

it("convertToPercentages([0.25, 0.75]) should return ['25.00 %', '75.00 %']", () => {
  expect(convertToPercentages([0.25, 0.75])).to.deep.equal(['25.00 %', '75.00 %']);
});

it("convertToPercentages([1]) should return ['100.00 %']", () => {
  expect(convertToPercentages([1])).to.deep.equal(['100.00 %']);
});

it("convertToPercentages([0]) should return ['0.00 %']", () => {
  expect(convertToPercentages([0])).to.deep.equal(['0.00 %']);
});

it("convertToPercentages([0.123, 0.877]) should return ['12.30 %', '87.70 %']", () => {
  expect(convertToPercentages([0.123, 0.877])).to.deep.equal(['12.30 %', '87.70 %']);
});

it("convertToPercentages([0.505, 0.305]) should return ['50.50 %', '30.50 %']", () => {
  expect(convertToPercentages([0.505, 0.305])).to.deep.equal(['50.50 %', '30.50 %']);
});

it("convertToPercentages([0.999]) should return ['99.90 %']", () => {
  expect(convertToPercentages([0.999])).to.deep.equal(['99.90 %']);
});

it("convertToPercentages([0.3333, 0.6667]) should return ['33.33 %', '66.67 %']", () => {
  expect(convertToPercentages([0.3333, 0.6667])).to.deep.equal(['33.33 %', '66.67 %']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
