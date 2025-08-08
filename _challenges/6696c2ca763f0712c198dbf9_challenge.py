// NAMEEN:How much money is left over from shopping?
// NAMERU:Сколько денег осталось после покупок?

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-12.png)

After the purchases were made in the store, the amount of money available decreased by $48.

Suppose that the variable `cash` stores some number.

Create a variable `cash` with value `200`.

Write a command that reduces the existing value of the `cash` variable by `48`.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-12.png)

После сделанных в магазине покупок количество имеющихся денег уменьшилось на 48 долларов.

Создайте переменную `cash` со значением `200`.

Запишите команду, которая уменьшает имеющееся значение переменной `cash` на `48`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Similar example:
```python
cash = 100
cash = cash - 25
```
HINTENEND
*/

/*
HINTRUSTART
Похожий пример:
```python
cash = 100
cash = cash - 25
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
cash = 200
cash = cash - 48
// SOLUTIONEND

// OPENTESTSSTART
it('The "cash" variable should be defined', () => {
    expect(cash).not.undefined;
});

it('The "cash" variable should be a number', () => {
    expect(typeof cash).eq('number');
});

it('The "cash" variable should be equal to 152', () => {
    expect(cash).eq(152);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
