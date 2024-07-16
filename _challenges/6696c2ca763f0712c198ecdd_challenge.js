// NAMEEN:
// NAMERU:Выполнить команду над строкой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringAndCommand`, которая принимает два аргумента: строку и команду.

Команда может быть двух видов:
* `'countUpperCase'` - подсчитать количество символов в верхнем регистре в строке.
* `'countLowerCase'` - подсчитать количество символов в нижнем регистре в строке.

Функция должна вернуть строку вида: `Command: ${command}, result: ${count}`.

Если строка пустая, то вернуть `'String is empty'`.

В строке будут только буквы.


Примеры запуска функции:
```javascript
stringAndCommand('', 'countLowerCase');           // 'String is empty'
stringAndCommand('sun', 'countUpperCase');        // 'Command: countUpperCase, result: 0'
stringAndCommand('HelloWorld', 'countLowerCase'); // 'Command: countLowerCase, result: 8'
stringAndCommand('JAVAscript', 'countUpperCase'); // 'Command: countUpperCase, result: 4'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringAndCommand(str, command){
  if(str.length === 0) return 'String is empty';
  let count = 0;
  if(command === 'countUpperCase'){
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i].toUpperCase()) count++;
    }
  } else if(command === 'countLowerCase'){
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i].toLowerCase()) count++;
    }
  }
  return `Command: ${command}, result: ${count}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringAndCommand', () => {
  expect(stringAndCommand).to.be.a('function');
});

it("stringAndCommand('HelloWorld', 'countLowerCase') returns 'Command: countLowerCase, result: 8'", () => {
  expect(stringAndCommand('HelloWorld', 'countLowerCase')).to.equal('Command: countLowerCase, result: 8');
});

it("stringAndCommand('HelloWorld', 'countUpperCase') returns 'Command: countUpperCase, result: 2'", () => {
  expect(stringAndCommand('HelloWorld', 'countUpperCase')).to.equal('Command: countUpperCase, result: 2');
});

it("stringAndCommand('JAVAscript', 'countUpperCase') returns 'Command: countUpperCase, result: 4'", () => {
  expect(stringAndCommand('JAVAscript', 'countUpperCase')).to.equal('Command: countUpperCase, result: 4');
});

it("stringAndCommand('JAVAscript', 'countLowerCase') returns 'Command: countLowerCase, result: 6'", () => {
  expect(stringAndCommand('JAVAscript', 'countLowerCase')).to.equal('Command: countLowerCase, result: 6');
});

it("stringAndCommand('MOON', 'countLowerCase') returns 'Command: countLowerCase, result: 0'", () => {
  expect(stringAndCommand('MOON', 'countLowerCase')).to.equal('Command: countLowerCase, result: 0');
});

it("stringAndCommand('sun', 'countUpperCase') returns 'Command: countUpperCase, result: 0'", () => {
  expect(stringAndCommand('sun', 'countUpperCase')).to.equal('Command: countUpperCase, result: 0');
});

it("stringAndCommand('', 'countUpperCase') returns 'String is empty'", () => {
  expect(stringAndCommand('', 'countUpperCase')).to.equal('String is empty');
});

it("stringAndCommand('', 'countLowerCase') returns 'String is empty'", () => {
  expect(stringAndCommand('', 'countLowerCase')).to.equal('String is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
