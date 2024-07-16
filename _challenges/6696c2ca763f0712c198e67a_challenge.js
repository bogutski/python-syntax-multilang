// NAMEEN:
// NAMERU:Сравнить объекты профилей пользователей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `compareProfiles`, которая принимает два параметра:
* `profile1` – объект, содержащий информацию о первом пользователе
* `profile2` – объект, содержащий информацию о втором пользователе

Объекты `profile1` и `profile2` имеют следующую структуру:
* `name` – имя пользователя, строка
* `phone` – телефон пользователя, строка

Функция должна вернуть `true`, если объекты равны, и `false` в противном случае.

Пример запуска функции:
```javascript
compareProfiles({name: 'John', phone: '+1234567890'}, {name: 'John', phone: '+1234567890'}) // true
compareProfiles({name: 'John', phone: '+1234567890'}, {name: 'John', phone: '+1234567891'}) // false
compareProfiles({name: 'Alice', phone: '+1234567890'}, {name: 'Alex', phone: '+1234567890'}) // false
```

Объекты нельзя сравнивать с помощью оператора `===`, так как они сравниваются по ссылке, а не по значению.

Для сравнения объектов необходимо сравнивать на равенство каждое свойство между собой.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compareProfiles(profile1, profile2) {
  return profile1.name === profile2.name && profile1.phone === profile2.phone;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function compareProfiles', () => {
  expect(compareProfiles).to.be.a('function');
});

it("compareProfiles({name: 'John', phone: '+1234567890'}, {name: 'John', phone: '+1234567890'}) // true", () => {
  expect(
    compareProfiles(
      { name: 'John', phone: '+1234567890' },
      { name: 'John', phone: '+1234567890' },
    ),
  ).to.be.true;
});

it("compareProfiles({name: 'John', phone: '+1234567890'}, {name: 'John', phone: '+1234567891'}) // false", () => {
  expect(
    compareProfiles(
      { name: 'John', phone: '+1234567890' },
      { name: 'John', phone: '+1234567891' },
    ),
  ).to.be.false;
});

it("compareProfiles({name: 'Alice', phone: '+1234567890'}, {name: 'Alex', phone: '+1234567890'}) // false", () => {
  expect(
    compareProfiles(
      { name: 'Alice', phone: '+1234567890' },
      { name: 'Alex', phone: '+1234567890' },
    ),
  ).to.be.false;
});

it("compareProfiles({name: 'Bob', phone: '+1234567895'}, {name: 'Bob', phone: '+1234567895'}) // true", () => {
  expect(
    compareProfiles(
      { name: 'Bob', phone: '+1234567895' },
      { name: 'Bob', phone: '+1234567895' },
    ),
  ).to.be.true;
});

it("compareProfiles({name: 'KJ', phone: '+4234567895'}, {name: 'Kj', phone: '+4234567895'}) // false", () => {
  expect(
    compareProfiles(
      { name: 'KJ', phone: '+4234567895' },
      { name: 'Kj', phone: '+4234567895' },
    ),
  ).to.be.false;
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
