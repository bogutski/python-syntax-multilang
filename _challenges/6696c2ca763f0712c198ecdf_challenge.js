// NAMEEN:
// NAMERU:Количество строчных и заглавных букв, не считая остальных символов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numOfLowerAndUpperCase`, которая принимает строку и возвращает массив.

Массив должен содержать два элемента, где первый элемент - количество строчных букв, а второй - количество прописных букв.

В строке могут быть любые символы.

Если в строке нет строчных или прописных букв, то в массиве должен быть 0 на соответствующем месте.


Примеры запуска функции:
```javascript
numOfLowerAndUpperCase('aBc De Fg!H') // [4, 4]
numOfLowerAndUpperCase(' J@a1#v4%a ') // [3, 1]
numOfLowerAndUpperCase('apple')       // [5, 0]
numOfLowerAndUpperCase('PASV')        // [0, 4]
numOfLowerAndUpperCase('')            // [0, 0]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numOfLowerAndUpperCase(str){
  let lowerCase = 0;
  let upperCase = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) continue;
    else {
      if (str[i] === str[i].toLowerCase()) lowerCase++;
      if (str[i] === str[i].toUpperCase()) upperCase++;
    }
  }
  return [lowerCase, upperCase];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numOfLowerAndUpperCase', () => {
  expect(numOfLowerAndUpperCase).to.be.a('function');
});

it("numOfLowerAndUpperCase('aBc De Fg!H') returns [4, 4]", () => {
  expect(numOfLowerAndUpperCase('aBc De Fg!H')).to.eql([4, 4]);
});

it("numOfLowerAndUpperCase(' J@a#v%a S*c(r)_ip+t') returns [8, 2]", () => {
  expect(numOfLowerAndUpperCase(' J@a#v%a S*c(r)_ip+t')).to.eql([8, 2]);
});

it("numOfLowerAndUpperCase('programming') returns [11, 0]", () => {
  expect(numOfLowerAndUpperCase('programming')).to.eql([11, 0]);
});

it("numOfLowerAndUpperCase('SKY') returns [0, 3]", () => {
  expect(numOfLowerAndUpperCase('SKY')).to.eql([0, 3]);
});

it("numOfLowerAndUpperCase(' 1234567890/*-+!@#$%^&*()_)+ ') returns [0, 0]", () => {
  expect(numOfLowerAndUpperCase(' 1234567890/*-+!@#$%^&*()_)+ ')).to.eql([0, 0]);
});

it("numOfLowerAndUpperCase('') returns [0, 0]", () => {
  expect(numOfLowerAndUpperCase('')).to.eql([0, 0]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
