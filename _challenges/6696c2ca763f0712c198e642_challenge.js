// NAMEEN:
// NAMERU:Редактирование водительских прав. Удаление свойств объекта.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В водительские права нечаянно попала информация о текущем годе,
но при этом отсутствует информация о цвете глаз.

Необходимо написать функцию `driverLicense` которая принимает 2 параметра:

* `profile` – объект с информацией о водителе
* `color` - цвет глаз, строка

Объект `profile` имеет следующие свойства:
* `name` - имя пользователя, строка;
* `lastName` - фамилия пользователя, строка;
* `currentYear` - текущий год, число;
* `yearOfBirth` - год рождения пользователя, число;
* `height` - рост пользователя, число.
Необходимо удалить свойство `currentYear` из объекта `profile` и добавить свойство `eyeColor` со значением `color`;

Функция должна возвращать объект с измененными свойствами.

Пример запуска функции:
```javascript

driverLicense({name: 'John', lastName: 'Lee', currentYear: 2023, yearOfBirth: 1989, height: 189}, 'blue') // {name: 'John', lastName: 'Lee', yearOfBirth: 1989, height: 189, eyeColor: 'blue' }
carProfile({model: 'BMW', currentYear: 2023, productionYear:2023}, 'silver') // { model: 'BMW', productionYear:2023, color: 'silver' }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function driverLicense(profile, color) {
  delete profile.currentYear;
  profile.eyeColor = color;
  return profile;
}

// SOLUTIONEND

// OPENTESTSSTART
it(`Created function driverLicense`, () => {
  expect(driverLicense).to.be.a('function');
});

it(`driverLicense({name: 'John', lastName: 'Lee', currentYear: 2022, yearOfBirth: 1989, height: 189}, 'brown') return { name: 'John', lastName: 'Lee', yearOfBirth: 1989, height: 189, eyeColor: 'brown' }`, () => {
  expect(
    driverLicense(
      {
        name: 'John',
        lastName: 'Lee',
        currentYear: 2022,
        yearOfBirth: 1989,
        height: 189,
      },
      'brown',
    ),
  ).eql({
    name: 'John',
    lastName: 'Lee',
    yearOfBirth: 1989,
    height: 189,
    eyeColor: 'brown',
  });
});

it(`driverLicense({name: 'Leo', lastName: 'DiCaprio', currentYear: 2023, yearOfBirth: 1974, height: 183}, 'blue') return { name: 'Leo', lastName: 'DiCaprio', yearOfBirth: 1974, height: 183, eyeColor: 'blue' }`, () => {
  expect(
    driverLicense(
      {
        name: 'Leo',
        lastName: 'DiCaprio',
        currentYear: 2023,
        yearOfBirth: 1974,
        height: 183,
      },
      'blue',
    ),
  ).eql({
    name: 'Leo',
    lastName: 'DiCaprio',
    yearOfBirth: 1974,
    height: 183,
    eyeColor: 'blue',
  });
});

it(`driverLicense({name: 'Tom', lastName: 'Cruise', currentYear: 2023, yearOfBirth: 1962, height: 175}, 'green') return { name: 'Tom', lastName: 'Cruise', yearOfBirth: 1962, height: 175, eyeColor: 'green' }`, () => {
  expect(
    driverLicense(
      {
        name: 'Tom',
        lastName: 'Cruise',
        currentYear: 2023,
        yearOfBirth: 1962,
        height: 175,
      },
      'green',
    ),
  ).eql({
    name: 'Tom',
    lastName: 'Cruise',
    yearOfBirth: 1962,
    height: 175,
    eyeColor: 'green',
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
