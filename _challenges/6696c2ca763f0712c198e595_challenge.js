// NAMEEN:
// NAMERU:Фильтрация пользователей по электронной почте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `usersFilter`.

Функция принимает объект с пользователем `user`.

Объект `user` имеет свойства:

* `name` - имя пользователя, строка;
* `city` - город, строка;
* `phone` - номер телефона, строка;
* `email` - электронная почта, строка. Может отсутствовать.

Если свойство `email` присутствует в объекте `user` и оно не  равно пустой строке, то  функция должна вернуть `true`, иначе `false`.

Пример запуска функции:
```javascript
usersFilter({name: 'Marcus', city: 'Tel Aviv', phone: '5641234567', email: 'marcuscus2@bien.org'}); // true
usersFilter({name: 'Lola', city: 'Paris', phone: '123456-7890', email: ''}); // false
usersFilter({name: 'Garry', city: 'San Francisco', phone: '987-654-3210'}); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function usersFilter(user) {
  return user.hasOwnProperty('email') && user['email'] !== '';
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function `usersFilter`', () => {
  expect(usersFilter).be.a('function');
});

it("usersFilter({name: 'John', city: 'London', phone: '312-443-8945'}) should return false", () => {
  expect(
    usersFilter({
      name: 'John',
      city: 'London',
      phone: '312-443-8945',
    }),
  ).eq(false);
});

it("usersFilter({name: 'Mary', city: 'Sidney', phone: '745-1550301', email: 'simply-maria@qmail.com'}) should return true", () => {
  expect(
    usersFilter({
      name: 'Mary',
      city: 'Sidney',
      phone: '745-1550301',
      email: 'simply-maria@qmail.com',
    }),
  ).eq(true);
});

it("usersFilter({name: 'Samantha', city: 'Santa Barbara', phone: '987-214-4973', email: ''}) should return false", () => {
  expect(
    usersFilter({
      name: 'Samantha',
      city: 'Santa Barbara',
      phone: '987-214-4973',
      email: '',
    }),
  ).eq(false);
});

it("usersFilter({name: 'Boris', city: 'REYKJAVIK', phone: '546-187-5926'}) should return false", () => {
  expect(
    usersFilter({
      name: 'Boris',
      city: 'REYKJAVIK',
      phone: '546-187-5926',
    }),
  ).eq(false);
});

it("usersFilter({name: 'Robert', city: 'Oakland', phone: '7639148577', email: 'ironman@dotnet.com'}) should return true", () => {
  expect(
    usersFilter({
      name: 'Robert',
      city: 'Oakland',
      phone: '7639148577',
      email: 'ironman@dotnet.com',
    }),
  ).eq(true);
});

it("usersFilter({name: 'Veronica', city: 'Tokio', phone: '435-964-0474', email: 'nikki-v@nihao.jp'}) should return true", () => {
  expect(
    usersFilter({
      name: 'Veronica',
      city: 'Tokio',
      phone: '435-964-0474',
      email: 'nikki-v@nihao.jp',
    }),
  ).eq(true);
});

it("usersFilter({name: 'Kumar', city: 'Deli', phone: '554-303-8940', email: ''}) should return false", () => {
  expect(
    usersFilter({
      name: 'Kumar',
      city: 'Deli',
      phone: '554-303-8940',
      email: '',
    }),
  ).eq(false);
});

it("usersFilter({name: 'Bilbo', city: 'Shire', phone: '777-777-7777'}) should return false", () => {
  expect(
    usersFilter({
      name: 'Bilbo',
      city: 'Shire',
      phone: '777-777-7777',
    }),
  ).eq(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
