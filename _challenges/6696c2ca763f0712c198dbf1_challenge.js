// NAMEEN:Increase by 2
// NAMERU:Увеличение на 2

/*
INSTRUCTIONENSTART
Create a variable `count` and assign it the value 100.
Write a command that increments the existing value of the `count` variable by 2.
To do this, type the command:
```
count = count + 2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-1.png)

Создайте переменную `count` и присвойте ей значение 100.

```javascript
let count = 100;
```

Затем запишите команду, увеличивающую имеющееся значение переменной `count` на 2.
Для этого напечатайте команду:
```javascript
count = count + 2;
```

Итого, в итоге должно получиться так:
```javascript
let count = 100;
count = count + 2;
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let count = 100;
count = count + 2;
// SOLUTIONEND

// OPENTESTSSTART
it(`'count' variable contains a value`, () => {
  expect(count).not.undefined;
});

it(`The data type of the 'count' variable is number`, () => {
  expect(count).a('number');
});

it(`The 'count' variable contains 102`, () => {
  expect(count).eq(102);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
