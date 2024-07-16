// NAMEEN:
// NAMERU:Прервать подсчёт символов в строке на букве R

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stopAtR`, которая принимает один параметр - строку произвольной длины.

Функция должна вернуть количество символов в строке.

Подсчёт символов должен прерваться при первой встрече с буквой `R`.

Пример запуска функции:
```javascript
stopAtR('R') // 0
stopAtR('rftgjkfdttfjRhZKlbgf') // 12
stopAtR('rf7 jkfd') // 8
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopAtR(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'R') break;
    count++
  }
  return count
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopAtR', () => {
  expect(stopAtR).to.be.a('function');
});

it('stopAtR("R") should return 0', () => {
  expect(stopAtR("R")).to.be.equal(0);
});

it('stopAtR("rftgjkfdttfjRhZKlbgf") should return 12', () => {
  expect(stopAtR("rftgjkfdttfjRhZKlbgf")).to.be.equal(12);
});

it('stopAtR("rftgjkfd") should return 8', () => {
  expect(stopAtR("rftgjkfd")).to.be.equal(8);
});

it('stopAtR("") should return 0', () => {
  expect(stopAtR("")).to.be.equal(0);
});

it('stopAtR("rftgjkfdttfjyTWRZKlbgf") should return 15', () => {
  expect(stopAtR("rftgjkfdttfjyTWRZKlbgf")).to.be.equal(15);
});

it('stopAtR("rftg dRtf RZKlbgf") should return 6', () => {
  expect(stopAtR("rftg dRtf RZKlbgf")).to.be.equal(6);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
