// NAMEEN:
// NAMERU:Каждый пятый в очереди получает бесплатный билет

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `getFreeTicket`, которая принимает номер человека в очереди и возвращает `true`, если этот человек получает бесплатный билет.

Если человек не получает бесплатный билет, то функция должна вернуть `false`.

Нужно проверить, что номер человека делится на 5 без остатка.

Если обратится человек с номером в очереди больше 100, то функция должна вернуть `false`.

Пример использования дополнительного условия:

```javascript
function getSomething(position) {
  if(position < 0) return false;

  if(position % 2 === 0) return true;
  return false;
}

Обратите внимание на последний return. Он не находится в блоке else, но все равно выполняется только в том случае, если условие в if не выполняется.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getFreeTicket(position) {
  if (position > 100) return false;
  return position % 5 === 0;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getFreeTicket', () => {
  expect(getFreeTicket).to.be.a('function');
});

it('getFreeTicket(5) should return true', () => {
  expect(getFreeTicket(5)).to.equal(true);
});

it('getFreeTicket(10) should return true', () => {
  expect(getFreeTicket(10)).to.equal(true);
});

it('getFreeTicket(11) should return false', () => {
  expect(getFreeTicket(11)).to.equal(false);
});

it('getFreeTicket(12) should return false', () => {
  expect(getFreeTicket(12)).to.equal(false);
});

it('getFreeTicket(13) should return false', () => {
  expect(getFreeTicket(13)).to.equal(false);
});

it('getFreeTicket(100) should return true', () => {
  expect(getFreeTicket(100)).to.equal(true);
});

it('getFreeTicket(111) should return false', () => {
  expect(getFreeTicket(110)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
