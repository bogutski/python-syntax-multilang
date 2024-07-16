// NAMEEN:How many mushrooms are there?
// NAMERU:Сколько стало грибов?

/*
INSTRUCTIONENSTART
Masha collected `mushroomCount` of mushrooms in the forest. Returning home, she found another 15 mushrooms.

Suppose that the variable `mushroomCount` stores some number.
Create a variable `mushroomCount` with a value of `12`:
```
let mushroomCount = 12;
```
Write a command that increments the existing value of the variable `mushroomCount` by 15.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-13.png)

Маша собрала в лесу `mushroomCount` грибов. Возвращаясь домой, она нашла еще 15 грибов.

Создайте переменную `mushroomCount` со значением `12`.

Запишите команду, которая увеличивает имеющееся значение переменной `mushroomCount` на `15`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let mushroomCount = 12
mushroomCount = mushroomCount + 15;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let mushroomCount = 12
mushroomCount = mushroomCount + 15;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let mushroomCount = 12
mushroomCount = mushroomCount + 15;
// SOLUTIONEND


// OPENTESTSSTART
it("The 'mushroomCount' variable should be defined", () => {
    expect(mushroomCount).not.undefined;
});

it(`The "mushroomCount" variable should be equal to 27`, () => {
    expect(mushroomCount).to.equal(27);
});

it(`The "mushroomCount" variable should be a number`, () => {
    expect(mushroomCount).to.be.a('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
