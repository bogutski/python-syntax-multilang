// NAMEEN:
// NAMERU:Массив из нечетных чисел от большего к меньшему

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `arrayOdd` принимает два числа `num1` и `num2`.

Функция должна возвращать массив всех нечетных чисел между `num1` и `num2` включительно в порядке убывания.

Первоначально необходимо проверить, какое из чисел больше, а какое меньше и применить цикл `for` для перебора чисел в нужном диапазоне.

Исправьте ошибки в коде, чтобы он работал правильно.

Пример запуска функции:
```javascript
arrayOdd(1, 4) // [3, 1]
arrayOdd(7, 1) // [7, 5, 3, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function arrayOdd(num1; num2){
  let arr=[];
  if(num1 > num2){
    for(let i=num2, i<=num1; i++){
      if(i%2 !== 0){arr.push(i)}
    }
  } else {
    for(let i=num2, i>=num1, i--){
      if(i%2 === 0){arr.push(i)}
  }
  return arr.push(i)
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayOdd(num1, num2) {
  let arr = []
  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      if (i % 2 !== 0) {
        arr.push(i)
      }
    }
  } else {
    for (let i = num2; i >= num1; i--) {
      if (i % 2 !== 0) {
        arr.push(i)
      }
    }
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function arrayOdd', () => {
  expect(arrayOdd).to.be.a('function');
});

it('arrayOdd(1, 4) should return [3, 1]', () => {
  expect(arrayOdd(1, 4)).to.eql([3, 1]);
});

it('arrayOdd(7, 1) should return [7, 5, 3, 1]', () => {
  expect(arrayOdd(7, 1)).to.eql([7, 5, 3, 1]);
});

it('arrayOdd(1, 1) should return [1]', () => {
  expect(arrayOdd(1, 1)).to.eql([1]);
});

it('arrayOdd(1, 2) should return [1]', () => {
  expect(arrayOdd(1, 2)).to.eql([1]);
});

it('arrayOdd(-5, 1) should return [1, -1, -3, -5]', () => {
  expect(arrayOdd(-5, 1)).to.eql([1, -1, -3, -5])
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
