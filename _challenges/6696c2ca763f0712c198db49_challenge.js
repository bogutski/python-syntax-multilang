// NAMEEN:Assign an empty string to the str variable
// NAMERU:Присвойте переменной str значение пустой строки

/*
INSTRUCTIONENSTART
Create a variable named `str`.
Use keyword `const`.
Assign a value to the empty string `''`.

To do this, type the command:
```
const str = '';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-8.png)

Создайте переменную с именем `str`.
Используйте ключевое слово `const`.
Присвойте значение пустой строки `''`.

Принципиально похожий пример:
```javascript
const string = '';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const str = '';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const str = '';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const str = '';
// SOLUTIONEND


// OPENTESTSSTART
it('the variable str exists', () => {
  expect(str).not.undefined;
});

it('the variable str is a string', () => {
  expect(typeof str).eql('string');
});

it('the variable str is an empty string', () => {
  expect(str).eql('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
