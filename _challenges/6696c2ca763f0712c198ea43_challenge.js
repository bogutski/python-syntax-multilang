// NAMEEN:
// NAMERU:Сумма дробей от 1 до 1/n

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `fractionSum` принимает число `n` и возвращает сумму от единицы до `1/n (1/1 + 1/2 + 1/3 + ... + 1/n)`

`n` - целое число, больше нуля

Сумма должна быть округлена до 2 знаков после запятой.
Для округления используйте метод `toFixed` и преобразуйте результат в число с помощью метода `Number`.
Пример округления:
```javascript
let a = 1.2345;
Number(a.toFixed(2)) // 1.23

let b = 1.2355;
b.toFixed(2) // "1.24" - строка. Метод `toFixed` возвращает строку округленного числа
Number(b.toFixed(2)) // 1.24 - число. Метод `Number` преобразует строку в число
```

Пример запуска функции:
```javascript
fractionSum(3) // 1 + 1/2 + 1/3 = 1.83
fractionSum(5) // 1 + 1/2 + 1/3 + 1/4 + 1/5 = 2.28
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fractionSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + 1 / i
  }
  return Number(sum.toFixed(2))
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function fractionSum', () => {
  expect(fractionSum).to.be.a('function');
});

it('fractionSum(3) should return 1.83', () => {
  expect(fractionSum(3)).to.equal(1.83);
});

it('fractionSum5) should return 2.28', () => {
  expect(fractionSum(5)).to.equal(2.28);
});

it('fractionSum(10) should return 2.93', () => {
  expect(fractionSum(10)).to.equal(2.93);
});

it('fractionSum(100) should return 5.19', () => {
  expect(fractionSum(100)).to.equal(5.19);
});

it('fractionSum(1) should return 1', () => {
  expect(fractionSum(1)).to.equal(1);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
