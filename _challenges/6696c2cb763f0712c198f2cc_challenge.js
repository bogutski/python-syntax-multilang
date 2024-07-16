// NAMEEN:
// NAMERU:Посчитать количество вхождений каждого числа массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEachNumberElement` принимает массив c разными типами данных

Необходимо посчитать количество вхождений каждого числа в массиве и вернуть результат в виде объекта.

Если в массиве нет чисел, то вернуть строку `No numbers in array`

Если массив пустой, то вернуть строку "Array is empty"

Пример запуска функции:
```javascript
countEachNumberElement([1, 2, 3, 4, 5, "hello", "js"]) // {1: 1, 2: 1, 3: 1, 4: 1, 5: 1}
countEachNumberElement(["hello", "js", "practice"]) // "No numbers in array"
countEachNumberElement([]) // "Array is empty"
```

Подсказка: для проверки содержит ли объект числа, можно воспользоваться методом `Object.keys()`  и `typeof` и проверить длину массива

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function countEachNumberElement
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachNumberElement(arr) {
  if (!arr.length) return "Array is empty"
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (!result[arr[i]]) {
        result[arr[i]] = 1;
      } else {
        result[arr[i]] += 1;
      }
    }
  }
  if (Object.keys(result).length === 0) return "No numbers in array";
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachNumberElement', () => {
  expect(countEachNumberElement).to.be.a('function');
});

it('countEachNumberElement([1, 2, 3, 4, 5, "hello", "js"]) should return {1: 1, 2: 1, 3: 1, 4: 1, 5: 1}', () => {
  expect(countEachNumberElement([1, 2, 3, 4, 5, "hello", "js"])).to.deep.equal({1: 1, 2: 1, 3: 1, 4: 1, 5: 1});
});

it('countEachNumberElement([1, 2, 3, 4, 5, "hello", "js", 1, 2, 3, 4, 5]) should return {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}', () => {
  expect(countEachNumberElement([1, 2, 3, 4, 5, "hello", "js", 1, 2, 3, 4, 5])).to.deep.equal({
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 2
  });
});

it('countEachNumberElement(["hello", "js", "practice"]) should return "No numbers in array"', () => {
  expect(countEachNumberElement(["hello", "js", "practice"])).to.deep.equal("No numbers in array");
});

it('countEachNumberElement([]) should return "Array is empty"', () => {
  expect(countEachNumberElement([])).to.deep.equal("Array is empty");
});

it('countEachNumberElement([true, true, false, "1", "number"]) should return "No numbers in array"', () => {
  expect(countEachNumberElement([true, true, false, "1", "number"])).to.deep.equal("No numbers in array");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
