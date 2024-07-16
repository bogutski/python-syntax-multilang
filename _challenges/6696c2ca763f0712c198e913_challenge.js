// NAMEEN:
// NAMERU:Разделение массива на числа и строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numbersAndStrings`, которая принимает массив и возвращает массив из двух массивов:

* первый массив содержит все числа из исходного массива,
* второй - все строки.

В массиве могут быть любые типы данных, но только числа и строки должны попасть в соответствующие массивы.

Если в исходном массиве нет чисел или строк, соответствующий массив должен быть пустым.

Пример запуска функции:
```javascript
numbersAndStrings([1, 'e', 2, 'r', 3]) // [[1, 2, 3], ['e', 'r']]
numbersAndStrings([1, 2, 3, 4, 5]) // [[1, 2, 3, 4, 5], []]
numbersAndStrings(['a', 'b', 'c']) // [[], ['a', 'b', 'c']]
numbersAndStrings([true, undefined, 123, 'abc']) // [[123], ['abc']]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numbersAndStrings(array) {
  const numbers = []
  const strings = []
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') numbers.push(array[i])
    else if (typeof array[i] === 'string') strings.push(array[i])
  }
  return [numbers, strings]
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numbersAndStrings', () => {
  expect(numbersAndStrings).to.be.a('function');
});

it("numbersAndStrings([1, 'e', 2, 'r', 3, 't', 4, 'y', 5, 'u']) should return [[1, 2, 3, 4, 5], ['e', 'r', 't', 'y', 'u']]", () => {
  expect(numbersAndStrings([1, 'e', 2, 'r', 3, 't', 4, 'y', 5, 'u'])).to.deep.equal([[1, 2, 3, 4, 5], ['e', 'r', 't', 'y', 'u']]);
});

it("numbersAndStrings([1, 2, 3, 4, 5]) should return [[1, 2, 3, 4, 5], []]", () => {
  expect(numbersAndStrings([1, 2, 3, 4, 5])).to.deep.equal([[1, 2, 3, 4, 5], []]);
});

it("numbersAndStrings(['hello', 'world', '!!!']) should return [[], ['hello', 'world', '!!!']]", () => {
  expect(numbersAndStrings(['hello', 'world', '!!!'])).to.deep.equal([[], ['hello', 'world', '!!!']]);
});

it("numbersAndStrings([true, 100, undefined, 'a', null, 'b', 200, 'c']) should return [[100, 200], ['a', 'b', 'c']]", () => {
  expect(numbersAndStrings([true, 100, undefined, 'a', null, 'b', 200, 'c'])).to.deep.equal([[100, 200], ['a', 'b', 'c']]);
});

it("numbersAndStrings([true, undefined, false, null]) should return [[], []]", () => {
  expect(numbersAndStrings([true, undefined, false, null])).to.deep.equal([[], []]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
