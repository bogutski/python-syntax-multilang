// NAMEEN:
// NAMERU:Проверка числа в кубе. Массивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `arrayCube` принимает 2 параметра
* `arr` - массив чисел
* `n` - число

Необходимо возвести число `n` в третью степень и проверить, равен ли результат какому-либо числу из массива `arr`.

Если массив содержит, возведенный в третью степень параметр `n`, то функция должна вернуть строку `Yes`. Если нет – `No` .

Пример запуска функции:
``` javascript
arrayCube([1, 2, 3, 4, 5], 3) // 'No'

arrayCube([12, 20, 3, 64, 25], 4) // 'Yes'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayCube(arr, n) {
  const cube = n ** 3;
  if (arr.includes(cube)) return 'Yes';
  return 'No';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function arrayCube', () => {
  expect(arrayCube).to.be.a('function');
});

it(`arrayCube([1, 2, 3, 4, 5], 3) // 'No'`, () => {
    expect(arrayCube([1, 2, 3, 4, 5], 3)).eq('No');
});

it(`arrayCube([12, 20, 3, 64, 25], 4) // 'Yes'`, () => {
    expect(arrayCube([12, 20, 3, 64, 25], 4)).eq('Yes');
});

it(`arrayCube([1, 2, 3, 4, 5], 5) // 'No'`, () => {
    expect(arrayCube([1, 2, 3, 4, 5], 5)).eq('No');
});

it(`arrayCube([12, 20, 3, 64, 25], 5) // 'No'`, () => {
    expect(arrayCube([12, 20, 3, 64, 25], 5)).eq('No');
})

it(`arrayCube([81, 27, 3, 64, 125], 3) // 'Yes'`, () => {
    expect(arrayCube([81, 27, 3, 64, 125], 3)).eq('Yes');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
