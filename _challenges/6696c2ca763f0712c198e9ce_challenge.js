// NAMEEN:
// NAMERU:Массив квадратов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `powerOfTwo` принимает массив положительных чисел больше 0.

Необходимо вернуть новый массив, в которой будут входить только те числа, которые являются квадратами других чисел.

Например, 4 является квадратом числа 2, 9 является квадратом числа 3 и т.д.

Для того чтобы определить является ли число квадратом, какого-то другого числа необходимо взять квадратный корень из этого числа и проверить является ли результат целым числом.

Пример запуска функции:
```javascript
powerOfTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [1, 4, 9]
powerOfTwo([1, 3, 9, 27]) // [1, 9]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function powerOfTwo(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] ** 0.5 % 1 === 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function powerOfTwo', () => {
  expect(powerOfTwo).to.be.a('function');
});

it('powerOfTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [1, 4, 9]', () => {
  expect(powerOfTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.eql([1, 4, 9]);
});

it('powerOfTwo([1, 3, 9, 27]) should return [1, 9]', () => {
  expect(powerOfTwo([1, 3, 9, 27])).to.eql([1, 9]);
});

it('powerOfTwo([2, 3, 4, 5, 6, 7, 8, 9]) should return [4, 9]', () => {
  expect(powerOfTwo([2, 3, 4, 5, 6, 7, 8, 9])).to.eql([4, 9]);
});

it('powerOfTwo([1, 2, 4, 8, 16, 32, 64, 128, 256]) should return [1, 4, 16, 64, 256]', () => {
  expect(powerOfTwo([1, 2, 4, 8, 16, 32, 64, 128, 256])).to.eql([1, 4, 16, 64, 256]);
});

it('powerOfTwo([2, 3, 5, 6, 7, 8]) should return []', () => {
  expect(powerOfTwo([2, 3, 5, 6, 7, 8])).to.eql([]);
});

it('powerOfTwo([]) should return []', () => {
  expect(powerOfTwo([])).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
