// NAMEEN:
// NAMERU:Форматировать имя на табличке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для всех сотрудников компании необходимо создать таблички с именами в едином формате.

Напишите функцию `formatName`, которая принимает две строки с именем и фамилией

Пусть функция возвращает строку формате `JOHNSON E.`.

Посмотрите примеры.

Пример запуска функции:
```javascript
formatName('johnson', 'edwin'); // 'JOHNSON E.'
formatName('JOHNSON', 'EDWIN'); // 'JOHNSON E.'
formatName('   johnson ', '  edwin '); // 'JOHNSON E.'
```

Входные данные могут быть в любом регистре, а также содержать пробелы в начале и в конце строки.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formatName(firstName, lastName) {
  return `${firstName.trim().toUpperCase()} ${lastName.trim().toUpperCase()[0]}.`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formatName', () => {
  expect(formatName).to.be.a('function');
});

it('formatName("johnson", "edwin") should return "JOHNSON E."', () => {
  expect(formatName('johnson', 'edwin')).to.be.equal('JOHNSON E.');
});

it('formatName("SAMUEL", "EDWIN") should return "SAMUEL E."', () => {
  expect(formatName('SAMUEL', 'EDWIN')).to.be.equal('SAMUEL E.');
});

it('formatName("   michael ", "  thomas ") should return "MICHAEL T."', () => {
  expect(formatName('   michael ', '  thomas ')).to.be.equal('MICHAEL T.');
});

it('formatName("   victoria ", "  mary ") should return "VICTORIA M."', () => {
  expect(formatName('   victoria ', '  mary ')).to.be.equal('VICTORIA M.');
});

it('formatName("   ukko ", "  jussi ") should return "UKKO J."', () => {
   expect(formatName('   ukko ', '  jussi ')).to.be.equal('UKKO J.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
