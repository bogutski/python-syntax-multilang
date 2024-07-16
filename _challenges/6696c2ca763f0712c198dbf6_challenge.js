// NAMEEN:Fee and Charity
// NAMERU:Гонорар и благотворительность

/*
INSTRUCTIONENSTART
A famous actor received a fee of $10 million for filming a movie.
Of this amount, 11% went to pay tax and 60% of the remainder of the fee was spent on charity.
Find out how much money the actor kept for himself.

Create a variable `fee` and give it a value of 10,000,000.
Write a command that decreases the value of the `fee` variable by 11%.
Then write a command reducing the value obtained after the previous step by 60%.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let a = 100;
a = a - a * 0.15; //the command reduces the value of the variable a by 15%
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-6.png)

Известный актёр получил гонорар за съемки в фильме в размере 10 млн. долларов.
Из этой суммы 11% ушло на оплату налога, 60% оставшейся суммы гонорара он потратил на благотворительность.
Найдите, сколько денег актер оставил себе.

Создайте переменную `fee` и присвойте ей значение 10 000 000.
Запишите команду, уменьшающую значение переменной `fee` на 11%.
Затем запишите команду, уменьшающую значение, полученное после предыдущего шага, на 60%.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let a = 100;
a = a - a * 0.15; // команда уменьшает значение переменной `а` на 15 процентов
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let fee = 10000000;
fee = fee - fee * 0.11;
fee = fee - fee * 0.6;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let fee = 10000000;
fee = fee - fee * 0.11;
fee = fee - fee * 0.6;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let fee = 10000000;
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let fee = 10000000;
fee = fee - fee * 0.11;
fee = fee - fee * 0.6;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `fee` exists and has a value', () => {
  expect(fee).not.undefined;
});

it('Variable `fee` is not NaN', () => {
  expect(isNaN(fee)).false;
});

it('Variable `fee` is of type number', () => {
  expect(fee).a('number');
});

it('Variable `fee` has the correct value', () => {
  let money = 10000000;
  let expected = (money - money * 0.11) * 0.4;
  expect(fee).equal(expected);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
