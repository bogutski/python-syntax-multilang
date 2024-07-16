// NAMEEN:
// NAMERU:Какая строка содержит больше согласных?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `whatWin` принимает 2 параметра - строки.

Строки могут содержать слова, состоящие только из строчных букв и пробелов.

Необходимо определить какая из строк содержит больше согласных букв.

Функция должна вернуть строку:
* "First word wins!" если первая строка содержит больше согласных
* "Second word wins!" если вторая строка содержит больше согласных
* "It's a draw!" если количество согласных в обеих строках одинаково

Пример запуска функции:
```javascript
whatWin("b", "a") // "First word wins!"
whatWin("run", "late") // "It's a draw!"
whatWin("time", "is over") // "Second word wins!"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function whatWin(str1, str2) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u') {
      continue
    }
    count1++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === 'a' || str2[i] === 'e' || str2[i] === 'i' || str2[i] === 'o' || str2[i] === 'u') {
      continue
    }
    count2++;
  }
  if (count1 > count2) {
    return `First word wins!`;
  } else if (count1 < count2) {
    return `Second word wins!`;
  } else return `It's a draw!`;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function whatWin', () => {
  expect(whatWin).to.be.a('function');
});

it('whatWin("hello", "world") returns "Second word wins!"', () => {
  expect(whatWin("hello", "world")).to.equal("Second word wins!");
});

it('whatWin("abc", "aaa") returns "First word wins!"', () => {
  expect(whatWin("abc", "aaa")).to.equal("First word wins!");
});

it('whatWin("abe", "acd") returns "Second word wins!"', () => {
  expect(whatWin("abe", "acd")).to.equal("Second word wins!");
});

it('whatWin("apple", "lemon") returns "It\'s a draw!"', () => {
  expect(whatWin("apple", "lemon")).to.equal("It's a draw!");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
