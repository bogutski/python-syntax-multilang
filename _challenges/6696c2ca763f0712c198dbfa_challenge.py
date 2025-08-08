// NAMEEN:How many mushrooms are there?
// NAMERU:Сколько стало грибов?

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-13.png)

Masha collected `mushroom_count` of mushrooms in the forest. Returning home, she found another 15 mushrooms.

Suppose that the variable `mushroom_count` stores some number.

Create a variable `mushroom_count` with a value of `22:

Write a command that increments the existing value of the variable `mushroom_count` by 15.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-13.png)

Маша собрала в лесу `mushroom_count` грибов. Возвращаясь домой, она нашла еще 15 грибов.

Создайте переменную `mushroom_count` со значением `22`.

Запишите команду, которая увеличивает имеющееся значение переменной `mushroom_count` на `15`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Similar example:
```python
books = 5
books = books + 9
```
HINTENEND
*/

/*
HINTRUSTART
Похожий пример:
```python
books = 5
books = books + 9
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
mushroom_count = 22
mushroom_count = mushroom_count + 15
// SOLUTIONEND

// OPENTESTSSTART
it('The "mushroom_count" variable should be defined', () => {
    expect(mushroom_count).not.undefined;
});

it('The "mushroom_count" variable should be equal to 37', () => {
    expect(mushroom_count).to.equal(37);
});

it('The "mushroom_count" variable should be a number', () => {
    expect(mushroom_count).to.be.a('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
