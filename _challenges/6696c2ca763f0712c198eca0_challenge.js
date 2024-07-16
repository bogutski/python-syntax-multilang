// NAMEEN:
// NAMERU:Какая строка содержит больше гласных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `whatWin` принимает 2 параметра - строки

Строки могут содержать слова, состоящие только из строчных букв и пробелов

Необходимо определить какая из строк содержит больше гласных букв (a, e, i, o, u)

Функция должна вернуть строку:
* "First word wins!" если первая строка содержит больше гласных
* "Second word wins!" если вторая строка содержит больше гласных
* "It's a draw!" если количество гласных в обеих строках одинаково

Пример запуска функции:
```javascript
whatWin("a", "b") // "First word wins!"
whatWin("a", "a") // "It's a draw!"
whatWin("a", "aa") // "Second word wins!"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function whatWin(str1, str2) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u') {
      count1++;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === 'a' || str2[i] === 'e' || str2[i] === 'i' || str2[i] === 'o' || str2[i] === 'u') {
      count2++;
    }
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

it('whatWin("a", "b") returns "First word wins!"', () => {
  expect(whatWin("a", "b")).to.equal("First word wins!");
});

it('whatWin("a", "a") returns "It\'s a draw!"', () => {
  expect(whatWin("a", "a")).to.equal("It's a draw!");
});

it('whatWin("a", "aa") returns "Second word wins!"', () => {
  expect(whatWin("a", "aa")).to.equal("Second word wins!");
});

it('whatWin("apple", "apple pie") returns "Second word wins!"', () => {
  expect(whatWin("apple", "apple pie")).to.equal("Second word wins!");
});

it('whatWin("pumpkin pie", "wonderful fall") returns "It\'s a draw!"', () => {
  expect(whatWin("pumpkin pie", "wonderful fall")).to.equal("It's a draw!");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
