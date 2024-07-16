// NAMEEN:
// NAMERU:Температура цвета по Кельвину

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
У света есть температура, которая измеряется в Кельвинах. Чем выше температура, тем синее свечение.

Напишите функцию `kelvinToColor`, которая принимает один параметр - температуру в Кельвинах.

Функция должна возвращать строку, которая описывает цвет свечения.

Примеры запуска функции:
```javascript
kelvinToColor(2000); // '2000K - Warm'
kelvinToColor(3000); // '3000K - Soft white'
kelvinToColor(4500); // '4500K - White'
kelvinToColor(6500); // '6500K - Cool white'
kelvinToColor(8000); // '8000K - Cold'
```

* До 2000 Кельвинов - `Warm`
* 2000 - 2999 Кельвинов - `Soft white`
* 3000 - 4499 Кельвинов - `White`
* 4500 - 6499 Кельвинов - `Cool white`
* от 6500 - `Cold`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function kelvinToColor(kelvin) {
  if (kelvin < 2000) return `${kelvin}K - Warm`;
  if (kelvin < 3000) return `${kelvin}K - Soft white`;
  if (kelvin < 4500) return `${kelvin}K - White`;
  if (kelvin < 6500) return `${kelvin}K - Cool white`;
  return `${kelvin}K - Cold`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function kelvinToColor', () => {
  expect(kelvinToColor).to.be.a('function');
});

it('kelvinToColor(1500) should return "1500K - Warm"', () => {
  expect(kelvinToColor(1500)).to.equal('1500K - Warm');
});

it('kelvinToColor(2000) should return "2000K - Soft white"', () => {
  expect(kelvinToColor(2000)).to.equal('2000K - Soft white');
});

it('kelvinToColor(2001) should return "2001K - Soft white"', () => {
  expect(kelvinToColor(2001)).to.equal('2001K - Soft white');
});

it('kelvinToColor(2999) should return "2999K - Soft white"', () => {
  expect(kelvinToColor(2999)).to.equal('2999K - Soft white');
});

it('kelvinToColor(3000) should return "3000K - White"', () => {
  expect(kelvinToColor(3000)).to.equal('3000K - White');
});

it('kelvinToColor(3001) should return "3001K - White"', () => {
  expect(kelvinToColor(3001)).to.equal('3001K - White');
});

it('kelvinToColor(4499) should return "4499K - White"', () => {
  expect(kelvinToColor(4499)).to.equal('4499K - White');
});

it('kelvinToColor(4500) should return "4500K - Cool white"', () => {
  expect(kelvinToColor(4500)).to.equal('4500K - Cool white');
});

it('kelvinToColor(4501) should return "4501K - Cool white"', () => {
  expect(kelvinToColor(4501)).to.equal('4501K - Cool white');
});

it('kelvinToColor(6499) should return "6499K - Cool white"', () => {
  expect(kelvinToColor(6499)).to.equal('6499K - Cool white');
});

it('kelvinToColor(6500) should return "6500K - Cold"', () => {
  expect(kelvinToColor(6500)).to.equal('6500K - Cold');
});

it('kelvinToColor(6501) should return "6501K - Cold"', () => {
  expect(kelvinToColor(6501)).to.equal('6501K - Cold');
});

it('kelvinToColor(8000) should return "8000K - Cold"', () => {
  expect(kelvinToColor(8000)).to.equal('8000K - Cold');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
