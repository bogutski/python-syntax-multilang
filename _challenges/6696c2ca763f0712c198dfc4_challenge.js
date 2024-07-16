// NAMEEN:
// NAMERU:Добро пожаловать в PASV!

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `greeting`, которая принимает аргумент `name` и возвращает строку `Hello, name! Welcome to PASV!`. Задайте значение по умолчанию для аргумента `name` равное `friend`.

Примеры
```javascript
greeting('Alice'); // 'Hello, Alice! Welcome to PASV!'
greeting('Bob'); // 'Hello, Bob! Welcome to PASV!'
greeting(); // 'Hello, friend! Welcome to PASV!'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function greeting(name){
  return
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function greeting (name = 'friend'){
  return 'Hello, ' + name + '! Welcome to PASV!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function greeting', () => {
  expect(greeting).to.be.a('function');
});

it('Function returns correct result for arguments `Alice`', () => {
  expect(greeting('Alice')).to.equal('Hello, Alice! Welcome to PASV!');
});

it('Function returns correct result for arguments `Anna`', () => {
    expect(greeting('Anna')).to.equal('Hello, Anna! Welcome to PASV!');
});

it('Function returns correct result for arguments `Alex`', () => {
    expect(greeting('Alex')).to.equal('Hello, Alex! Welcome to PASV!');
});

it('Function returns correct result if no arguments', () => {
    expect(greeting()).to.equal('Hello, friend! Welcome to PASV!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
