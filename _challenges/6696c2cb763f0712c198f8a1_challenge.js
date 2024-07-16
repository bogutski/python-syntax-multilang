// NAMEEN:
// NAMERU:Найти индекс последнего элемента с определенной длиной буквенной строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByFormattedLength`, которая принимает массив строк и число.

Функция должна вернуть индекс последнего элемента в массиве, который после удаления всех символов, кроме букв, имеет заданную длину.

Если такого элемента нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexByFormattedLength(["123heLlo!", "woRl@d!", "eXi_t@code"], 5); // 1
findLastIndexByFormattedLength(["123Go!", "Hello!World", "Java$Script!"], 5); // -1
findLastIndexByFormattedLength(['a123 ppl(e', '.b,l?ueberr!y', 'p%ine#app@le+', '+o_ran45ge/*'], 5); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexByFormattedLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexByFormattedLength(arr, length) {
  const strFormat = str => str.replace(/[^a-zA-Z]/g, '');
  return arr.findLastIndex(el => strFormat(el).length === length);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByFormattedLength', () => {
  expect(findLastIndexByFormattedLength).to.be.a('function');
});

it('findLastIndexByFormattedLength(["a123 ppl(e", ".b,l?ueberr!y", "p%ine#app@le+", "+o_ran45ge/*"], 5) should return 0', function() {
  expect(findLastIndexByFormattedLength(["a123 ppl(e", ".b,l?ueberr!y", "p%ine#app@le+", "+o_ran45ge/*"], 5)).to.equal(0);
});

it('findLastIndexByFormattedLength(["123heLlo!", "woRl@d!", "eXi_t@code"], 5) should return 1', function() {
  expect(findLastIndexByFormattedLength(["123heLlo!", "woRl@d!", "eXi_t@code"], 5)).to.equal(1);
});

it('findLastIndexByFormattedLength(["my#str!ng", "wi_th@_spEci^al", "cha$ra%c^ters"], 8) should return -1', function() {
  expect(findLastIndexByFormattedLength(["my#str!ng", "wi_th@_spEci^al", "cha$ra%c^ters"], 8)).to.equal(-1);
});

it('findLastIndexByFormattedLength(["no@pe#cia!l", "ch_ar$a^ct%ers", "here"], 4) should return 2', function() {
  expect(findLastIndexByFormattedLength(["no@pe#cia!l", "ch_ar$a^ct%ers", "here"], 4)).to.equal(2);
});

it('findLastIndexByFormattedLength(["123Go!", "Hello!World", "Java$Script!"], 10) should return 2', function() {
  expect(findLastIndexByFormattedLength(["123Go!", "Hello!World", "Java$Script!"], 10)).to.equal(2);
});

it('findLastIndexByFormattedLength(["ap@ple", "ban#ana!", "cherr_y"], 6) should return 2', function() {
  expect(findLastIndexByFormattedLength(["ap@ple", "ban#ana!", "cherr_y"], 6)).to.equal(2);
});

it('findLastIndexByFormattedLength(["a#1p2p3l4e", "b5a6n7a8n9a", "c_h_e_r_r_y"], 5) should return 0', function() {
  expect(findLastIndexByFormattedLength(["a#1p2p3l4e", "b5a6n7a8n9a", "c_h_e_r_r_y"], 5)).to.equal(0);
});

it('findLastIndexByFormattedLength(["p!ine@ap#ple", "blueb@e!rry", "orange"], 6) should return 2', function() {
  expect(findLastIndexByFormattedLength(["p!ine@ap#ple", "blueb@e!rry", "orange"], 6)).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
