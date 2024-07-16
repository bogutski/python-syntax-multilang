// NAMEEN:
// NAMERU:Очень рад вас видеть

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `veryHappy`, которая принимает два параметра:
`name` - имя человека
`count` - количество раз, которое нужно повторить слово `very`

Примеры запуска функции:
```javascript
veryHappy('John', 1); // 'I\'m very happy to see you, John!'
veryHappy('John', 3); // 'I\'m very very very happy to see you, John!'
veryHappy('John', 5); // 'I\'m very very very very very happy to see you, John!'
```

Если в одинарных кавычках внутри строки встречается одинарная кавычка, то ее нужно экранировать символом `\`.

```javascript
console.log('I\'m very happy to see you, John!'); // I'm very happy to see you, John!
console.log('I\'m \'very\' happy to see you, John!'); // I'm 'very' happy to see you, John!
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function veryHappy(name, count) {
  return "I'm " + 'very '.repeat(count) + 'happy to see you, ' + name + '!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function veryHappy', () => {
  expect(veryHappy).to.be.a('function');
});

it('veryHappy("John", 1) should return "I\'m very happy to see you, John!"', () => {
  expect(veryHappy('John', 1)).to.be.equal("I'm very happy to see you, John!");
});

it('veryHappy("John", 3) should return "I\'m very very very happy to see you, John!"', () => {
  expect(veryHappy('John', 3)).to.be.equal("I'm very very very happy to see you, John!");
});

it('veryHappy("Alice", 5) should return "I\'m very very very very very happy to see you, Alice!"', () => {
  expect(veryHappy('Alice', 5)).to.be.equal(
    "I'm very very very very very happy to see you, Alice!",
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
