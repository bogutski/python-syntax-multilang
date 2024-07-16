// NAMEEN:
// NAMERU:Добавление элементов в начало и в конец массива.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `addLengthAndProduct`, которая принимает один параметр – массив чисел `numbers`.

Функция должна добавлять в полученный массив 2 новых элемента:

* в начало массива новый элемент, равный длине массива `numbers`;

* в конец массива новый элемент, равный произведению первого и последнего элементов массива `numbers`;

Функция должна возвращать измененный массив.

Если массив `numbers` пустой или содержит меньше двух элементов, то функция должна возвращать сообщение об ошибке `Invalid input`.

Алгоритм решения:

Проверьте чему равна длина массива `numbers`. Если длина массива меньше 2, верните сообщение `Invalid input`.

Прежде, чем добавлять новые элементы в массив, создайте переменные `length` и `product`.

В переменную `length` запишите значение длины массива.

В переменную `product` - произведения первого и последнего элементов массива.

Добавьте созданные переменные в массив с помощью методов `unshift` и `push`.

Если сначала добавить в массив новый элемент, а потом вычислить его длину или произведение первого и последнего элементов, то результат работы функции будет неверным.

Примеры запуска функции:

```javascript
AddLengthAndProduct([2, 3, 4, 5]);           // [4, 2, 3, 4, 5, 10]
AddLengthAndProduct([3.79, -21.73, -10.91]); // [3, 3.79, -21.73, -10.91, -41.3489]
AddLengthAndProduct([]);                     // `Invalid input`
AddLengthAndProduct([1.45]);                 // `Invalid input`
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addLengthAndProduct
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addLengthAndProduct(numbers) {
  if (numbers.length < 2) {
    return 'Invalid input';
  }
  const length = numbers.length;
  numbers.push(numbers[0] * numbers[numbers.length - 1]);
  numbers.unshift(length);
  return numbers;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function addLengthAndProduct', () => {
  expect(addLengthAndProduct).to.be.a('function');
});

it(`addLengthAndProduct([21.27,-1.56,10.81,27.06,-6.56]) should return [5, 21.27, -1.56, 10.81, 27.06, -6.56, -139.53119999999998]`, () => {
  expect(addLengthAndProduct([21.27,-1.56,10.81,27.06,-6.56])).eql([5, 21.27, -1.56, 10.81, 27.06, -6.56, -139.53119999999998]);
});

it(`addLengthAndProduct([1.45]) should return 'Invalid input'`, () => {
  expect(addLengthAndProduct([1.45])).to.be.equal('Invalid input');
});

it(`addLengthAndProduct([]) should return 'Invalid input'`, () => {
  expect(addLengthAndProduct([])).to.be.equal('Invalid input');
});

it(`addLengthAndProduct([2, 3, 4, 5]) should return [4, 2, 3, 4, 5, 10]`, () => {
  expect(addLengthAndProduct([2, 3, 4, 5])).eql([4, 2, 3, 4, 5, 10]);
});

it(`addLengthAndProduct([3.79, -21.73, -10.91]) should return [3, 3.79, -21.73, -10.91, -41.3489]`, () => {
  expect(addLengthAndProduct([3.79, -21.73, -10.91])).eql([3, 3.79, -21.73, -10.91, -41.3489]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
