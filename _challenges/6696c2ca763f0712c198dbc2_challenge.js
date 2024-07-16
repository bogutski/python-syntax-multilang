// NAMEEN:Variable with the name of a planet in the Solar System.
// NAMERU:Переменная с названием планеты Солнечной Системы.

/*
INSTRUCTIONENSTART
There are eight known planets in the solar system:
Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.
Create a variable `planet` and assign a value `'Saturn'` to it.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
const star = 'Sirius';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-4-task-8.png)

В Солнечной системе имеется восемь известных планет:
Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран и Нептун.
Создайте переменную `planet` и присвойте ей значение `'Saturn'`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const star = 'Sirius';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const planet = 'Saturn';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const planet = 'Saturn';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const planet = 'Saturn';
// SOLUTIONEND


// OPENTESTSSTART
it('The `planet` variable contains a value', () => {
  expect(planet).not.undefined;
});

it('The `planet` variable contains data type string', () => {
  expect(planet).a('string');
});

it('The `planet` variable contains the value `Saturn`', () => {
  expect(planet).eq('Saturn');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
