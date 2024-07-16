// NAMEEN:
// NAMERU:Четные против нечетных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `evenVsOdd`, которая принимает два числа `num1` и `num2`.

Создайте две переменные `sumOfOdd` и `sumOfEven`, которые будут хранить сумму нечетных и четных чисел соответственно.

Создайте цикл, который будет перебирать числа от `num1` до `num2` включительно и суммировать их в переменные `sumOfOdd` и `sumOfEven`.

После завершения цикла сравните суммы четных и нечетных чисел и верните строку:

* `Sum of even win` - если сумма четных чисел больше,
* `Sum of odd win` - если сумма нечетных чисел больше,
* `Draw` - если суммы равны.

Примеры вызова функции:
```javascript
evenVsOdd(1, 11); // 'Sum of odd win'
evenVsOdd(1, 12); // 'Sum of even win'
evenVsOdd(-10, 10); // 'Draw'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function evenVsOdd(num1, num2){
  let sumOfOdd = 0;
  let sumOfEven = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) sumOfEven += i;
    else sumOfOdd += i;
  }
  if (sumOfEven > sumOfOdd) return 'Sum of even win';
  else if (sumOfEven < sumOfOdd) return 'Sum of odd win';
  else return 'Draw';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function evenVsOdd', () => {
  expect(evenVsOdd).to.be.a('function');
});

it('evenVsOdd(1, 11) should return Sum of odd win', () => {
  expect(evenVsOdd(1, 11)).to.equal('Sum of odd win');
});

it('evenVsOdd(-1, 11) should return Sum of odd win', () => {
  expect(evenVsOdd(-1, 11)).to.equal('Sum of odd win');
});

it('evenVsOdd(1, 12) should return Sum of even win', () => {
  expect(evenVsOdd(1, 12)).to.equal('Sum of even win');
});

it('evenVsOdd(50, 66) should return Sum of even win', () => {
  expect(evenVsOdd(50, 66)).to.equal('Sum of even win');
});

it('evenVsOdd(-10, 10) should return Draw', () => {
  expect(evenVsOdd(-10, 10)).to.equal('Draw');
});

it('evenVsOdd(-17, 17) should return Draw', () => {
  expect(evenVsOdd(-17, 17)).to.equal('Draw');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
