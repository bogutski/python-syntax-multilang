// NAMEEN:Train ride
// NAMERU:Аттракцион "Поезд"

/*
INSTRUCTIONENSTART
Disneyland has a wonderful attraction, The Train, which always has a long line.
There are 48 seats on the train and there are 60 people in line.
The clerk has to start only the number of people who can occupy the seats.
How many people from the queue will not go on the first ride?

Create a variable `line` and assign a value of 60 to it.

Create a variable `seats` and give it the value of the number of seats on the train.

Create a variable `unhappyRiders` and return the result: how many people will wait for the next ride?
You only need to return the number of people who did not leave on the first train.

Here is an example, which is fundamentally similar to what we want to do, but adapt it to the requirements of the task:
```
const allApples = 80;
const placeInBasket = 64;
const leftOver = allApples - placeInBaskets;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В Disneyland есть замечательный аттракцион - "Поезд", на который всегда стоит большая очередь.
В поезде 48 мест, а в очереди стоит 60 человек.
Клерк должен запустить только то количество людей, которое сможет занять сидячие места.
Сколько человек из очереди не поедет в первую поездку?

Создайте переменную `line` и присвойте ей значение 60.

Создайте переменную `seats` и присвойте ей значение количества мест в поезде.

Создайте переменную `unhappyRiders` и верните результат: сколько людей будет ждать следующей поездки?
Вернуть нужно только количество людей, кто не уехал в первом поезде.

Приведем пример, который принципиально похож на то что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const allApples = 80;
const placeInBasket = 64;
const leftOver = allApples - placeInBaskets;
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
const line = 60;
const seats = 48;
const unhappyRiders = line - seats;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const line = 60;
const seats = 48;
const unhappyRiders = line - seats;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `line` exists and contains value ', () => {
  expect(line).not.to.be.undefined;
});

it('The variable `seats` exists and contains the value ', () => {
  expect(seats).not.to.be.undefined;
});

it('The value of variable `line` is a number', () => {
  expect(line).a('number');
});

it('The value of the variable `seats` is a number', () => {
  expect(seats).a('number');
});

it('The result of the variable `unhappyRiders` is a number', () => {
  expect(unhappyRiders).eq(12);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
