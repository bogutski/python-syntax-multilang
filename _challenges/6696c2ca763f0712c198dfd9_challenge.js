// NAMEEN:
// NAMERU:Функция возвращает склеенные строки c and между ними

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Если использовать знак `+` между двумя строками, то они склеиваются в одну строку.
Это называется конкатенация. Мы еще не проходили эту тему, но давайте попробуем.
Можно склеить несколько строк в одну, используя `+` между ними.


В этом примере мы склеиваем три строки:
```javascript
console.log('String1' + ' and ' + 'String2') // 'String1 and String2'
```

Напиши функцию `glueAndString`, которая принимает два аргумента `str1` и `str2` и возвращает их склеенные в одну строку и добавляет строку ` and `между ними.

Пример склеивания строк:
```javascript
function connection(string1, string2) {
  return string1 + ' something ' +string2;
}

console.log(connection('Hello', 'World')); // 'Hello something World'
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
function glueAndString(str1, str2) {
  return str1 + ' and ' + str2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function glueAndString', () => {
  expect(glueAndString).to.be.a('function');
});

it('Function get Bob, Alice and return Bob and Alice', () => {
  expect(glueAndString('Bob', 'Alice')).to.equal('Bob and Alice');
});

it('Function get Lemon, Shark and return Lemon and Shark', () => {
  expect(glueAndString('Lemon', 'Shark')).to.equal('Lemon and Shark');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
