// NAMEEN:Sunny day!
// NAMERU:Sunny day!

/*
INSTRUCTIONENSTART
Create a variable named `weather` and assign it the value `'Sunny day!'`, use the keyword `const`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
const season = 'Winter';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-2-task-8.png)

Создайте переменную с именем `weather` и присвойте ей значение `'Sunny day!'`, используйте ключевое слово `const`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const season = 'Winter';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const weather = 'Sunny day!';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const weather = 'Sunny day!';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const weather = 'Sunny day!';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `weather` exists and has a value', () => {
  expect(weather).not.to.be.undefined;
});

it('Variable `weather` contains data type string', () => {
  expect(weather).a('string');
});

it('The `weather` variable contains the value `Sunny day!`', () => {
  expect(weather).eq('Sunny day!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
