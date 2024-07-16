// NAMEEN:
// NAMERU:Коррекция и анализ пиковой активности

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Данные о посещаемости магазина по часам за один день записаны в массиве в обратном порядке (24 значения), что делает первый элемент массива соответствующим последнему часу дня, а последний — первому часу.

Напишите функцию `correctAndAnalyzePeaks`, которая выполняет следующие действия:

* Использует метод `toReversed()` для инвертирования массива, чтобы часы совпадали с правильным временем дня (индексам).
* Определяет три часа с максимальным количеством посетителей.
* Возвращает массив объектов с этими тремя часами и количеством посетителей: `[{hour: 5, visitors: 45}, ...]`.
* Массив должен быть отсортированный в порядке возрастания количества посетителей.


Примеры запуска функции:
```javascript
console.log(correctAndAnalyzePeaks([10, 12, 5, 3, 15, 18, 45, 30]));
// Вывод: [
//   { hour: 2, visitors: 18 },
//   { hour: 0, visitors: 30 },
//   { hour: 1, visitors: 45 }
// ]

console.log(correctAndAnalyzePeaks([50, 10]));
// Вывод: [
//   { hour: 1, visitors: 10 },
//   { hour: 0, visitors: 50 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function correctAndAnalyzePeaks(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function correctAndAnalyzePeaks(arr) {
  const reversed = arr.toReversed()

  let peakTime = []
  let loops

  if(arr.length >= 3) loops = 3
  else loops = arr.length

  while(peakTime.length < loops){
    const maxN = Math.max(...reversed)
    const maxIndex = reversed.indexOf(maxN)
    peakTime.push({hour:maxIndex, visitors: maxN})
    reversed.splice(maxIndex, 1, null)
  }

  return peakTime.sort((a, b) => a.visitors - b.visitors);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function correctAndAnalyzePeaks', () => {
  expect(correctAndAnalyzePeaks).to.be.a('function');
});

it("Function correctAndAnalyzePeaks() should include toReversed method", () => {
  const result = correctAndAnalyzePeaks.toString();
  expect(result).to.include('.toReversed()');
});

it("Function correctAndAnalyzePeaks() should not include comments", () => {
  const result = correctAndAnalyzePeaks.toString();
  expect(result).to.not.include('//');
  expect(result).to.not.include('/*');
});

it("Function correctAndAnalyzePeaks() should not modify the original array", () => {
  let originalArray = [1, 2, 3, 4];
  correctAndAnalyzePeaks(originalArray);
  expect(originalArray).to.deep.equal([1, 2, 3, 4]);
});

it("correctAndAnalyzePeaks([10, 12, 5, 3, 15, 18, 45, 30]) should return [{ hour: 2, visitors: 18 }, { hour: 0, visitors: 30 }, { hour: 1, visitors: 45 }]", () => {
  expect(correctAndAnalyzePeaks([10, 12, 5, 3, 15, 18, 45, 30])).to.deep.equal([{ hour: 2, visitors: 18 }, { hour: 0, visitors: 30 }, { hour: 1, visitors: 45 }]);
});

it("correctAndAnalyzePeaks([50, 10]) should return [{ hour: 0, visitors: 10 }, { hour: 1, visitors: 50 }]", () => {
  expect(correctAndAnalyzePeaks([50, 10])).to.deep.equal([{ hour: 0, visitors: 10 }, { hour: 1, visitors: 50 }]);
});

it("correctAndAnalyzePeaks([1, 2, 3, 100, 90, 80]) should return [{ hour: 0, visitors: 80 }, { hour: 1, visitors: 90 }, { hour: 2, visitors: 100 }]", () => {
  expect(correctAndAnalyzePeaks([1, 2, 3, 100, 90, 80])).to.deep.equal([{ hour: 0, visitors: 80 }, { hour: 1, visitors: 90 }, { hour: 2, visitors: 100 }]);
});

it("correctAndAnalyzePeaks([]) should return []", () => {
  expect(correctAndAnalyzePeaks([])).to.deep.equal([]);
});

it("correctAndAnalyzePeaks([100, 50]) should return [{ hour: 0, visitors: 50 }, { hour: 1, visitors: 100 }]", () => {
  expect(correctAndAnalyzePeaks([100, 50])).to.deep.equal([{ hour: 0, visitors: 50 }, { hour: 1, visitors: 100 }]);
});

it("correctAndAnalyzePeaks([100]) should return [{ hour: 0, visitors: 100 }]", () => {
  expect(correctAndAnalyzePeaks([100])).to.deep.equal([{ hour: 0, visitors: 100 }]);
});

it("correctAndAnalyzePeaks([100, 50, 50, 50, 50, 50, 50, 50]) should return [{ hour: 0, visitors: 50 }, { hour: 1, visitors: 50 }, { hour: 7, visitors: 100 }]", () => {
  expect(correctAndAnalyzePeaks([100, 50, 50, 50, 50, 50, 50, 50])).to.deep.equal([{ hour: 0, visitors: 50 }, { hour: 1, visitors: 50 }, { hour: 7, visitors: 100 }]);
});

it("correctAndAnalyzePeaks([30, 20, 10, 40, 50, 60, 70, 80]) should return [{ hour: 2, visitors: 60 }, { hour: 1, visitors: 70 }, { hour: 0, visitors: 80 }]", () => {
  expect(correctAndAnalyzePeaks([30, 20, 10, 40, 50, 60, 70, 80])).to.deep.equal([{ hour: 2, visitors: 60 }, { hour: 1, visitors: 70 }, { hour: 0, visitors: 80 }]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
