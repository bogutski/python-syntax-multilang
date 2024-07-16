// NAMEEN:Name of the magazine
// NAMERU:Название журнала

/*
INSTRUCTIONENSTART
The name of this American magazine literally translates as "tumbleweed" or "rolling stone".

Create a variable `americanMagazine` and set it to `'Rolling Stone'`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
const popularAuthor =  'Stephen King';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-4-task-9.png)

Название этого американского журнала дословно переводится "перекати-поле" или "катящийся камень".

Создайте переменную `americanMagazine` и присвойте ей значение `'Rolling Stone'`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const popularAuthor = 'Stephen King';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const americanMagazine = 'Rolling Stone';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const americanMagazine = 'Rolling Stone';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const americanMagazine = 'Rolling Stone';
// SOLUTIONEND


// OPENTESTSSTART
it('The variable `americanMagazine` exists and has a value', () => {
  expect(americanMagazine).not.undefined;
});

it('The `americanMagazine` variable contains data type string', () => {
  expect(americanMagazine).a('string');
});

it('The `americanMagazine` variable contains the value `Rolling Stone`', () => {
  expect(americanMagazine).eq('Rolling Stone');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
