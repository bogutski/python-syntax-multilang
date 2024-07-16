// NAMEEN:Ludolph's number, or Pi number.
// NAMERU:Лудольфово число, или число Пи

/*
INSTRUCTIONENSTART
Pi is a mathematical constant expressing the ratio of the length of a circle to the length of its diameter.
There is an obsolete name for pi number: ludolfo number, but this name is practically not used anymore.
Mathematicians still continue to discover new digits of this infinite number.
The approximate value of Pi is 3.1415.

Create a constant named `pi` and assign to it the value `3.1415`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
const si = 3.878323;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-2-task-3.png)

Число Пи — это математическая константа, выражающая отношение длины окружности к длине её диаметра.
Есть устаревшее название числа Пи: лудольфово число, однако это название уже практически не используется.
Математики до сих пор продолжают открывать новые цифры этого бесконечного числа.
Приблизительное значение числа Пи равно 3.1415.

Создайте константу с именем `pi` и присвойте ей значение `3.1415`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const si = 3.878323;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const pi = 3.1415;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const pi = 3.1415;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const pi = 3.1415;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `pi` exists and has a value', () => {
  expect(pi).not.undefined;
});

it('the variable `pi` is a number', () => {
  expect(pi).a('number');
});

it('the value of variable `pi` is 3.1415', () => {
  expect(pi).equal(3.1415);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
