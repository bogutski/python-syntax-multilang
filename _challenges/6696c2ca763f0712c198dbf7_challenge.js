// NAMEEN:Reduced by two times
// NAMERU:Уменьшение в 2 раза

/*
INSTRUCTIONENSTART
Variable `sum` is created and has a value. Write a command that reduces the existing value of `sum` variable by a factor of 2.

Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the task. For example, you want to increase the existing value of variable `count` by 3 times. To do this, you can write the command:
```
count = count * 3;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-7.png)

Нужно создать переменную `sum`, при помощи ключевого слова `let` и присвоить ей значение `20`.

В следующей строке нужно записать команду, уменьшающую имеющееся значение переменной `sum` в 2 раза.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи.

Например, требуется увеличить имеющееся значение переменной `count` в 3 раза.

Для этого можно записать команду:
```javascript
let count = 10;
count = count * 3;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let sum = 20;
sum = sum / 2;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let sum = 20;
sum = sum / 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let sum = 20;
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let sum = 20;
sum = sum / 2;
// SOLUTIONEND


// OPENTESTSSTART
it('variable "sum" exists and has a value', () => {
    expect(sum).not.undefined;
});

it('variable "sum" is not NaN', () => {
    expect(isNaN(sum)).false;
});

it('variable "sum" has the correct value', () => {
    expect(sum).equal(10);
});
it('variable "sum" is of type number', () => {
    expect(sum).a('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
