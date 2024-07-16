// NAMEEN:
// NAMERU:Извлечение, модификация и сортировка элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getSortedModifiedArray`, которая принимает массив строк и два числа.

Функция должна возвращать новый массив, содержащий строки, извлеченные между указанными индексами (включительно для начала и не включительно для конца).

Каждая строка должна быть модифицирована: удаляются все символы, кроме буквенных.

Затем полученные строки сортируются в обратном алфавитном порядке.


Примеры запуска функции:
```javascript
getSortedModifiedArray([' Ap@ /pL*e ', ' Ban #|$?anA ', '%  chEr Ry ', 'Da &()te  ', '  f_-=  +ig '], 1, 4);
// ['Date', 'chErRy', 'BananA']

getSortedModifiedArray([' Do@G ', ' c!a#t ', 'RAb%^bIt', ' HamS*&TER'], 0, 3);
// ['RAbbIt', 'DoG', 'cat']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getSortedModifiedArray(arr, start, end) {
  return arr.slice(start, end)
      .map(str => str.replace(/[^A-Za-z]/g, ''))
      .sort((a, b) => b.localeCompare(a));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getSortedModifiedArray', () => {
  expect(getSortedModifiedArray).to.be.a('function');
});

it('getSortedModifiedArray([" Ap@ pL*/e ", " Ban #|$?anA ", "%  chEr Ry ", "Da &()te  ", "  f_-=  +ig "], 1, 4) should return ["Date", "chErRy", "BananA"]', function() {
  expect(getSortedModifiedArray([" Ap@ pL*/e ", " Ban #|$?anA ", "%  chEr Ry ", "Da &()te  ", "  f_-=  +ig "], 1, 4)).to.deep.equal(["Date", "chErRy", "BananA"]);
});

it('getSortedModifiedArray([" Do@G ", " c!a#t ", "RAb%^bIt", " HamS*&TER"], 0, 3) should return ["RAbbIt", "DoG", "cat"]', function() {
  expect(getSortedModifiedArray([" Do@G ", " c!a#t ", "RAb%^bIt", " HamS*&TER"], 0, 3)).to.deep.equal(["RAbbIt", "DoG", "cat"]);
});

it('getSortedModifiedArray([" sun ", "  MOON  ", " s#tars", " GA&LAXY  "], 0, 4) should return ["sun", "stars", "MOON", "GALAXY"]', function() {
  expect(getSortedModifiedArray([" sun ", "  MOON  ", " s#tars", " GA&LAXY  "], 0, 4)).to.deep.equal(["sun", "stars", "MOON", "GALAXY"]);
});

it('getSortedModifiedArray(["b!lue ", "  GREE&N", " R%e^d", "y&el*LOW"], 1, 4) should return ["yelLOW", "Red", "GREEN"]', function() {
  expect(getSortedModifiedArray(["b!lue ", "  GREE&N", " R%e^d", "y&el*LOW"], 1, 4)).to.deep.equal(["yelLOW", "Red", "GREEN"]);
});

it('getSortedModifiedArray([" o$ne", " t%wo ", "th&ree  ", " f@our "], 2, 4) should return ["three", "four"]', function() {
  expect(getSortedModifiedArray([" o$ne", " t%wo ", "th&ree  ", " f@our "], 2, 4)).to.deep.equal(["three", "four"]);
});

it('getSortedModifiedArray([" a%", " B @", " c*", " D #"], 0, 2) should return ["B", "a"]', function() {
  expect(getSortedModifiedArray([" a%", " B @", " c*", " D #"], 0, 2)).to.deep.equal(["B", "a"]);
});

it('getSortedModifiedArray([" A%B", " C* D ", " E!F", "G&H "], 1, 4) should return ["GH", "EF", "CD"]', function() {
  expect(getSortedModifiedArray([" A%B", " C* D ", " E!F", "G&H "], 1, 4)).to.deep.equal(["GH", "EF", "CD"]);
});

it('getSortedModifiedArray([" I#J ", " k! L", " m% n", " o@ P "], 0, 3) should return ["mn", "kL", "IJ"]', function() {
  expect(getSortedModifiedArray([" I#J ", " k! L", " m% n", " o@ P "], 0, 3)).to.deep.equal(["mn", "kL", "IJ"]);
});

it('getSortedModifiedArray(["123 ABC", "DE&*FG", "HI  JKL", "M NO P"], 1, 4) should return ["MNOP", "HIJKL", "DEFG"]', function() {
  expect(getSortedModifiedArray(["123 ABC", "DE&*FG", "HI  JKL", "M NO P"], 1, 4)).to.deep.equal(["MNOP", "HIJKL", "DEFG"]);
});

it('getSortedModifiedArray([" w2o3rLd", " $pLa@NeT ", "sTa^R", " sUn"], 1, 4) should return ["sUn", "sTaR", "pLaNeT"]', function() {
  expect(getSortedModifiedArray([" w2o3rLd", " $pLa@NeT ", "sTa^R", " sUn"], 1, 4)).to.deep.equal(["sUn", "sTaR", "pLaNeT"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
