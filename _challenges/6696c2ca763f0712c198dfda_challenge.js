// NAMEEN:
// NAMERU:Исправьте ошибку в функции contactFormat, чтобы она склеивала строки правильно.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибку в функции `contactFormat`, чтобы она склеивала строки правильно.

Ожидается что функция примет три параметра: `firstName`, `lastName` и `phone` и вернет строку в формате `'lastName firstName: phone'`

Пример запуска:
```javascript
contactFormat('John', 'Doe', '+1234567890'); // 'Doe John: +1234567890'
contactFormat('Jane', 'Smith', '+17897897845'); // 'Smith Jane: +17897897845'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function contactFormat(firstName, lastName, phone) {
  return firstName + lastName + phone;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function contactFormat(firstName, lastName, phone) {
  return lastName + ' ' + firstName + ': ' + phone;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function contactFormat', () => {
  expect(contactFormat).to.be.a('function');
});

it('Function get John, Doe, +1234567890 returns correct string', () => {
  expect(contactFormat('John', 'Doe', '+1234567890')).to.equal('Doe John: +1234567890');
});

it('Function get Jane, Smith, +17897897845 returns correct string', () => {
  expect(contactFormat('Jane', 'Smith', '+17897897845')).to.equal('Smith Jane: +17897897845');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
