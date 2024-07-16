// NAMEEN:
// NAMERU:Малярная работа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для покраски одного квадратного фута стены требуется 30 унций краски.
Маляр может покрасить 15 квадратных футов стены за 1 час.

Напиши функцию `paintingJob`, которая принимает параметры:
`length` – длина стены в футах
`width` – ширина стены в футах

Функция должна возвращать строку вида: `Time: 6.666666666666667. Paint: 3000. Area: 100. Enjoy!`

`Time, h` – время, которое потребуется для покраски стены в часах

`Paint` – количество краски, которое потребуется для покраски стены в унциях

`Area` – площадь стены в квадратных футах


* Высчитайте общую площадь стены в квадратных футах.
* Высчитайте количество краски, которое потребуется для покраски стены в унциях, для этого умножьте площадь стены на 30.
* Для расчета времени, которое потребуется для покраски стены, разделите площадь стены на 15.

Пример:
```javascript
painting(10, 10); // Time: 6.666666666666667. Paint: 3000. Area: 100. Enjoy!

// area 10 * 10 = 100
// paintNeeded 100 * 30 = 3000
// time 100 / 15 = 6.666666666666667

// result: Time: 6.666666666666667. Paint: 3000. Area: 100. Enjoy!

```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun paint
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function paintingJob(length, width) {
  const area = length * width;
  const paintNeeded = area * 30;
  const time = area / 15;
  return `Time: ${time}. Paint: ${paintNeeded}. Area: ${area}. Enjoy!`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function paintingJob', () => {
  expect(paintingJob).to.be.a('function');
});

it('paintingJob(10, 10) should return Time: 6.666666666666667. Paint: 3000. Area: 100. Enjoy!', () => {
  expect(paintingJob(10, 10)).to.be.equal('Time: 6.666666666666667. Paint: 3000. Area: 100. Enjoy!');
});

it('paintingJob(10, 20) should return Time: 13.333333333333334. Paint: 6000. Area: 200. Enjoy!', () => {
  expect(paintingJob(10, 20)).to.be.equal('Time: 13.333333333333334. Paint: 6000. Area: 200. Enjoy!');
});

it('paintingJob(10, 30) should return Time: 20. Paint: 9000. Area: 300. Enjoy!', () => {
  expect(paintingJob(10, 30)).to.be.equal('Time: 20. Paint: 9000. Area: 300. Enjoy!');
});

it('paintingJob(10, 40) should return Time: 26.666666666666668. Paint: 12000. Area: 400. Enjoy!', () => {
  expect(paintingJob(10, 40)).to.be.equal('Time: 26.666666666666668. Paint: 12000. Area: 400. Enjoy!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
