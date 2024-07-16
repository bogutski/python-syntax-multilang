// NAMEEN:
// NAMERU:Сохранить повторяющиеся буквы в объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `copyDuplicate`, которая принимает строку и возвращает объект с повторяющимися буквами из `str`.

В объекте ключом является буква, которая повторяется, а его свойство - это количество дубликатов этой буквы,
 повторяющихся в строке.

Все слова написаны в нижнем регистре.

Между словами есть лишь один пробел.


Пример запуска функции:
```javascript
copyDuplicate('hello world'); // { l: 2, o: 1 }
copyDuplicate('a leg up'); // {}
copyDuplicate('talk the talk'); // { t: 2, a: 1, l: 1, k: 1 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function copyDuplicate(str) {
  let obj = {};
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) === -1 || str[i] === ' ') {
      newStr += str[i];
    } else {
      if(obj.hasOwnProperty(str[i])){
        obj[str[i]] += 1;
      } else obj[str[i]] = 1;
    }
  }
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function copyDuplicate', () => {
  expect(copyDuplicate).to.be.a('function');
});

it("copyDuplicate('hello world') should return { l: 2, o: 1 }", () => {
  expect(copyDuplicate('hello world')).to.eql({ l: 2, o: 1 });
});

it("copyDuplicate('a leg up') should return {}", () => {
  expect(copyDuplicate('a leg up')).to.eql({});
});

it("copyDuplicate('what am i, chopped liver?') should return { a: 1, h: 1, p: 1, i: 1, e: 1 }", () => {
  expect(copyDuplicate('what am i, chopped liver?')).to.eql({ a: 1, h: 1, p: 1, i: 1, e: 1 });
});

it("copyDuplicate('a busy bee') should return { b: 1, e: 1 }", () => {
  expect(copyDuplicate('a busy bee')).to.eql({ b: 1, e: 1 });
});

it("copyDuplicate('talk the talk') should return { t: 2, a: 1, l: 1, k: 1 }", () => {
  expect(copyDuplicate('talk the talk')).to.eql({ t: 2, a: 1, l: 1, k: 1 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
