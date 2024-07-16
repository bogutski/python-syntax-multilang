// NAMEEN:
// NAMERU:Сумма чисел от n1 до n2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumFromN1ToN2`, которая принимает два числа `num1` и `num2` и возвращает сумму всех чисел от `num1` до `num2` включительно.

Примеры запуска функции:
```javascript
sumFromN1ToN2(0, 0) // 0
sumFromN1ToN2(1, 10) // 55
sumFromN1ToN2(10, 50) // 1230
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumFromN1ToN2(num1, num2){
  let sum = 0;
  for (let i = num1; i <= num2; i++){
    sum += i;
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumFromN1ToN2', () => {
  expect(sumFromN1ToN2).to.be.a('function');
});

it('sumFromN1ToN2(1, 10) should return 55', () => {
  expect(sumFromN1ToN2(1, 10)).to.equal(55);
});

it('sumFromN1ToN2(10, 50) should return 1230', () => {
  expect(sumFromN1ToN2(10, 50)).to.equal(1230);
});

it('sumFromN1ToN2(-10, 11) should return 11', () => {
  expect(sumFromN1ToN2(-10, 11)).to.equal(11);
});

it('sumFromN1ToN2(1000, 1005) should return 6015', () => {
  expect(sumFromN1ToN2(1000, 1005)).to.equal(6015);
});

it('sumFromN1ToN2(0, 0) should return 0', () => {
  expect(sumFromN1ToN2(0, 0)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
