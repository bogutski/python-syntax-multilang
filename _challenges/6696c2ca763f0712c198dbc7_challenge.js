// NAMEEN:The variable with the name of the Oscar winner
// NAMERU:Переменная с именем победителя Оскара

/*
INSTRUCTIONENSTART
Create a variable `oscarWinner` with the name of the Oscar winner and assign it the value `'Leonardo Di Caprio'`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const grammyWinner = 'Lady Gaga';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-4-task-13.png)

Создайте переменную `oscarWinner` с именем победителя Оскара и присвойте ей значение `'Leonardo Di Caprio'`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const grammyWinner = 'Lady Gaga';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const oscarWinner = 'Leonardo Di Caprio';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const oscarWinner = 'Leonardo Di Caprio';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const oscarWinner = 'Leonardo Di Caprio';
// SOLUTIONEND


// OPENTESTSSTART
it('The `oscarWinner` variable contains a value', () => {
  expect(oscarWinner).not.undefined;
});

it('The data type `oscarWinner` string', () => {
  expect(oscarWinner).a('string');
});

it('The `oscarWinner` variable contains Leonardo Di Caprio', () => {
  expect(oscarWinner).eq('Leonardo Di Caprio');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
