// NAMEEN:
// NAMERU:Количество букв в нижнем регистре

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numOfLowerCase`, которая принимает строку и возвращает количество символов в нижнем регистре.

Строка будет содержать только буквы, без пробелов, цифр и специальных символов.

Если строка не содержит символов в нижнем регистре или пустая, функция должна вернуть 0.

Примеры запуска функции:
```javascript
numOfLowerCase('hello') // 5
numOfLowerCase('CAR')   // 0
numOfLowerCase('')      // 0
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numOfLowerCase(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()){
            count++;
        }
    }
    return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numOfLowerCase', () => {
  expect(numOfLowerCase).to.be.a('function');
});

it("numOfLowerCase('hello') returns 5", () => {
  expect(numOfLowerCase('hello')).to.equal(5);
});

it("numOfLowerCase('JavaScript') returns 8", () => {
  expect(numOfLowerCase('JavaScript')).to.equal(8);
});

it("numOfLowerCase('APPLE') returns 0", () => {
  expect(numOfLowerCase('APPLE')).to.equal(0);
});

it("numOfLowerCase('AaBbCc') returns 3", () => {
  expect(numOfLowerCase('AaBbCc')).to.equal(3);
});

it("numOfLowerCase('') returns 0", () => {
  expect(numOfLowerCase('')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
