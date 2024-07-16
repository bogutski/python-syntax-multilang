// NAMEEN:
// NAMERU:Cумма соседних элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `arraySum` принимает массив чисел.

Необходимо пройтись по массиву в обратном порядке и сложить сумму соседних элементов.

Например:
```javascript
arraySum = [1, 2, 3, 4, 5, 6, 7, 8]
Необходимо сложить 8 и 7, 6 и 5, 4 и 3, 2 и 1.
```

Если длина массива нечетная, то первый элемент остается без изменений.

Если длина массива равна 0, то возвращается пустой массив.

Необходимо вернуть новый массив в котором будут храниться суммы соседних элементов.

В данной задаче нельзя использовать метод `push`

Пример запуска функции:
```javascript
arraySum([1, 2, 3, 4, 5, 6, 7, 8]) // 8+7; 6+5; 4+3; 2+1 возвращает массив [3, 7, 11, 15]
arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9]) // 9+8; 7+6; 5+4; 3+2; 1 возвращает массив [1, 5, 9, 13, 17]
arraySum([1]) // [1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arraySum(arr) {
  let sum = 0;
  const newArr = [];
  for (let i = arr.length-1; i >= 0; i = i - 2) {
    if (arr[i] === arr[0]) sum = arr[i]
    else sum = arr[i] + arr[i - 1];
    newArr.unshift(sum)
    sum = 0
  }
  return newArr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function arraySum', () => {
  expect(arraySum).to.be.a('function');
});

it('function arraySum should not include statement push', () => {
  expect(arraySum.toString()).to.not.contain('push');
});

it('arraySum([1, 2, 3, 4, 5, 6, 7, 8]) should return [3, 7, 11, 15]', () => {
  expect(arraySum([1, 2, 3, 4, 5, 6, 7, 8])).eql([3, 7, 11, 15]);
});

it('arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 5, 9, 13, 17]', () => {
  expect(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([1, 5, 9, 13, 17]);
});

it('arraySum([1, 2, 3, 4, 5) should return [1, 5, 9]', () => {
  expect(arraySum([1, 2, 3, 4, 5])).to.deep.equal([1, 5, 9]);
});

it('arraySum([9, 10]) should return [19]', () => {
  expect(arraySum([9, 10])).to.deep.equal([19]);
});

it('arraySum([5]) should return [5]', () => {
  expect(arraySum([5])).to.deep.equal([5]);
});

it('arraySum([]) should return []', () => {
  expect(arraySum([])).to.deep.equal([]);
});



// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
