// NAMEEN:The variable with the actor's name
// NAMERU:Переменная с именем актера

/*
INSTRUCTIONENSTART
Create a variable `actorName` and assign it the value `'Brad Pitt'`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const actorName = 'Leonardo DiCaprio';

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `actorName` и присвойте ей значение `'Brad Pitt'`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const actorName = 'Leonardo DiCaprio';
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
const actorName = 'Brad Pitt';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const actorName = 'Brad Pitt';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `actorName` exists and has a value', () => {
  expect(actorName).not.undefined;
});

it('Variable `actorName` contains data type string', () => {
  expect(actorName).a('string');
});

it('The `actorName` variable contains the value `Brad Pitt` ', () => {
  expect(actorName).eql('Brad Pitt');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
