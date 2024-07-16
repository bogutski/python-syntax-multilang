// NAMEEN:
// NAMERU:Сумма целых и дробных чисел в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfFractionalNumbers`, которая принимает строку с различными символами, включая целые и дробные положительные числа.

Функция должна вернуть сумму всех чисел.

Эта задача принципиально похожа на предыдущее задание, но здесь еще нужно добавить проверку на точку `.`.

Например, строка `1, 2 3.5 and 4` должна вернуть `10.5`.

В данной задаче мы будем собирать во временную переменную не только числа, но и точку `.` и потом преобразовывать ее в число и суммировать с остальными числами.


Пример запуска функции:
```javascript
sumOfFractionalNumbers('1, 2 3.5 and 4') // 10.5
sumOfFractionalNumbers('a 5b c 7.5') // 12.5
sumOfFractionalNumbers('  9.1   5 abc3,2') // 19.1
sumOfFractionalNumbers('#$ test $#') // 0
sumOfFractionalNumbers('') // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfFractionalNumbers(str){
  const numbers = '0123456789';
  let sum = 0;
  let chunk = '';
  for (let i = 0; i < str.length; i++) {
    if (numbers.includes(str[i]) || str[i] === '.') chunk += str[i];
    else {
      sum += Number(chunk);
      chunk = '';
    }
  }
  if (chunk) sum += Number(chunk);
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfFractionalNumbers', () => {
  expect(sumOfFractionalNumbers).to.be.a('function');
});

it("sumOfFractionalNumbers('1, 2 3.5 and 4') should return 10.5", () => {
  expect(sumOfFractionalNumbers('1, 2 3.5 and 4')).to.be.equal(10.5);
});

it("sumOfFractionalNumbers('a 5b c 7.5') should return 12.5", () => {
  expect(sumOfFractionalNumbers('a 5b c 7.5')).to.be.equal(12.5);
});

it("sumOfFractionalNumbers('1.5, 2.5, 3.5') should return 7.5", () => {
  expect(sumOfFractionalNumbers('1.5, 2.5, 3.5')).to.be.equal(7.5);
});

it("sumOfFractionalNumbers('1.55   35.123 test45,#123') should return 204.673", () => {
  expect(sumOfFractionalNumbers('1.55   35.123 test45,#123')).to.be.equal(204.673);
});

it("sumOfFractionalNumbers('# test no numbers #') should return 0", () => {
  expect(sumOfFractionalNumbers('# test no numbers #')).to.be.equal(0);
});

it("sumOfFractionalNumbers('') should return 0", () => {
  expect(sumOfFractionalNumbers('')).to.be.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
