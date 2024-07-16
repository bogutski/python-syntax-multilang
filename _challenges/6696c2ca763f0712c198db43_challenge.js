// NAMEEN:Company's name
// NAMERU:Название компании

/*
INSTRUCTIONENSTART
In 1997, company founders Larry Page and Sergey Brin approached Yahoo,
to sell their development, but they were turned down.

Create a variable `nameOfCompany` and assign to it the value `'Google'`.

Here's an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```javascript
const biggestOnlineShop = `'Amazon';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-2.png)

В 1997 г. основатели компании Ларри Пейдж и Сергей Брин обратились в Yahoo,
чтобы продать свою разработку, но получили отказ.

Создайте переменную `nameOfCompany` и присвойте ей значение `'Google'`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const biggestOnlineShop = 'Amazon';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const nameOfCompany = 'Google';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const nameOfCompany = 'Google';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const nameOfCompany = 'Google';
// SOLUTIONEND


// OPENTESTSSTART
it('The variable `nameOfCompany` exists and has a value', () => {
  expect(nameOfCompany).not.undefined;
});

it('Variable `nameOfCompany` contains data type string', () => {
  expect(nameOfCompany).a('string');
});

it('The `nameOfCompany` variable contains the value `Google`', () => {
  expect(nameOfCompany).eq('Google');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
