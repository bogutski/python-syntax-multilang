// NAMEEN:
// NAMERU:Найти квадратный корень всех позитивных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `squareRoot`, которая принимает массив позитивных и негативных чисел.

Числа могут иметь числовой или строковый тип данных.

Пример массив `[1, '2', -3, '-4']`.

Функция должна вернуть новый массив со значениями квадратного корня каждого позитивного числа, не зависимо от типа данных.

Если число отрицательное, то на его место в новом массиве, должно быть значение `false`.

После вычисления квадратного корня, число должно быть округлено до ближайшего целого числа.


`Hint`:
Для нахождения квадратного корня можно использовать:
* метод `Math.sqrt()`, например: `Math.sqrt(100)` вернет `10`.
* оператор `**` (возведение в степень), например: `100 ** 0.5` вернет `10`.

Для округления:
* метод `Math.round()`, например: `Math.round(10.5)` вернет `11`.


Пример запуска функции:
```javascript
squareRoot([1, '2', -3, '-4']) // [ 1, 1, false, false ]
squareRoot([0, -1, 4, '9', 16, '25', 36, 49, '64', 81, 100]) // [ 0, false, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
squareRoot([]) // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function squareRoot(arr){
  const squareRootArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) squareRootArr.push(false);
    else {
      let sqrt = Math.round(arr[i] ** 0.5);
      squareRootArr.push(sqrt);
    }
  }
  return squareRootArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function squareRoot', () => {
  expect(squareRoot).to.be.a('function');
});

it("squareRoot([1, 4, '9', 16, '25', 36, 49, '64', 81, 100]) returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
  expect(squareRoot([1, 4, '9', 16, '25', 36, 49, '64', 81, 100])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it("squareRoot([-5, 4, -69, 16, -43, 2, -6, 88, 34]) returns [false, 2, false, 4, false, 1, false, 9, 6]", () => {
  expect(squareRoot([-5, 4, -69, 16, -43, 2, -6, 88, 34])).to.deep.equal([false, 2, false, 4, false, 1, false, 9, 6]);
});

it("squareRoot([0, -5, 55, 23, -43, 2, -6, 88, 34]) returns [0, false, 7, 5, false, 1, false, 9, 6]", () => {
  expect(squareRoot([0, -5, 55, 23, -43, 2, -6, 88, 34])).to.deep.equal([0, false, 7, 5, false, 1, false, 9, 6]);
});

it("squareRoot([-1, -100, -1000, -10000]) returns [false, false, false, false]", () => {
  expect(squareRoot([-1, -100, -1000, -10000])).to.deep.equal([false, false, false, false]);
});

it("squareRoot([5, 50, '500', 5000]) returns [2, 7, 22, 71]", () => {
  expect(squareRoot([5, 50, '500', 5000])).to.deep.equal([2, 7, 22, 71]);
});

it("squareRoot([]) returns []", () => {
  expect(squareRoot([])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
