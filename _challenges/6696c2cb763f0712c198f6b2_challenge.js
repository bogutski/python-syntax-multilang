// NAMEEN:
// NAMERU:Комплексная обработка данных и инверсия массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `complexDataProcessing`, которая принимает массив чисел и выполняет следующие операции:

* Фильтрует все числа больше 10.
* Каждое число умножает на 2.
* Исключает из массива все числа, которые теперь стали больше или равны 50.
* Возвращает новый массив с элементами в обратном порядке.

Используйте метод `toReversed()` для инвертирования массива.


Примеры запуска функции:
```javascript
complexDataProcessing([1, 2, 3, 11, 21, 31]); // [42, 22]
complexDataProcessing([5, 10, 15, 20, 25]); // [40, 30]
complexDataProcessing([12, 22, 32, 42]); // [44, 24]
complexDataProcessing([50, 60, 70]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function complexDataProcessing(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function complexDataProcessing(arr) {
  const result = []

  arr.forEach(n => {
    if(n > 10){
      n *= 2
      if(n < 50) result.push(n)
    }
  })

  return result.toReversed();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function complexDataProcessing', () => {
  expect(complexDataProcessing).to.be.a('function');
});

it("Function complexDataProcessing() should include toReversed method", () => {
  const result = complexDataProcessing.toString();
  expect(result).to.include('.toReversed()');
});

it("Function complexDataProcessing() should not include comments", () => {
  const result = complexDataProcessing.toString();
  expect(result).to.not.include('//');
  expect(result).to.not.include('/*');
});

it("Function complexDataProcessing() should not modify the original array", () => {
  let originalArray = [1, 2, 3, 4];
  complexDataProcessing(originalArray);
  expect(originalArray).to.deep.equal([1, 2, 3, 4]);
});

it("complexDataProcessing([5, 10, 15, 20, 25]) should return [40, 30]", () => {
  expect(complexDataProcessing([5, 10, 15, 20, 25])).to.deep.equal([40, 30]);
});

it("complexDataProcessing([12, 22, 32, 42]) should return [44, 24]", () => {
  expect(complexDataProcessing([12, 22, 32, 42])).to.deep.equal([44, 24]);
});

it("complexDataProcessing([50, 60, 70]) should return []", () => {
  expect(complexDataProcessing([50, 60, 70])).to.deep.equal([]);
});

it("complexDataProcessing([1, 2, 3, 11, 21, 31]) should return [42, 22]", () => {
  expect(complexDataProcessing([1, 2, 3, 11, 21, 31])).to.deep.equal([42, 22]);
});

it("complexDataProcessing([13, 23, 33]) should return [46, 26]", () => {
  expect(complexDataProcessing([13, 23, 33])).to.deep.equal([46, 26]);
});

it("complexDataProcessing([15, 25, 35]) should return [30]", () => {
  expect(complexDataProcessing([15, 25, 35])).to.deep.equal([30]);
});

it("complexDataProcessing([10, 20, 30, 40, 50]) should return [40]", () => {
  expect(complexDataProcessing([10, 20, 30, 40, 50])).to.deep.equal([40]);
});

it("complexDataProcessing([10, 22, 11, 21]) should return [42, 22, 44]", () => {
  expect(complexDataProcessing([10, 22, 11, 21])).to.deep.equal([42, 22, 44]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
