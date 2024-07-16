// NAMEEN:
// NAMERU:Где больше гласных?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `whatWin` принимает 2 строки.

Строки не содержат заглавных букв.

Необходимо определить, какая из строк содержит больше гласных букв (a, e, i, o, u) и вернуть результат в виде строки:
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
  const letters = 'aeiou'
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < str1.length; i++) {
    if (letters.includes(str1[i])) {
      count1++;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (letters.includes(str2[i])) {
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
