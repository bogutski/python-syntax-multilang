// NAMEEN:
// NAMERU:Приветствие и возраст

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `greetingAndAge`, которая принимает два параметра `name` и `age` и возвращает строку

`Hello, my name is John, and I am 99 years old`.

Вместо `John` и `99` должны быть значения параметров `name` и `age`.

Для решения используй конкатенацию строк.

Пример конкатенации строк:
```javascript
const name = 'John';
const age = 99;
const str = 'Hi ' + name + ', you are ' + age + ' years old';
console.log(str); // Hi John, you are 99 years old
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function greetingAndAge(name, age) {
  return 'Hello, my name is ' + name + ', and I am ' + age + ' years old';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function greetingAndAge', () => {
  expect(greetingAndAge).to.be.a('function');
});

it('Function get `John` and `99` and return `Hello, my name is John, and I am 99 years old`', () => {
  expect(greetingAndAge('John', 99)).to.equal('Hello, my name is John, and I am 99 years old');
})

it('Function get `Bob` and `22` and return `Hello, my name is Bob, and I am 22 years old`', () => {
  expect(greetingAndAge('Bob', 22)).to.equal('Hello, my name is Bob, and I am 22 years old');
})

it('Function greetingAndAge has two parameters name and age', () => {
  // function to string and then to array of arguments
  const args = greetingAndAge.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['name', 'age']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
