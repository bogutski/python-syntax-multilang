// NAMEEN:
// NAMERU:Создание объекта пользователя

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `createUser`, которая принимает 6 параметров:

* `firstName` – имя пользователя, строка, может содержать пробелы в начале и в конце строки,
* `lastName` – фамилия пользователя, строка, может содержать пробелы в начале и в конце строки,
* `age` – возраст пользователя, число,
* `city` – город пользователя, строка, может содержать пробелы в начале и в конце строки,
* `email` – email пользователя, строка, может содержать пробелы в начале и в конце строки, может быть записан в разных регистрах,
* `phone` – телефон пользователя, строка, может содержать пробелы в начале и в конце строки.

Функция должна возвращать объект со свойствами:

* `name` – имя и фамилия пользователя, строка, записанная в формате `firstName lastName`, пробелы в начале и в конце строки должны быть удалены,
* `age` – возраст пользователя, число,
* `city` – город пользователя, строка, пробелы в начале и в конце строки должны быть удалены,
* `email` – email пользователя, строка, пробелы в начале и в конце строки должны быть удалены, все буквы должны быть в нижнем регистре,
* `phone` – телефон пользователя, строка, пробелы в начале и в конце строки должны быть удалены, должен начинаться с `+` если его нет в начале исходной строки.

Примеры запуска функции:
 ```javascript
createUser('  Alex', '  Smith', 20, '  New York', ' Alex@Sample.nY ', '  12345678900 ');
// { name: 'Alex Smith', age: 20, city: 'New York', email: 'alex@sample.ny', phone: '+12345678900' }

createUser('  Alice', '  Saw', 21, '  Miami  ', ' ALICE@MIAMI.SM ', '  +12345678900 ');
// { name: 'Alice Saw', age: 21, city: 'Miami', email: 'alice@miami.sm', phone: '+12345678900' }
```

Обратите внимание, что в примерах выше, в свойстве `phone` в некоторых примерах есть символ `+` в начале строки, а в некоторых его нет. Если его нет, то его нужно добавить.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function createUser(firstName, lastName, age, city, email, phone) {
  let p = phone.trim();
  if (p[0] !== '+') p = '+' + p;

  return {
    name: `${firstName.trim()} ${lastName.trim()}`,
    age,
    city: city.trim(),
    email: email.trim().toLowerCase(),
    phone: p,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function createUser', () => {
  expect(createUser).to.be.a('function');
});

it("createUser('  Alex', '  Smith', 20, '  New York', ' Alex@Sample.nY ', '  12345678900 ') return { name: 'Alex Smith', age: 20, city: 'New York', email: 'alex@sample.ny', phone: '+12345678900' }", () => {
  expect(
    createUser(
      '  Alex',
      '  Smith',
      20,
      '  New York',
      ' Alex@Sample.nY ',
      '  12345678900 ',
    ),
  ).eql({
    name: 'Alex Smith',
    age: 20,
    city: 'New York',
    email: 'alex@sample.ny',
    phone: '+12345678900',
  });
});

it("createUser('  Alice', '  Saw', 21, '  Miami  ', ' ALICE@MIAMI.SM ', '  +12345678900 '); return  { name: 'Alice Saw', age: 21, city: 'Miami', email: 'alice@miami.sm', phone: '+12345678900' }", () => {
  expect(
    createUser(
      '  Alice',
      '  Saw',
      21,
      '  Miami  ',
      ' ALICE@MIAMI.SM ',
      '  +12345678900 ',
    ),
  ).eql({
    name: 'Alice Saw',
    age: 21,
    city: 'Miami',
    email: 'alice@miami.sm',
    phone: '+12345678900',
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
