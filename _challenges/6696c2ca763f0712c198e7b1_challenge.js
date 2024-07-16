// NAMEEN:
// NAMERU:Изменение числового элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArrElement`, которая принимает два параметра - массив и индекс элемента массива.

Массив содержит только трёхзначные положительные числа и имеет произвольную длину.

Индекс элемента массива - число, которое не должно превышать длину массива.

Выведите число, с указанным индексом, в обратном порядке.

Для нахождения цифр числа, используйте оператор остатка от деления `%`.

Для перевода строки с цифрами в число, используйте унарный оператор `+` или метод `Number`.

Например:
`let str = '123'; // строка с цифрами`
`let num = +str; // число 123`
`let num1 = Number(str); // число 123`

Функция должна вернуть изменённый массив.

Пример запуска функции:
```javascript
reverseArrElement([123, 456, 789], 1); // [123, 654, 789]
reverseArrElement([123, 456, 789, 754, 307], 2); // [123, 456, 987, 754, 307]
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArrElement(arr, n) {
  let last = arr[n] % 10
  let middle = ((arr[n] - last) / 10) % 10
  let first = ((((arr[n] - last) / 10) - middle) / 10) % 10
  arr[n] = +('' + last + middle + first)
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArrElement', () => {
  expect(reverseArrElement).to.be.a('function');
});

it('reverseArrElement([123, 456, 789], 1) should return [123, 654, 789]', () => {
  expect(reverseArrElement([123, 456, 789], 1)).to.be.eql([123, 654, 789]);
});

it('reverseArrElement([123, 456, 789, 754, 307], 2) should return [123, 456, 987, 754, 307]', () => {
  expect(reverseArrElement([123, 456, 789, 754, 307], 2)).to.be.eql([123, 456, 987, 754, 307]);
});

it('reverseArrElement([123, 456, 789, 754, 307], 4) should return [123, 456, 789, 754, 703]', () => {
  expect(reverseArrElement([123, 456, 789, 754, 307], 4)).to.be.eql([123, 456, 789, 754, 703]);
});

it('reverseArrElement([123, 456, 789, 754, 307], 0) should return [321, 456, 789, 754, 307]', () => {
  expect(reverseArrElement([123, 456, 789, 754, 307], 0)).to.be.eql([321, 456, 789, 754, 307]);
});

it('reverseArrElement([123, 456, 789, 754, 307, 397, 773, 811, 119], 3) should return [123, 456, 789, 457, 307, 397, 773, 811, 119]', () => {
  expect(reverseArrElement([123, 456, 789, 754, 307, 397, 773, 811, 119], 3)).to.be.eql([123, 456, 789, 457, 307, 397, 773, 811, 119]);
});

it('reverseArrElement([123, 456, 789, 754, 307, 397, 773, 811, 119], 8) should return [123, 456, 789, 754, 307, 397, 773, 811, 911]', () => {
  expect(reverseArrElement([123, 456, 789, 754, 307, 397, 773, 811, 119], 8)).to.be.eql([123, 456, 789, 754, 307, 397, 773, 811, 911]);
});

it('reverseArrElement([123, 456, 789, 754, 307, 397, 773, 811, 119], 5) should return [123, 456, 789, 754, 307, 793, 773, 811, 119]', () => {
  expect(reverseArrElement([123, 456, 789, 754, 307, 397, 773, 811, 119], 5)).to.be.eql([123, 456, 789, 754, 307, 793, 773, 811, 119]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
