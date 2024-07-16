// NAMEEN:
// NAMERU:Распределение детей по классам в школе по возрасту

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getSchoolClass`, которая поможет распределить детей по классам в школе по возрасту.

Функция принимает возраст ребенка и возвращает номер класса, в который он должен попасть.

* Если возраст меньше 6 лет, то возвращаем строку `Kindergarten`.
* Если возраст от 6 до 7 лет, то возвращаем строку `1st grade`.
* Если возраст от 7 до 8 лет, то возвращаем строку `2nd grade`.
* Если возраст от 8 до 9 лет, то возвращаем строку `3rd grade`.
* Если возраст от 9 лет и выше, то возвращаем строку `4th grade or higher`.

Похожий пример:
```javascript
function getLevel(altitude) {
  if (altitude < 1000) {
    return 'low level';
  } else if (altitude < 5000) {
    return 'mid level';
  } else {
    return 'high level';
  }
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getSchoolClass(age) {
  if (age < 6) {
    return 'Kindergarten';
  } else if (age < 7) {
    return '1st grade';
  } else if (age < 8) {
    return '2nd grade';
  } else if (age < 9) {
    return '3rd grade';
  } else {
    return '4th grade or higher';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getSchoolClass', () => {
  expect(getSchoolClass).to.be.a('function');
});

it('getSchoolClass(4) returns "Kindergarten"', () => {
  expect(getSchoolClass(4)).to.equal('Kindergarten');
});

it('getSchoolClass(5) returns "Kindergarten"', () => {
  expect(getSchoolClass(5)).to.equal('Kindergarten');
});

it('getSchoolClass(6) returns "1st grade"', () => {
  expect(getSchoolClass(6)).to.equal('1st grade');
});

it('getSchoolClass(6.5) returns "1st grade"', () => {
  expect(getSchoolClass(6.5)).to.equal('1st grade');
});

it('getSchoolClass(7) returns "2nd grade"', () => {
  expect(getSchoolClass(7)).to.equal('2nd grade');
});

it('getSchoolClass(7.5) returns "2nd grade"', () => {
  expect(getSchoolClass(7.5)).to.equal('2nd grade');
});

it('getSchoolClass(8) returns "3rd grade"', () => {
  expect(getSchoolClass(8)).to.equal('3rd grade');
});

it('getSchoolClass(8.5) returns "3rd grade"', () => {
  expect(getSchoolClass(8.5)).to.equal('3rd grade');
});

it('getSchoolClass(9) returns "4th grade or higher"', () => {
  expect(getSchoolClass(9)).to.equal('4th grade or higher');
});

it('getSchoolClass(10) returns "4th grade or higher"', () => {
  expect(getSchoolClass(10)).to.equal('4th grade or higher');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
