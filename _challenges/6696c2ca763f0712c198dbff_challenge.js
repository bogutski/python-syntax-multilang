// NAMEEN:Weight after weight loss
// NAMERU:Вес после похудения

/*
INSTRUCTIONENSTART
Through proper diet and exercise, Claudia has managed to lose 25 pounds.
How much does she weigh now?

Suppose the variable `klaudiaWeight` stores some number (the original weight).
Create a variable `klaudiaWeight` with a value of `220`:
```
let klaudiaWeight = 220;
```
Write a command that reduces the existing value of the `klaudiaWeight` variable by 25.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-15.png)

С помощью правильного питания и физических упражнений Клавдии удалось похудеть на 25 фунтов.
Сколько она весит теперь?

Создайте переменную `klaudiaWeight` со значением `220`.

Запишите команду, которая уменьшает имеющееся значение переменной `klaudiaWeight` на `25`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let klaudiaWeight = 220
klaudiaWeight = klaudiaWeight - 25;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let klaudiaWeight = 220
klaudiaWeight = klaudiaWeight - 25;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let klaudiaWeight = 220
klaudiaWeight = klaudiaWeight - 25;
// SOLUTIONEND


// OPENTESTSSTART
it(`The "klaudiaWeight" variable should be defined`, () => {
    expect(klaudiaWeight).not.undefined;
});

it(`The "klaudiaWeight" variable should be a number`, () => {
    expect(typeof klaudiaWeight).eq('number');
});

it(`The "klaudiaWeight" variable should be equal to 195`, () => {
    expect(klaudiaWeight).eq(195);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
