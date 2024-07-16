// NAMEEN:
// NAMERU:Три администратора на сайте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Есть 3 администратора на сайте. Каждый из них имеет свой email и свой пароль.

Функция должна возвращать `true` только в том случае, если пользователь является администратором.

Напишите функцию `isAdmin`, которая принимает два параметра: `email` и `password`.

Функция должна возвращать `true`, если:
* `email` равен `admin@pasv.us` и `password` равен `12345`
* или `email` равен `admin2@pasv.us` и `password` равен `12345_`
* или `email` равен `admin3@pasv.us` и `password` равен `12345__`

Во всех остальных случаях функция должна возвращать `false`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAdmin(email, password) {
  if (email === 'admin@pasv.us' && password === '12345') {
    return true;
  }

  if (email === 'admin2@pasv.us' && password === '12345_') {
    return true;
  }

  if (email === 'admin3@pasv.us' && password === '12345__') {
    return true;
  }

  return false;

}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAdmin', () => {
  expect(isAdmin).to.be.a('function');
});

it('isAdmin("admin@pasv.us", "12345") returns true', () => {
  expect(isAdmin('admin@pasv.us', '12345')).to.be.equal(true);
});

it('isAdmin("admin2@pasv.us", "12345_") returns true', () => {
  expect(isAdmin('admin2@pasv.us', '12345_')).to.be.equal(true);
});

it('isAdmin("admin3@pasv.us", "12345__") returns true', () => {
  expect(isAdmin('admin3@pasv.us', '12345__')).to.be.equal(true);
});

it('isAdmin("superadmin3@pasv.us", "12345__") returns false', () => {
  expect(isAdmin('superadmin3@pasv.us', '12345__')).to.be.equal(false);
});

it('isAdmin("qwe@qwe.qwe", "12345__") returns false', () => {
  expect(isAdmin('qwe@qwe.qwe', '12345__')).to.be.equal(false);
});

it('isAdmin("admin@pasv.us", "123") returns false', () => {
  expect(isAdmin('admin@pasv.us', '123')).to.be.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
