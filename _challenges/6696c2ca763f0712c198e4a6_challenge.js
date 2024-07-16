// NAMEEN:
// NAMERU:Очистка емейла

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Пользователи сайта вводят свой емейл в форму. Но иногда они вводят его с пробелами в начале и в конце. Например, `'  SomeEmail@GmAiL.COM  '`

Нужно пропустить емейл через функцию, которая удаляет пробелы в начале и в конце строки и приводит ее к нижнему регистру – `someemail@gmail.com`

Напишите функцию `clearEmail`, которая принимает строку и возвращает ее без пробелов в начале и в конце, а также в нижнем регистре.

Если после удаления пробелов строка пустая, то функция должна вернуть `Empty email`.

Пример запуска функции:
```javascript
clearEmail(' exaMPLe@emaIl.COM   '); // 'example@email.com'
clearEmail('    '); // 'Empty email'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function clearEmail(email) {
  if (email.trim() === '') return 'Empty email';
  return email.trim().toLowerCase();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function clearEmail', () => {
  expect(clearEmail).to.be.a('function');
});

it('clearEmail("  exaMPLe@emaIl.COM   ") should return "example@email.com"', () => {
  expect(clearEmail('  exaMPLe@emaIl.COM   ')).to.be.equal('example@email.com');
});

it('clearEmail(" qweQWE@qweQWE.com   ") should return "qweqwe@qweqwe.com"', () => {
  expect(clearEmail(' qweQWE@qweQWE.com   ')).to.be.equal('qweqwe@qweqwe.com');
});

it('clearEmail(" tyui ") should return "tyui"', () => {
  expect(clearEmail(' tyui ')).to.be.equal('tyui');
});

it('clearEmail("    ") should return "Empty email"', () => {
  expect(clearEmail('    ')).to.be.equal('Empty email');
});

it('clearEmail("") should return "Empty email"', () => {
  expect(clearEmail('')).to.be.equal('Empty email');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
