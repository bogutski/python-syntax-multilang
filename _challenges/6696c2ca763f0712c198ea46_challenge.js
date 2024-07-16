// NAMEEN:
// NAMERU:Сумма степеней числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `powerOfNum` принимает два параметра: число `num` и степень `power`.

Необходимо найти сумму всех степеней числа `num` от `num ** power` до `num ** num`.

Например, если передать в функцию `powerOfNum` число 2 и степень 4, то функция должна получить сумму 28, так как:
 * 2 в степени 4 равно 16
 * 2 в степени 3 равно 8
 * 2 в степени 2 равно 4
 * Сумма этих чисел равна 28

Если `power` меньше `num`, то функция должна вернуть строку вида: `Sum is "num ** power"`.

Функция должна вернуть строку вида: `Sum is "sum"`.

Для этого создайте цикл от `power` до `num` включительно и суммируйте результаты возведения в степень `sum = sum +  num ** i`.

Исправьте код, чтобы он работал правильно.

Примеры запуска функции:
```javascript
powerOfNum(2, 3) // 'Sum is 12'  (2 ** 3 + 2 ** 2 = 12)

powerOfNum(2, 4) // 'Sum is 28' (2 ** 4 + 2 ** 3 + 2 ** 2 = 28)

powerOfNum(4, 1) // 'Sum is 4'   (4 ** 1 = 4)

```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function PowerOfNum(num, power){
  if (power < num) return `Sum is num ** power`;
  let sum = 1;
  for (let i = num ** power; i >= num ; i++){
    sum = sum +  num ** i;
  }
  return `Sum is "sum"`;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function powerOfNum(num, power){
  if (power < num) return `Sum is ${num ** power}`;
  let sum = 0;
  for (let i = power; i >= num; i--){
    sum = sum +  num ** i;
  }
  return `Sum is ${sum}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function powerOfNum', () => {
  expect(powerOfNum).to.be.a('function');
});

it('powerOfNum(2, 3) should return 12', () => {
  expect(powerOfNum(2, 3)).to.equal('Sum is 12');
});

it('powerOfNum(3, 4) should return 108', () => {
  expect(powerOfNum(3, 4)).to.equal('Sum is 108');
});

it('powerOfNum(2, 5) should return 60', () => {
  expect(powerOfNum(2, 5)).to.equal('Sum is 60');
});

it('powerOfNum(3, 5) should return 351', () => {
  expect(powerOfNum(3, 5)).to.equal('Sum is 351');
});

it('powerOfNum(2, 1) should return 2', () => {
  expect(powerOfNum(2, 1)).to.equal('Sum is 2');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
