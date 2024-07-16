// NAMEEN:
// NAMERU:Проверяем, что пользователь админ с правильным паролем

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAdmin`, которая принимает два параметра, строки: `user`, `password`.

Функция должна возвращать `true`, если `user` равен `admin` и `password` равен `12345`.

Во всех остальных случаях функция должна возвращать `false`.

Примеры запуска функции:
```javascript
isAdmin('admin', '12345'); // true
isAdmin('admin', '123'); // false
isAdmin('superadmin', '12345'); // false
isAdmin('superadmin', '123'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAdmin(user, password) {
  if (user === 'admin' && password === '12345') {
    return true;
  }

  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAdmin', () => {
  expect(isAdmin).to.be.a('function');
});

it('isAdmin("admin", "12345") returns true', () => {
  expect(isAdmin('admin', '12345')).to.be.equal(true);
});

it('isAdmin("admin", "123") returns false', () => {
  expect(isAdmin('admin', '123')).to.be.equal(false);
});

it('isAdmin("superadmin", "12345") returns false', () => {
  expect(isAdmin('superadmin', '12345')).to.be.equal(false);
});

it('isAdmin("superadmin", "123") returns false', () => {
  expect(isAdmin('superadmin', '123')).to.be.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
