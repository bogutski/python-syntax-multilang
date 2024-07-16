// NAMEEN:How many books on the fifth shelf?
// NAMERU:Сколько книг на пятой полке?

/*
INSTRUCTIONENSTART
There are 5 shelves in the library. The first shelf has 3 books, the second shelf has 3 times more books than the first shelf,
the third shelf has three times more books than the second shelf, the fourth shelf has three times more books than the third shelf,
on the fifth shelf, there are three times more books than on the fourth shelf.  How many books are on the 5th shelf in the library?

Use the operation of exponentiation to solve the problem.

Create a variable `bookQuantity` and assign value 3 to it.

Create a variable `shelves` and assign value 5 to it.

Create a variable `result` and assign to it the value of `bookQuantity` to the extent of `shelves`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:

```
const quantity = 10;
const stepen = 3;
const result = quantity ** stepen;
 ```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В библиотеке 5 полок. На первой полке лежит 3 книги,  на второй полке книг в 3 раза больше чем на первой,
на третьей полке книг в 3 раза больше чем на второй,  на четвертой полке книг в 3 раза больше чем на третьей,
на пятой полке книг в 3 раза больше чем на четвертой.  Сколько книг находится на 5-ой полке в библиотеке?

Используйте при решении задачи операцию возведения в степень.

Создайте переменную `bookQuantity` и присвойте ей значение 3.

Создайте переменную `shelves` и присвойте ей значение 5.

Создайте переменную `result` и присвойте ей значение `bookQuantity` в степени `shelves`.

Приведем пример, который принципиально похож на то, что нужно сделать,  но адаптируйте его к требованиям задачи:

```javascript
const quantity = 10;
const stepen = 3;
const result = quantity ** stepen;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const bookQuantity = 3;
const shelves = 5;
const result = bookQuantity ** shelves;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const bookQuantity = 3;
const shelves = 5;
const result = bookQuantity ** shelves;
// SOLUTIONEND


// OPENTESTSSTART
it('The `bookQuantity` variable contains a value', () => {
  expect(bookQuantity).not.undefined;
});

it('The `bookQuantity` variable contains a number', () => {
  expect(bookQuantity).a('number');
});

it('The `bookQuantity` variable is 3', () => {
  expect(bookQuantity).eq(3);
});

it('The variable ``shelves` contains a value', () => {
  expect(shelves).not.undefined;
});

it('Variable`shelves` contains a number', () => {
  expect(shelves).a('number');
});

it('Variable`shelves` equals 5', () => {
  expect(shelves).eq(5);
});

it('The `result` variable contains a value', () => {
  expect(result).not.undefined;
});

it('Variable `result` contains a number', () => {
  expect(result).a('number');
});

it('Variable `result` is 243', () => {
  expect(result).eq(243);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
