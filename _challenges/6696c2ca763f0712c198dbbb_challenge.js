// NAMEEN:Selecting a variable name
// NAMERU:Выбор имени переменной

/*
INSTRUCTIONENSTART
We come up with a name for our child, a nickname for our pet, a nickname for our boss...
Programmers and testers also come up with names for variables.
Now let's choose names that can be used as variable names.

To perform the task you have to create variables with names that can be used in JS language.

Create variables with valid names from the following list:

  `greenColor`; `12month`; `_`; `amount`; `first_page`; `$50`; `const`; `null`; `camelCase`; 
`chapter-1`.

Assign value 1 to all created variables.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let pencil = 1;
let redBook = 1;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-4-task-1.png)

Мы придумываем имя своему ребенку, кличку домашнему питомцу, прозвище начальнику...
Программисты и тестировщики придумывают еще имена переменным.
А теперь давайте выберем имена, которые можно использовать в качестве имен переменных.

Для выполнения задания вы должны создать переменные с именами, которые можно использовать в языке JS.

Создайте переменные с допустимыми именами из следующего списка:

  `greenColor`;  `12month`;  `_`;  `amount`;  `first_page`;  `$50`;  `const`;  `null`;  `camelCase`;
`chapter-1`.

Присвойте всем созданным переменным значение 1.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let pencil = 1;
let redBook = 1;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let greenColor = 1;
let _ = 1;
let amount = 1;
let first_page = 1;
let $50 = 1;
let camelCase = 1;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let greenColor = 1;
let _ = 1;
let amount = 1;
let first_page = 1;
let $50 = 1;
let camelCase = 1;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let greenColor = 1;
let _ = 1;
let amount = 1;
let first_page = 1;
let $50 = 1;
let camelCase = 1;
// SOLUTIONEND


// OPENTESTSSTART
it('the `greenColor` variable exists and is of type number', () => {
  expect(greenColor).a('number');
});

it('the `greenColor` variable is 1', () => {
  expect(greenColor).eq(1);
});

it('the variable `_` exists and is of type number', () => {
  expect(_).a('number');
});

it('the variable `_` is 1', () => {
  expect(_).eq(1);
});

it('the variable `amount` exists and is of type number', () => {
  expect(amount).a('number');
});

it('the variable `amount` is 1', () => {
  expect(amount).eq(1);
});

it('the variable `first_page` exists and is of type number', () => {
  expect(first_page).a('number');
});

it('the variable `first_page` is 1', () => {
  expect(first_page).eq(1);
});

it('the variable `$50` exists and is of type number', () => {
  expect($50).a('number');
});

it('the variable `$50` is 1', () => {
  expect($50).eq(1);
});

it('the variable `camelCase` exists and is of type number', () => {
  expect(camelCase).a('number');
});

it('the variable `camelCase` is 1', () => {
  expect(camelCase).eq(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
