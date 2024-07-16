// NAMEEN:Weird McDonald's signature.
// NAMERU:Странная подпись МакДональда

/*
INSTRUCTIONENSTART
Farmer Benjamin McDonald hated his long name and only signed his name with the first letter,
followed by an exclamation mark.

Create a variable `name` and assign to it the value of any name.
Create a variable `sign`, give it the value of the first letter of the name followed by an exclamation mark.

Here is an example, which is fundamentally similar to what you need to do,
But adapt it to the needs of the task:
```
const name = 'Moscow';
const shortName = name[0] + '.';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Фермер Benjamin McDonald очень не любил свое длинное имя и подписывался только первой буквой,
после которой обязательно ставил восклицательный знак.

Создайте переменную `name` и присвойте ей значение любого имени.
Создайте переменную `sign`, присвойте ей значение первой буквы имени, после которой добавьте восклицательный знак.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const name = 'Moscow';
const shortName = name[0] + '.';
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
const name = 'Benjamin McDonald';
const sign = name[0] + '!';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const name = 'Benjamin McDonald';
const sign = name[0] + '!';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `name` exists and has a value', () => {
  expect(name).not.undefined;
});

it('Variable `name` is a string', () => {
  expect(name).a('string');
});

it('Variable `ign` exists and has a value', () => {
  expect(sign).not.undefined;
});

it('Variable `sign` is a string', () => {
  expect(sign).a('string');
});

it('Variable `ign` is correct', () => {
  const expected = name[0] + '!';
  expect(sign).equal(expected);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
