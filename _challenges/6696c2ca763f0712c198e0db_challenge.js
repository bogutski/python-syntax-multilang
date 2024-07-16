// NAMEEN:
// NAMERU:Результат функции приветствия записывается в переменную

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `greeting`, которая принимает параметр `name` и возвращает строку вида `Hello, name!`.

Создайте переменную `message` и присвойте ей результат вызова функции `greeting`. В качестве аргумента передайте любое имя.

Похожий пример:
```javascript
function hello(firstName) {
  return 'Hello, ' + firstName + '!';
}

const helloMessage = hello('John');
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun hello
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function greeting(name) {
  return `Hello, ${name}!`;
}

const message = greeting('John');
// SOLUTIONEND


// OPENTESTSSTART
it('Created function greeting', () => {
  expect(greeting).to.be.a('function');
});

it('function has parameter name', () => {
  const func = greeting.toString();
  const param = func.match(/\((.+?)\)/)[1];
  expect(param).to.equal('name');
});

it('Created variable message', () => {
  expect(message).to.be.a('string');
});

it('greeting("Mary") returns "Hello, Mary!"', () => {
  expect(greeting('Mary')).to.equal('Hello, Mary!');
});

it('greeting("Bob") returns "Hello, Bob!"', () => {
  expect(greeting('Bob')).to.equal('Hello, Bob!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
