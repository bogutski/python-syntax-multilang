// NAMEEN:Reduced by a factor of 10
// NAMERU:Уменьшение в 10 раз

/*
INSTRUCTIONENSTART
Denomination is a change in the face value of money.
It usually involves "trimming" a number of zeros from old notes and issuing new, smaller denominations of money.
in circulation of new money of a smaller denomination.

Suppose a certain country has experienced denomination, and one zero has been removed from banknotes.
Set the variable `money` and assign it the value 1000.
Then write a command that decreases the value of the `money` variable by a factor of 10.

Here's an example, which is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
let number = 30;
number /= 10;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Деноминация — изменение нарицательной стоимости денег.
Обычно выражается в «обрезании» некоторого количества нулей со старых купюр и выпуске
в обращение новых денег меньшего номинала.

Предположим, в некоторой стране произошла деноминация, и с купюр убрали один ноль.
Задайте переменную `money` и присвойте ей значение 1000.
Затем запишите команду, уменьшающую значение переменной `money` в 10 раз.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let number = 30;
number /= 10;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
let money = 1000;
money /= 10;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let money = 1000;
money /= 10;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `money` contains a value', () => {
  expect(money).not.undefined;
});

it('the variable type `money` is a number', () => {
  expect(money).a('number');
});

it('the variable `money` is not NaN', () => {
  expect(isNaN(money)).false;
});

it('the variable `money` is reduced by a factor of 10', () => {
  expect(money).equal(100);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
