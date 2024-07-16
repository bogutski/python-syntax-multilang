// NAMEEN:
// NAMERU:Функция приветствует двух людей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `greetingMessage`, которая принимает два параметра `firstName` и `lastName` и возвращает строку вида `Welcome, firstName lastName!`.

Создайте переменную `person1FirstName` и присвойте ей значение 'John'.
Создайте переменную `person1LastName` и присвойте ей значение 'Doe'.
Создайте переменную `person2FirstName` и присвойте ей значение 'Jane'.
Создайте переменную `person2LastName` и присвойте ей значение 'Tailor'.

Создайте переменную `greetingMessage1` и присвойте ей результат вызова функции `greetingMessage`.
В качестве аргумента передайте значения переменных `person1FirstName` и `person1LastName`.

Создайте переменную `greetingMessage2` и присвойте ей результат вызова функции `greetingMessage`.
В качестве аргумента передайте значения переменных `person2FirstName` и `person2LastName`.

Похожий пример:
```javascript
function fun(p1, p2) {
  return 'Go ' + firstName + ' ' + lastName;
}

const p1Fn = 'A';
const p1Ln = 'B';
const p2Fn = 'C';
const p2Ln = 'D';

const res1 = fun(p1Fn, p1Ln);
const res2 = fun(p2Fn, p2Ln);
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function greetingMessage(firstName, lastName) {
  return 'Welcome, ' + firstName + ' ' + lastName + '!';
}

const person1FirstName = 'John';
const person1LastName = 'Doe';

const person2FirstName = 'Jane';
const person2LastName = 'Tailor';

const greetingMessage1 = greetingMessage(person1FirstName, person1LastName);
const greetingMessage2 = greetingMessage(person2FirstName, person2LastName);
// SOLUTIONEND


// OPENTESTSSTART
it('Created function greetingMessage', () => {
  expect(greetingMessage).to.be.a('function');
});

it('Created variable person1FirstName equal to "John"', () => {
  expect(person1FirstName).to.equal('John');
});

it('Created variable person1LastName equal to "Doe"', () => {
  expect(person1LastName).to.equal('Doe');
});

it('Created variable person2FirstName equal to "Jane"', () => {
  expect(person2FirstName).to.equal('Jane');
});

it('Created variable person2LastName equal to "Tailor"', () => {
  expect(person2LastName).to.equal('Tailor');
});

it('function greetingMessage has two parameters firstName, lastName', () => {
  const func = greetingMessage.toString();
  const params = func.match(/\((.+?)\)/)[1];
  expect(params).to.equal('firstName, lastName');
});

it('greetingMessage("John", "Doe") returns "Welcome, John Doe!" and message1 is "Welcome, John Doe!"', () => {
  expect(greetingMessage1).to.equal('Welcome, John Doe!');
});

it('greetingMessage("Jane", "Tailor") returns "Welcome, Jane Tailor!" and message2 is "Welcome, Jane Tailor!"', () => {
  expect(greetingMessage2).to.equal('Welcome, Jane Tailor!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
