// NAMEEN:Reduced by two times
// NAMERU:Уменьшение в 2 раза

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-7.png)

Variable `sum` is created and has a value.
Write a command that reduces the existing value of `sum` variable by a factor of `2`.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-7.png)

Переменная `sum` уже создана со значением `20`.
В следующей строке нужно записать команду, уменьшающую имеющееся значение переменной `sum` в `2` раза.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task.
```python
count = count / 3
```
HINTENEND
*/

/*
HINTRUSTART
Приведенный пример принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи.
```python
count = count / 3
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
sum = 20
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
sum = 20
sum = sum / 2
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
