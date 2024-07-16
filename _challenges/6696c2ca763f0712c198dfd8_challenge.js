// NAMEEN:
// NAMERU:Функция возвращает склеенные строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Возможно вы этого еще не знаете но если использовать знак `+` между двумя строками, то они склеиваются в одну строку.

Попробуйте склеить две строки в одну используя знак `+`.
```javascript
console.log('Hello' + 'World') // 'HelloWorld'
```

Напиши функцию `glueString`, которая принимает два аргумента `str1` и `str2` и возвращает их склеенные в одну строку.

Пример склеивания строк:
```javascript
function connection(string1, string2) {
  return string1 + string2;
}

console.log(connection('Hello', 'World')); // 'HelloWorld'
```

Сделайте аналогично.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function glueString(str1, str2) {
  return str1 + str2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function glueString', () => {
  expect(glueString).to.be.a('function');
});

it('Function get `Hello` and `World` and return HelloWorld', () => {
  expect(glueString('Hello', 'World')).to.equal('HelloWorld');
});

it('Function get `Learn` and `JS` and return `LearnJS`', () => {
  expect(glueString('Learn', 'JS')).to.equal('LearnJS');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
