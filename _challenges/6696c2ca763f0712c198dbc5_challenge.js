// NAMEEN:Variable with the name of the book.
// NAMERU:Переменная с названием книги.

/*
INSTRUCTIONENSTART
In 1865, English mathematician Lewis Carroll wrote the famous children's fairy tale.
Create a variable `nameOfBook` and set it to `'Alice in Wonderland'`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```javascript
const nameOfNewspaper = ``The New York Times'';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-4-task-11.png)

В 1865 году английский математик Льюис Кэрролл написал знаменитую детскую сказку.
Создайте переменную `nameOfBook` и присвойте ей значение `'Alice in Wonderland'`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const nameOfNewspaper = 'The New York Times';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const nameOfBook = 'Alice in Wonderland';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const nameOfBook = 'Alice in Wonderland';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const nameOfBook = 'Alice in Wonderland';
// SOLUTIONEND


// OPENTESTSSTART
it('The variable `nameOfBook` exists and has a value', () => {
  expect(nameOfBook).not.undefined;
});

it('The variable `nameOfBook` contains data type string', () => {
  expect(nameOfBook).a('string');
});

it('The `nameOfBook` variable contains the value `Alice in Wonderland`', () => {
  expect(nameOfBook).eq('Alice in Wonderland');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
