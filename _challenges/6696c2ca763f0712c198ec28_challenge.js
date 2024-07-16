// NAMEEN:
// NAMERU:Разделить строку по элементу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `divideByEl`, которая принимает два аргумента: строку и элемент.

Функция должна разделять строку каждый раз, когда встречает элемент. Разделение происходит после элемента.

Например:
* `1w2w3w` разделить по `w` должно вернуть `['1w', '2w', '3w']`
* `abcabcabc` разделить по `a` должно вернуть `['a', 'bca', 'bca', 'bc']`

После разделения, каждая отдельная часть строки должна быть добавлена в массив.

В функции только 3 ошибки. Цикл `for` и код ниже - правильные.

Постарайтесь разобрать каждую строчку кода и понять, что она делает.


Примеры запуска функции:
```javascript
divideByEl('w12w34w56', 'w'); // ['w', '12w', '34w', '56']
divideByEl('abcabcabc', 'b'); // ['ab', 'cab', 'cab', 'c']
divideByEl('abc', ''); // ['abc']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
divideByEl(string, el){
  cons arr = {};
  let chunk = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] === el){
      chunk += el;
      arr.push(chunk);
      chunk = '';
    } else {
      chunk += string[i];
    }
  }
  if(chunk.length !== 0) {
    arr.push(chunk);
  }
  return arr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function divideByEl(string, el){
  const arr = [];
  let chunk = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] === el){
      chunk += el;
      arr.push(chunk);
      chunk = '';
    } else {
      chunk += string[i];
    }
  }
  if(chunk.length !== 0) {
    arr.push(chunk);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function divideByEl', () => {
  expect(divideByEl).to.be.a('function');
});

it("divideByEl('w12w34w56', 'w') should return ['w', '12w', '34w', '56']", () => {
  expect(divideByEl('w12w34w56', 'w')).to.eql(['w', '12w', '34w', '56']);
});

it("divideByEl('abcabcabc', 'b') should return ['ab', 'cab', 'cab', 'c']", () => {
  expect(divideByEl('abcabcabc', 'b')).to.eql(['ab', 'cab', 'cab', 'c']);
});

it("divideByEl('abc', '') should return ['abc']", () => {
  expect(divideByEl('abc', '')).to.eql(['abc']);
});

it("divideByEl('abc', 'a') should return ['a', 'bc']", () => {
  expect(divideByEl('abc', 'a')).to.eql(['a', 'bc']);
});

it("divideByEl('1w2w3w4w5', 'w') should return ['1w', '2w', '3w', '4w', '5']", () => {
  expect(divideByEl('1w2w3w4w5', 'w')).to.eql(['1w', '2w', '3w', '4w', '5']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
