// NAMEEN:
// NAMERU:В какой строке больше заглавных букв?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `twoStringsBattle`, которая принимает две строки.

Функция должна посчитать сколько заглавных букв в первой и второй строке и вернуть строку вида:

* `${str1} has won with number of ${countStr1}` - если в первой строке больше заглавных букв
* `${str2} has won with number of ${countStr2}` - если во второй строке больше заглавных букв
* `Draw` - если количество заглавных букв в обеих строках равно или строки пустые

Перед циклом проверьте какая строка длиннее и используйте ее длину в цикле.


Примеры запуска функции:
```javascript
twoStringsBattle('AAA', 'Hello'); // 'AAA has won with number of 3'
twoStringsBattle('', 'aBc'); // 'aBc has won with number of 1'
twoStringsBattle('', ''); // 'Draw'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function twoStringsBattle(str1, str2){
  let countStr1 = 0;
  let countStr2 = 0;
  let length = str1.length > str2.length ? str1.length : str2.length;
  for(let i = 0; i < length; i++){
    if(str1[i] !== undefined && str1[i] === str1[i].toUpperCase()) countStr1++;
    if(str2[i] !== undefined && str2[i] === str2[i].toUpperCase()) countStr2++;
  }
  if(countStr1 > countStr2) return `${str1} has won with number of ${countStr1}`;
  if(countStr1 < countStr2) return `${str2} has won with number of ${countStr2}`;
  else return 'Draw';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function twoStringsBattle', () => {
  expect(twoStringsBattle).to.be.a('function');
});

it("twoStringsBattle('HellO', 'WorLD') returns 'WorLD has won with number of 3'", () => {
  expect(twoStringsBattle('HellO', 'WorLD')).to.be.equal('WorLD has won with number of 3');
});

it("twoStringsBattle('AAA', 'Hello') returns 'AAA has won with number of 3'", () => {
  expect(twoStringsBattle('AAA', 'Hello')).to.be.equal('AAA has won with number of 3');
});

it("twoStringsBattle('aBcfwfWAffeDeF', 'aBcDDeFEesdlkfJ') returns 'aBcDDeFEesdlkfJ has won with number of 6'", () => {
  expect(twoStringsBattle('aBcfwfWAffeDeF', 'aBcDDeFEesdlkfJ')).to.be.equal('aBcDDeFEesdlkfJ has won with number of 6');
});

it("twoStringsBattle('', 'abc') returns 'Draw'", () => {
  expect(twoStringsBattle('', 'abc')).to.be.equal('Draw');
});

it("twoStringsBattle('abc', '') returns 'Draw'", () => {
  expect(twoStringsBattle('abc', '')).to.be.equal('Draw');
});

it("twoStringsBattle('', '') returns 'Draw'", () => {
  expect(twoStringsBattle('', '')).to.be.equal('Draw');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
