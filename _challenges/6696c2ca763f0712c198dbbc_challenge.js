// NAMEEN:"Stylish" variables
// NAMERU:"Стильные" переменные

/*
INSTRUCTIONENSTART
Camel case is the practice of writing phrases in such a way that each word or abbreviation in the middle of a phrase
 begins with a capital letter, with no intermediate spaces or punctuation. For example, `camelCase'.
The camelCase style is used for variable names in programming.

To complete the assignment, select the variables whose names are written in the camelCase style from the list,
create variables with those names and assign values to the variables as a string that matches the name.

The list of names is:
`eBay`; `dayReport`; `number_of_tasks`; `dayOfWeek`; `redbook`; `userLogin`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const iPhone = `` iPhone'';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-4-task-2.png)

`Camel case` - это практика написания фраз таким образом, что каждое слово или аббревиатура в середине фразы
 начинается с заглавной буквы, без промежуточных пробелов или знаков препинания. Например, `camelCase`.
Стиль `camelCase` используется для имен переменных в программировании.

Для выполнения задания выберите из списка переменные, имена которых записаны в стиле camelCase,
создайте переменные с этими именами и присвойте переменным значения в виде строки, соответствующей имени.

Список имен:
`eBay`;  `dayReport`; `number_of_tasks`; `dayOfWeek`; `redbook`; `userLogin`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const iPhone  = 'iPhone';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const eBay = 'eBay';
const dayReport = 'dayReport';
const dayOfWeek = 'dayOfWeek';
const userLogin = 'userLogin';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const eBay = 'eBay';
const dayReport = 'dayReport';
const dayOfWeek = 'dayOfWeek';
const userLogin = 'userLogin';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const eBay = 'eBay';
const dayReport = 'dayReport';
const dayOfWeek = 'dayOfWeek';
const userLogin = 'userLogin';
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `eBay` exists and has a value', () => {
  expect(eBay).not.undefined;
});

it('the variable `eBay` is of type string', () => {
  expect(eBay).a('string');
});

it('the variable `eBay` has the correct value', () => {
  expect(eBay).equal('eBay');
});

it('the variable `dayReport` exists and has a value', () => {
  expect(dayReport).not.undefined;
});

it('the variable `dayReport` is of type string', () => {
  expect(dayReport).a('string');
});

it('the `dayReport` variable has the correct value', () => {
  expect(dayReport).equal('dayReport');
});

it('the `dayOfWeek` variable exists and has a value', () => {
  expect(dayOfWeek).not.undefined;
});

it('the `dayOfWeek` variable is of type string', () => {
  expect(dayOfWeek).a('string');
});

it('the `dayOfWeek` variable has the correct value', () => {
  expect(dayOfWeek).equal('dayOfWeek');
});

it('the variable `userLogin` exists and has a value', () => {
  expect(userLogin).not.undefined;
});

it('the variable `userLogin` is of type string', () => {
  expect(userLogin).a('string');
});

it('the `userLogin` variable has the correct value', () => {
  expect(userLogin).equal('userLogin');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
