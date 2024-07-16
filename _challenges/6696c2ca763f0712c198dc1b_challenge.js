// NAMEEN:What type does the string have?
// NAMERU:Какой тип имеет строка?

/*
INSTRUCTIONENSTART
Create a variable named `message` and assign it the value `'hello world'`.
Create a variable named `typeOfMessage` and assign to it the value of `message` variable type.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const hi = 'good morning';
const typeOfHi = typeof(hi);
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `message` и присвойте ей значение `'hello world'`.
Создайте переменную `typeOfMessage` и присвойте ей значение типа переменной `message`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const hi = 'good morning';
const typeOfHi = typeof(hi);
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
const message = 'hello world';
const typeOfMessage = typeof (message);
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const message = 'hello world';
const typeOfMessage = typeof (message);
// SOLUTIONEND


// OPENTESTSSTART
it('the `message` variable exists and has a value', () => {
  expect(message).not.undefined;
});

it('the variable `message` is of type string', () => {
  expect(message).a('string');
});

it('the variable `message` is `hello world`', () => {
  expect(message).eq('hello world');
});

it('the variable `typeOfMessage` exists and has a value', () => {
  expect(typeOfMessage).not.undefined;
});

it('the variable `typeOfMessage` has type string', () => {
  expect(typeOfMessage).a('string');
});

it('the variable `typeOfMessage` is `string`', () => {
  expect(typeOfMessage).equal('string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
