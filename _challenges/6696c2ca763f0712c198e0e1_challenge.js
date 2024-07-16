// NAMEEN:
// NAMERU:Вес коробки с монетами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Есть монеты номиналом `1`, `5`, `10`, `25` центов.

Создадим переменные которые будут определять вес каждой монеты в граммах.

* cent1 = 2.5
* cent5 = 5
* cent10 = 2
* cent25 = 5.67


Напишите функцию `coinBox`, которая принимает параметры:
* `cent1Count` – количество монет номиналом 1 цент
* `cent5Count` – количество монет номиналом 5 центов
* `cent10Count` – количество монет номиналом 10 центов
* `cent25Count` – количество монет номиналом 25 центов
* `boxWeight` – вес коробки в килограммах.

Если вес коробки не указан, то по умолчанию он равен `0.5` килограмм.

Функция должна возвращать вес коробки с монетами в `фунтах`.

`453,6 грамм = 1 фунт`

В функции используйте следующий алгоритм:
```javascript
const weight = cent1Count * cent1 + cent5Count * cent5 + cent10Count * cent10 + cent25Count * cent25 + boxWeight * 1000;
const totalWeight = weight / 453.6;
```

* Создайте переменную `alexCoinBox` и присвойте ей результат вызова функции `coinBox(1, 2, 3, 4)`
* Создайте переменную `bobCoinBox` и присвойте ей результат вызова функции `coinBox(1, 2, 3, 4, 0.7)`
* Создайте переменную `charlieCoinBox` и присвойте ей результат вызова функции `coinBox(1, 2, 3, 4, 0.3)`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const cent1 = 2.5;
const cent5 = 5;
const cent10 = 2;
const cent25 = 5.67;

function coinBox(cent1Count, cent5Count, cent10Count, cent25Count, boxWeight = 0.5) {
  const weight = cent1Count * cent1 + cent5Count * cent5 + cent10Count * cent10 + cent25Count * cent25 + boxWeight * 1000;
  return weight / 453.6;
}

const alexCoinBox = coinBox(1, 2, 3, 4);
const bobCoinBox = coinBox(1, 2, 3, 4, 0.7);
const charlieCoinBox = coinBox(1, 2, 3, 4, 0.3);
// SOLUTIONEND


// OPENTESTSSTART
it('Created variables cent1 = 2.5, cent5 = 5, cent10 = 2, cent25 = 5.67', () => {
  expect(cent1).eql(2.5);
  expect(cent5).eql(5);
  expect(cent10).eql(2);
  expect(cent25).eql(5.67);
});

it('Created function coinBox', () => {
  expect(coinBox).to.be.a('function');
});

it('coinBox(1, 1, 1, 1) should return 0.5', () => {
  expect(coinBox(1, 1, 1, 1)).eql(1.1357363315696647);
});

it('coinBox(1, 1, 1, 1, 0.5) should return 1.1357363315696647', () => {
  expect(coinBox(1, 1, 1, 1, 0.5)).eql(1.1357363315696647);
});

it('coinBox(2, 3, 4, 5) should return 1.5897363315696647', () => {
  expect(coinBox(2, 3, 4, 5)).eql(1.226521164021164);
});

// alexCoinBox = coinBox(1, 2, 3, 4); // 1.1357363315696647
it('alexCoinBox should be 1.1930776014109346', () => {
  expect(alexCoinBox).eq(coinBox(1, 2, 3, 4));
  expect(alexCoinBox).eql(1.1930776014109346);
});

// bobCoinBox = coinBox(1, 2, 3, 4, 0.7); // 1.5897363315696647
it('bobCoinBox should be 1.6339947089947089', () => {
  expect(bobCoinBox).eq(coinBox(1, 2, 3, 4, 0.7));
  expect(bobCoinBox).eql(1.6339947089947089);
});

// charlieCoinBox = coinBox(1, 2, 3, 4, 0.3); // 0.6817363315696647
it('charlieCoinBox should be 0.7521604938271604', () => {
  expect(charlieCoinBox).eq(coinBox(1, 2, 3, 4, 0.3));
  expect(charlieCoinBox).eql(0.7521604938271604);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
