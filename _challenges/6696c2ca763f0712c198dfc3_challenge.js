// NAMEEN:
// NAMERU:Функция приветствия с параметром по умолчанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `greet`, которая принимает имя `name` и возвращает строку вида `'Hello, name!'`.

Если параметр не задан, функция должна вернуть строку `'Hello, Guest!'`.

Приведем пример, принципиально похож на то, что нужно сделать. Адаптируйте его к требованиям задачи:
```javascript
function message(user = 'Unknown'){
  return 'You got message form, ' + name;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function greet(name){
  return
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function greet(name = 'Guest') {
    return 'Hello, ' + name + '!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function greet', () => {
    expect(greet).to.be.a('function');
});

it('Function returns correct result for arguments `Alice`', () => {
    expect(greet('Alice')).to.equal('Hello, Alice!');
});

it('Function returns correct result for arguments `Bob`', () => {
    expect(greet('Bob')).to.equal('Hello, Bob!');
});

it('Function returns correct result if no arguments', () => {
    expect(greet()).to.equal('Hello, Guest!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
