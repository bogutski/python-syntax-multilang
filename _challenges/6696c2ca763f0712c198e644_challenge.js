// NAMEEN:
// NAMERU:Профиль сотрудника. Удаление свойства из объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `employeeCard` принимает параметр – объект с данными сотрудника:
* `company` – название компании, строка
* `firstName` – имя сотрудника, строка
* `lastName` – фамилия сотрудника, строка
* `age` – возраст сотрудника, число
* `position` – должность сотрудника, строка

Название параметра произвольное.

Необходимо удалить свойство `age` из объекта, а также добавить свойство `email`.

Правила создания email:
* первый символ имени сотрудника в нижнем регистре
* точка
* фамилия сотрудника в нижнем регистре
* `@`
* название компании в нижнем регистре
* `.com`

Например, если у сотрудника имя `John`, фамилия `Doe`, компания `Wood`, то email будет выглядеть так: `j.doe@wood.com`

Функция должна вернуть объект с измененными свойствами.

Пример запуска функции:
```javascript
employeeCard({ company: 'Wood', firstName: 'John', lastName: 'Doe', age: 32, position: 'Manager' })
// {company: 'Wood', firstName: 'John', lastName: 'Doe', position: 'Manager', email: `j.doe@wood.com` }
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
function employeeCard(employee) {
  delete employee.age;
  employee.email =
    employee.firstName[0].toLowerCase() +
    '.' +
    employee.lastName.toLowerCase() +
    '@' +
    employee.company.toLowerCase() +
    '.com';
  return {
    company: employee.company,
    firstName: employee.firstName,
    lastName: employee.lastName,
    position: employee.position,
    email: employee.email,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function employeeCard', () => {
  expect(employeeCard).to.be.a('function');
});

it(`employeeCard({company: 'Wood', firstName: 'John', lastName: 'Doe', age: 39, position: 'Manager' }) return {company: 'Wood', firstName: 'John', lastName: 'Doe', position: 'Manager', email: 'j.doe@wood.com' }`, () => {
  expect(
    employeeCard({
      company: 'Wood',
      firstName: 'John',
      lastName: 'Doe',
      age: 39,
      position: 'Manager',
    }),
  ).eql({
    company: 'Wood',
    firstName: 'John',
    lastName: 'Doe',
    position: 'Manager',
    email: 'j.doe@wood.com',
  });
});

it(`employeeCard({company: 'Amazon', firstName: 'Alex', lastName: 'Sheldon', age: 43, position: 'sales person'}) return {company: 'Amazon', firstName: 'Alex', lastName: 'Sheldon', age: 43, position: 'sales person', email: 'a.sheldon@amazon.com' }`, () => {
  expect(
    employeeCard({
      company: 'Amazon',
      firstName: 'Alex',
      lastName: 'Sheldon',
      age: 43,
      position: 'sales person',
    }),
  ).eql({
    company: 'Amazon',
    firstName: 'Alex',
    lastName: 'Sheldon',
    position: 'sales person',
    email: 'a.sheldon@amazon.com',
  });
});

it(`employeeCard({company: 'Airfly', firstName: 'Jane', lastName: 'Doe', age: 33, position: 'CEO' }) return {company: 'Airfly', firstName: 'Jane', lastName: 'Doe', position: 'CEO', email: 'j.doe@airfly.com' }`, () => {
  expect(
    employeeCard({
      company: 'Airfly',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 33,
      position: 'CEO',
    }),
  ).eql({
    company: 'Airfly',
    firstName: 'Jane',
    lastName: 'Doe',
    position: 'CEO',
    email: 'j.doe@airfly.com',
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
