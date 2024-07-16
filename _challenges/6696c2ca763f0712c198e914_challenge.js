// NAMEEN:
// NAMERU:Разделение массива на положительные и отрицательные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `positiveAndNegative`, которая принимает массив чисел и возвращает массив из двух массивов:

* первый - массив содержит положительные числа,
* второй - отрицательные.

Пример запуска функции:
```javascript
positiveAndNegative([1, 2, 3, -1, -2, -3]); // [[1, 2, 3], [-1, -2, -3]]
positiveAndNegative([-5, 5, 0, -10, 10]); // [[5, 0, 10], [-5, -10]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function positiveAndNegative(array){
  const positive = [];
  const negative = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] < 0) negative.push(array[i]);
    else positive.push(array[i]);
  }
  return [positive, negative];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function positiveAndNegative', () => {
  expect(positiveAndNegative).to.be.a('function');
});

it('positiveAndNegative([-100, 5, 5, 5, -100]) should return [[5, 5, 5], [-100, -100]]', () => {
  expect(positiveAndNegative([-100, 5, 5, 5, -100])).to.deep.equal([[5, 5, 5], [-100, -100]]);
});

it('positiveAndNegative([1, 2, -2, -1, 2, 1]) should return [[1, 2, 2, 1], [-2, -1]]', () => {
  expect(positiveAndNegative([1, 2, -2, -1, 2, 1])).to.deep.equal([[1, 2, 2, 1], [-2, -1]]);
});

it('positiveAndNegative([5, 25, 50, 100, 200, 500]) should return [[5, 25, 50, 100, 200, 500], []]', () => {
  expect(positiveAndNegative([5, 25, 50, 100, 200, 500])).to.deep.equal([[5, 25, 50, 100, 200, 500], []]);
});

it('positiveAndNegative([-3, -6, -9, -12, -15, -18]) should return [[], [-3, -6, -9, -12, -15, -18]]', () => {
  expect(positiveAndNegative([-3, -6, -9, -12, -15, -18])).to.deep.equal([[], [-3, -6, -9, -12, -15, -18]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
