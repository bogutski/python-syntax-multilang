// NAMEEN:Robinson Crusoe
// NAMERU:Робинзон Крузо

/*
INSTRUCTIONENSTART
Robinson Crusoe marked every day he lived on the island with an 'I' notched on a tree.

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/robinzon.PNG)

He has already got a string `days` consisting of many "sticks": "IIIIIIIII....III".

Today Robinson added another one.

Let's create a variable `days` with the value `IIIIIIIIIIIIIIIIIIIIIIII`:
```javascript
let days = `IIIIIIIIIIIIIIIIIIIIIIII`;
```
Write a command that modifies the string `days` by adding another letter `'I'` to it:
```javascript
days = days + 'I';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-16.png)

Робинзон Крузо отмечал каждый прожитый на острове день зарубкой на дереве в виде буквы 'I'.

У него уже получилась строка `days`, состоящая из многих "палочек": "IIIIIII....III".

Сегодня Робинзон добавил еще одну.


Создайте переменную `days` со значением `IIIIIIIIIIIIIIIIIIIIIIII` (24 дня).

Запишите команду, которая изменяет строку `days` путем добавления к ней еще одной буквы `'I'`.


Похожий пример:
```javascript
let cars = 'III';
cars = cars + 'I';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let days = 'IIIIIIIIIIIIIIIIIIIIIIII'
days = days + 'I';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let days = 'IIIIIIIIIIIIIIIIIIIIIIII'
days = days + 'I';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let days = 'IIIIIIIIIIIIIIIIIIIIIIII'
days = days + 'I';
// SOLUTIONEND


// OPENTESTSSTART
it("The `days` variable contains 'IIIIIIIIIIIIIIIIIIIIIIIII'", () => {
    expect(days).eq('IIIIIIIIIIIIIIIIIIIIIIIII');
});

it('The "days" is type of string', () => {
    expect(typeof days).eq('string');
});

it('The `days` variable contains 25 characters', () => {
    expect(days.length).eq(25);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
