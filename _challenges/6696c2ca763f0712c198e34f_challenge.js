// NAMEEN:
// NAMERU:Справедливое округление в стиле Робина Гуда

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В сказочной вселенной делается специальный кассовый аппарат, который округляет чеки покупок, чтобы богатые платили больше.

Напишите функцию `robinHoodRound`, которая принимает число и возвращает его округленное значение.

Правила округления:
* Если число больше либо равно 100, то округляем вверх и добавляем 18% - налог на богатство
* Если число меньше 100, то округляем вниз и добавляем 5% - налог на бедность.

Вычисление налога происходит от предварительно округленного числа.

После добавления налога, число округляется до целого в большую сторону.


Примеры запуска функции:
```javascript
robinHoodRound(100); // 118
robinHoodRound(99); // 104
robinHoodRound(105.78); // 124
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function robinHoodRound(number) {
  const tax = number >= 100 ? 1.18 : 1.05;

  if (number >= 100) number = Math.ceil(number);
  else number = Math.floor(number);

  return Math.ceil(number * tax);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function robinHoodRound', () => {
  expect(robinHoodRound).to.be.a('function');
});

it('robinHoodRound(100) should return 118', () => {
  expect(robinHoodRound(100)).to.be.equal(118);
});

it('robinHoodRound(99) should return 104', () => {
  expect(robinHoodRound(99)).to.be.equal(104);
});

it('robinHoodRound(105.78) should return 126', () => {
  expect(robinHoodRound(105.78)).to.be.equal(126);
});

it('robinHoodRound(104.345) should return 124', () => {
  expect(robinHoodRound(104.345)).to.be.equal(124);
});

it('robinHoodRound(14.615) should return 15', () => {
  expect(robinHoodRound(14.615)).to.be.equal(15);
});

it('robinHoodRound(104.745) should return 124', () => {
  expect(robinHoodRound(104.745)).to.be.equal(124);
});

it('robinHoodRound(756.149) should return 894', () => {
  expect(robinHoodRound(756.149)).to.be.equal(894);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
