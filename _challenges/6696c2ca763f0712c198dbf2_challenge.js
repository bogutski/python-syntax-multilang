// NAMEEN:Increase by 1
// NAMERU:Увеличение на 1

/*
INSTRUCTIONENSTART
When we count something, we add one to some number that is already there.
For example, you have counted the number of chairs in all the rooms, and the number of chairs is 11.
But when you went to the balcony, you saw one more chair. Then you add one to the number of chairs you have,
 and the result is 12.

Create a variable `count` and give it a value of 11.

Then write a command that increments the value of the `count` variable by 1.

Here is an example that is fundamentally similar to what needs to be done,
But adapt it to the needs of the task:
```
let a = 5;
a = a + 1;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-2.png)

Когда мы считаем что-то, мы прибавляем единицу к некоторому количеству, которое уже есть.
Например, вы посчитали количество стульев во всех комнатах, и количество стульев равно 11.
Но когда вы вышли на балкон, вы увидели еще один стул. Тогда вы прибавляете 1 к имеющемуся количеству,
 и результат становится равным 12.

Создайте переменную `count` и присвойте ей значение 11.

Затем запишите команду, увеличивающую значение переменной `count` на 1.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let a = 5;
a = a + 1;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let count = 11;
count = count + 1;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let count = 11;
count = count + 1;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let count = 11;
count = count + 1;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `count` exists and has a value', () => {
  expect(count).not.undefined;
});

it('the variable `count` is not NaN', () => {
  expect(isNaN(count)).false;
});

it('the variable `count` is of type number', () => {
  expect(count).a('number');
});

it('the variable `count` is equal to 12', () => {
  expect(count).equal(12);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
