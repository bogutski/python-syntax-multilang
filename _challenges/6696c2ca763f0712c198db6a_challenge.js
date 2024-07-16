// NAMEEN:Euler's number or "e" number
// NAMERU:Число Эйлера или число «е»

/*
INSTRUCTIONENSTART
Euler's number is a famous mathematical constant, the base of the natural logarithm, and a transcendental number.
Sometimes number "e" is called Euler's number or Neper's number. It is denoted by a lowercase Latin letter "e".
The number is approximately 2.7.

Create a constant named `e` and give it a value of `2.7`. Use the keyword `const`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
const a = 3.8;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-2-task-2.png)

Число Эйлера является знаменитой математической константой, основанием натурального логарифма, трансцендентным числом.
Иногда число «e» называют числом Эйлера или числом Непера. Обозначается оно строчной латинской буквой «e».
Число приблизительно равно 2.7.

Создайте константу с именем `e` и присвойте ей значение `2.7`. Используйте ключевое слово `const`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const a = 3.8;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const e = 2.7;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const e = 2.7;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const e = 2.7;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `e` exists and has a value', () => {
  expect(e).not.undefined;
});

it('the variable `e` is a number', () => {
  expect(e).a('number');
});

it('the value of variable `e` is 2.7', () => {
  expect(e).equal(2.7);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
