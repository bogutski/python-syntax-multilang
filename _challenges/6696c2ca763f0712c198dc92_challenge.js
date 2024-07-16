// NAMEEN:How many letters are in the name of the famous volcano?
// NAMERU:Сколько букв содержится в названии знаменитого вулкана?

/*
INSTRUCTIONENSTART
Create a variable `volcanoName` and assign it the value `'Eyjafjallajokull'`.

Create a variable `strLength` and use the length property to get
The length of the string contained in the `volcanoName` variable. As a result, you will find out how many letters contain the name of the famous Icelandic volcano.

Here's an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task.
```
const mountainName = `Hvannadalshnukur`; // the highest mountain in Iceland
const strLength = mountainName.length; // 16
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `volcanoName` и присвойте ей значение `'Eyjafjallajokull'`.

Создайте переменную `strLength` и при помощи свойства length получите длину строки, содержащейся в переменной `volcanoName`.

В результате вы узнаете, какое количество букв содержит название знаменитого исландского вулкана.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи.
```javascript
const mountainName = `Hvannadalshnukur`; // самая высокая гора в Исландии
const strLength = mountainName.length; // 16
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const volcanoName = 'Eyjafjallajokull';
const strLength = volcanoName.length;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const volcanoName = 'Eyjafjallajokull';
const strLength = volcanoName.length;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `volcanoName` is not `undefined`', () => {
  expect(volcanoName).not.undefined;
});

it('Variable `volcanoName` contains data type `string`', () => {
  expect(volcanoName).a('string');
});

it('Variable `volcanoName` contains value `Eyjafjallajokull`', () => {
  expect(volcanoName).eq('Eyjafjallajokull');
});

it('Variable `strLength` is not `undefined`', () => {
  expect(strLength).not.undefined;
});

it('Variable `strLength` contains data type `number`', () => {
  expect(strLength).a('number');
});

it('Variable `strLength` is 16', () => {
  expect(strLength).eq(16);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
