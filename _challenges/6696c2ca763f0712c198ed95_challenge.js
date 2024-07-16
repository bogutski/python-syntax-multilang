// NAMEEN:
// NAMERU:Разделить строку и переместить дубликаты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `moveDuplicates`, которая принимает строку из различных символов.

Функция должна вернуть массив с двумя элементами:

* Первый элемент - новая строка, в которой элементы не повторяются.

* Второй элемент - строка, в которую будут добавлены все остальные элементы, если они уже есть в первой строке.

В строке могут быть как заглавные, так и строчные буквы. Перед проверкой приведите строку к нижнему регистру и
 используйте эту строку для добавления символов в новую строку.

Если строка пустая, то верните строку вида: `string is empty`.


Примеры запуска функции:
```javascript
moveDuplicates('')          // ['string is empty']
moveDuplicates('ABCabc')    // [ 'abc', 'abc' ]
moveDuplicates('AbCAaBbCc') // [ 'abc', 'aabbcc' ]
moveDuplicates('123123123') // [ '123', '123123' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function moveDuplicates(str){
  if(str.length === 0) return 'string is empty'
  let toLowerCase = str.toLowerCase();
  let newStr = '';
  let duplicates = '';
  for (let i = 0; i < str.length; i++) {
    if(newStr.includes(toLowerCase[i])) duplicates += toLowerCase[i]
    else newStr += toLowerCase[i]
    }
  return [newStr, duplicates];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function moveDuplicates', () => {
  expect(moveDuplicates).to.be.a('function');
});

it("moveDuplicates('AbCAaBbCc') should return ['abc', 'aabbcc']", () => {
  expect(moveDuplicates('AbCAaBbCc')).to.deep.equal(['abc', 'aabbcc']);
});

it("moveDuplicates('123123123') should return ['123', '123123']", () => {
  expect(moveDuplicates('123123123')).to.deep.equal(['123', '123123']);
});

it("moveDuplicates('AbCdEfGhIAjKlMcDGhnOpaQrjStBUvLoTYfdhmDlkejdWxYz') should return ['abcdefghijklmnopqrstuvywxz', 'acdghajblotfdhmdlkejdy']", () => {
  expect(moveDuplicates('AbCdEfGhIAjKlMcDGhnOpaQrjStBUvLoTYfdhmDlkejdWxYz')).to.deep.equal(['abcdefghijklmnopqrstuvywxz', 'acdghajblotfdhmdlkejdy']);
});

it("moveDuplicates('!@#$%^&*()_+!@#$%^&*()_+') should return ['!@#$%^&*()_+', '!@#$%^&*()_+']", () => {
  expect(moveDuplicates('!@#$%^&*()_+!@#$%^&*()_+')).to.deep.equal(['!@#$%^&*()_+', '!@#$%^&*()_+']);
});

it("moveDuplicates('') should return 'string is empty'", () => {
  expect(moveDuplicates('')).to.deep.equal('string is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
