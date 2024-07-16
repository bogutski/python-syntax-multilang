// NAMEEN:
// NAMERU:Поменяйте первое и последнее слово местами с помощью метода substring

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Теперь давайте ту же задачу решим с помощью метода `substring`.

Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

Синтаксис:
```javascript
str.substring(indexStart, indexEnd)
```
`indexEnd` - необязательный параметр. Индекс символа, по которой будет окончание подстроки. Если не указан, то подстрока будет до конца строки.

Пример:
```javascript
let str = 'Hello world';
str.substring(0, 5); // 'Hello' - возвращает подстроку с 0 по 5 индекс (не включая 5)
str.substring(6); // 'world' - возвращает подстроку с 6 индекса (включительно) и до конца строки
```

Необходимо исправить ошибки в существующем коде, чтобы функция работала правильно.

Проанализируйте решение и попробуйте повторить самостоятельно

Функция `switchWords` принимает строку и меняет местами первое и последнее слово в строке.

В примерах используется 3 и более слов в строке.

Пример запуска функции:
```javascript
switchWords('Hello world, my name is John') // 'John world, my name is Hello'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function switchWords(str) {
    let index = str.indexOf('space');
    let firstWord = str.substring(0, index);
    let lastIndex = str.lastIndexOf('space');
    let lastWord = str.substring(lastIndex + 1);
    return lastWord  + str.substring(index, lastIndex + 1)  + firstWord;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function switchWords(str) {
    let index = str.indexOf(' ');
    let firstWord = str.substring(0, index);
    let lastIndex = str.lastIndexOf(' ');
    let lastWord = str.substring(lastIndex + 1);
    return lastWord + str.substring(index, lastIndex + 1) + firstWord;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function switchWords', () => {
    expect(switchWords).to.be.a('function');
});

it('switchWords("Hello beautiful world") returns "world beautiful Hello"', () => {
    expect(switchWords('Hello beautiful world')).to.equal('world beautiful Hello');
});

it('switchWords("Hello world, my name is John") returns "John world, my name is Hello"', () => {
    expect(switchWords('Hello world, my name is John')).to.equal('John world, my name is Hello');
});

it('switchWords("Wouldn\'t Harm a Fly") returns "Fly Harm a Wouldn\'t', () => {
    expect(switchWords('Wouldn\'t Harm a Fly')).to.equal('Fly Harm a Wouldn\'t');
});

it('switchWords("Tea Cup of My") returns "My Cup of Tea"', () => {
    expect(switchWords('Tea Cup of My')).to.equal('My Cup of Tea');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
