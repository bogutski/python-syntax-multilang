// NAMEEN:
// NAMERU:Массив имен

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В массиве имен некоторые имена написаны неправильно - начинаются со строчных букв вместо заглавных.
Некоторые имена записаны только заглавными буквами или смешанными строчными и заглавными буквами.

Напишите функцию `fixNames`, которая принимает массив имен и исправляет их.
Если в массиве встречаются пустые строки, они должны остаться пустыми.

Функция должна возвращать измененный массив, в котором все имена написаны строчными буквами и начинаются с заглавной буквы.


Примеры вызова функции:
```javascript
fixNames(['john', 'JACOB', 'aNN', 'schmidt']); // ['John', 'Jacob', 'Ann', 'Schmidt'];
fixNames(['', 'conNer', '']);                  // ['','Conner','']
fixNames([]);                                  // [];
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fixNames(names) {
  for (let i = 0; i < names.length; i += 1) {
    if (names[i] === '') continue;
    const name = names[i];
    let newName = name[0].toUpperCase();
    for (let j = 1; j < name.length; j += 1) {
      newName += name[j].toLowerCase();
    }
    names[i] = newName;
  }
  return names;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fixNames', () => {
  expect(fixNames).to.be.a('function');
});

it('fixNames(["john", "JACOB", "aNN", "schmidt"]) should return ["John", "Jacob", "Ann", "Schmidt"]', () => {
  expect(fixNames(['john', 'JACOB', 'aNN', 'schmidt'])).to.deep.equal(['John', 'Jacob', 'Ann', 'Schmidt']);
});

it('fixNames([]) should return []', () => {
  expect(fixNames([])).to.deep.equal([]);
});

it('fixNames(["emy", "aLiCe", "Linda", "anTHonY", "peteR","BETH", "bob"]) should return ["Emy", "Alice", "Linda", "Anthony", "Peter", "Beth", "Bob"]', () => {
  expect(fixNames(['emy', 'aLiCe', 'Linda', 'anTHonY', 'peteR', 'BETH', 'bob'])).to.deep.equal(['Emy', 'Alice', 'Linda', 'Anthony', 'Peter', 'Beth', 'Bob']);
});

it('fixNames([""]) should return [""]', () => {
  expect(fixNames([''])).to.deep.equal(['']);
});

it('fixNames(["PAM", "conner"]) should return ["Pam", "Conner"]', () => {
  expect(fixNames(['PAM', 'conner'])).to.deep.equal(['Pam', 'Conner']);
});

it('fixNames(["paM", "conNER"]) should return ["Pam", "Conner"]', () => {
  expect(fixNames(['paM', 'conNER'])).to.deep.equal(['Pam', 'Conner']);
});

it('fixNames(["", "conNer", ""]) should return ["","Conner",""]', () => {
  expect(fixNames(['', 'conNer', ''])).to.deep.equal(['','Conner','']);
});

it('fixNames([ "eLizaBetH"]) should return ["Elizabeth"]', () => {
  expect(fixNames(['eLizaBetH'])).to.deep.equal(['Elizabeth']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
