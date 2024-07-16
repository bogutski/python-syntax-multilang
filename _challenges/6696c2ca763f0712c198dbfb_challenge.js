// NAMEEN:Hotel room rates
// NAMERU:Cтоимость номеров в отеле

/*
INSTRUCTIONENSTART
During the summer period, the cost of rooms in the hotel went up by 1.5 times, but with the advent of autumn it decreased by 100.
Suppose some number is stored in the variable `price`.
There is a command that creates a variable `price` with a value of `120`:
```
let price = 120;
```
Write one command that changes the existing value of the `price` variable:
first increases it by 1.5 times, then decreases it by 100.  When performing the task, remember about the priority of operations (multiplication and division operations are performed first, then addition and subtraction operations) and do not put unnecessary brackets.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-11.png)

В летний период стоимость номеров в отеле поднялась в 1.5 раза, но с наступлением осени уменьшилась на 100.

Создайте переменную `price` со значением `120`.

Запишите команду, которая изменяет имеющееся значение переменной `price`:

* сначала увеличивает в `1.5` раза,
* затем уменьшает на `100`.

При выполнении задания помните о приоритете операций (сначала выполняются операции умножения и деления, а потом - операции сложения и вычитания) и не ставьте лишних скобок.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let price = 120;
price= price * 1.5;
price= price - 100;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let price = 120;
price= price * 1.5;
price= price - 100;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let price = 120;
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let price = 120;
price = price * 1.5;
price = price - 100;
// SOLUTIONEND


// OPENTESTSSTART
it('The "price" variable should be defined', () => {
    expect(price).not.undefined;
});

it('The "price" variable should be a number', () => {
    expect(price).a('number');
});

it('The "price" variable should be equal to 80', () => {
    expect(price).equal(80);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
