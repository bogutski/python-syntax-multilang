// NAMEEN:
// NAMERU:Повторить число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `repeatNumber`, которая принимает число.

Пусть функция возьмет число и повторит его столько раз чему равно само число.

Пример запуска функции:
```javascript
repeatNumber(1); // '1'
repeatNumber(2); // '22'
repeatNumber(3); // '333'
repeatNumber(4); // '4444'
repeatNumber(5); // '55555'
```

Результат функции должен быть строкой.

Чтобы преобразовать число в строку, используй конструкцию `(number + '')`.

```javascript
const n = 3;
console.log((n + '').repeat(n)); // '333'
```
Если вы к числу прибавите пустую строку, то получите строку.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function repeatNumber(number) {
  return (number + '').repeat(number);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeatNumber', () => {
  expect(repeatNumber).to.be.a('function');
});

it('repeatNumber(1) should return "1"', () => {
  expect(repeatNumber(1)).to.be.equal('1');
});

it('repeatNumber(2) should return "22"', () => {
  expect(repeatNumber(2)).to.be.equal('22');
});

it('repeatNumber(3) should return "333"', () => {
  expect(repeatNumber(3)).to.be.equal('333');
});

it('repeatNumber(4) should return "4444"', () => {
  expect(repeatNumber(4)).to.be.equal('4444');
});

it('repeatNumber(5) should return "55555"', () => {
  expect(repeatNumber(5)).to.be.equal('55555');
});

it('repeatNumber(6) should return "666666"', () => {
  expect(repeatNumber(6)).to.be.equal('666666');
});

it('repeatNumber(7) should return "7777777"', () => {
  expect(repeatNumber(7)).to.be.equal('7777777');
});

it('repeatNumber(8) should return "88888888"', () => {
  expect(repeatNumber(8)).to.be.equal('88888888');
});

it('repeatNumber(9) should return "999999999"', () => {
  expect(repeatNumber(9)).to.be.equal('999999999');
});

it('repeatNumber(10) should return "10101010101010101010"', () => {
  expect(repeatNumber(10)).to.be.equal('10101010101010101010');
});

it('repeatNumber(11) should return "1111111111111111111111"', () => {
  expect(repeatNumber(11)).to.be.equal('1111111111111111111111');
});

it('repeatNumber(12) should return "121212121212121212121212"', () => {
  expect(repeatNumber(12)).to.be.equal('121212121212121212121212');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
