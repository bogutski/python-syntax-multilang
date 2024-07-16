// NAMEEN:U.S. states that begin with the letter "C"
// NAMERU:Штаты США, которые начинаются с буквы "C"

/*
INSTRUCTIONENSTART
The United States consists of 50 states. Your task is to list the states that begin with the letter "C".

Create variables `cState1`, `cState2` and `cState3` and assign them names of states that begin with the letter "C": `California'`, `Colorado'`, `Connecticut'`.

Create a variable `threeCStates` that joins the three comma-separated variables into a single line.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
const hCar1 = 'Honda';
const hCar2 = 'Hummer';
const hCar3 = 'Hyundai';
const threeHCars = hCar1 + ',' + hCar2 + ',' + hCar3;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
США состоит из 50 штатов. Ваша задача: перечислить штаты, которые начинаются с буквы "C".

Создайте переменные `cState1`, `cState2` и `cState3`присвойте им названия штатов, который начинается с буквы "C": `'California'`, `'Colorado'`, `'Connecticut'`.

Создайте переменную `threeCStates`, которая объединит три переменные через запятую в одну строку.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const hCar1 = 'Honda';
const hCar2 = 'Hummer';
const hCar3 = 'Hyundai';
const threeHCars = hCar1 + ',' + hCar2 + ',' + hCar3;
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
const cState1 = 'California';
const cState2 = 'Colorado';
const cState3 = 'Connecticut';
const threeCStates = cState1 + ',' + cState2 + ',' + cState3;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const cState1 = 'California';
const cState2 = 'Colorado';
const cState3 = 'Connecticut';
const threeCStates = cState1 + ',' + cState2 + ',' + cState3;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `cState1` contains a value', () => {
  expect(cState1).not.undefined;
});

it('Variable `cState1` contains string', () => {
  expect(cState1).a('string');
});

it('Variable `cState2` contains a value', () => {
  expect(cState2).not.undefined;
});

it('Variable `cState2` contains a string', () => {
  expect(cState2).a('string');
});

it('Variable `cState3` contains a value', () => {
  expect(cState3).not.undefined;
});

it('Variable `cState3` contains string', () => {
  expect(cState3).a('string');
});

it('Variable `threeCStates` contains a value', () => {
  expect(threeCStates).not.undefined;
});

it('The `threeCStates` variable contains a string', () => {
  expect(threeCStates).a('string');
});

it('The `threeCStates` variable contains only three states starting with `C` and listed comma separated with a space', () => {
  expect(threeCStates).to.satisfy(function CStates(threeCStates) {
    threeCStates = threeCStates.split(',').map((el) => el.trim());
    return threeCStates.length === 3 && threeCStates.includes('California') && threeCStates.includes('Colorado') && threeCStates.includes('Connecticut');
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
