// NAMEEN:
// NAMERU:Камень, ножницы, бумага, ящерица, Спок


/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дан объект:
```javascript
const winner = {
  rock: {scissors: "", lizard: ""},
  paper: {rock: "", spock: ""},
  scissors: {paper: "", lizard: ""},
  lizard: {spock: "", paper: ""},
  spock: {scissors: "", rock: ""},
};
```

Объект содержит в себе алгоритм игры "Камень, ножницы, бумага, ящерица, Спок":
* `rock` побеждает `scissors` и `lizard`;
* `scissors` побеждает `paper` и `lizard`;
* `paper` побеждает `rock` и `spock`;
* `lizard` побеждает `spock` и `paper`;
* `spock` побеждает `scissors` и `rock`.

Допишите функцию `getWinner`, которая принимает два аргумента:
* `player1` - выбор первого игрока, может принимать значения `rock`, `paper`, `scissors`, `lizard` или `spock`, строка;
* `player2` - выбор второго игрока, может принимать значения `rock`, `paper`, `scissors`, `lizard` или `spock`, строка.

Функция должна возвращать строку с результатом игры:
* `Player 1 won` - если первый игрок победил;
* `Player 2 won` - если второй игрок победил;
* `Draw` - если ничья.

Условия:
* Необходимо решить без использования операторов `&&` и `||`.

Алгоритм решения:
* Обратитесь к свойству объекта `winner` с именем, равным значению аргумента `player1` или `player2`;
* Проверьте, есть ли в этом вложенном объекте свойство с именем, равным значению аргумента `player2` или `player1`;
* Верните результат, если свойство есть.

Пример запуска функции:
```javascript
getWinner("rock", "lizard"); // "Player 1 won"
getWinner("spock", "paper"); // "Player 2 won"
getWinner("scissors", "scissors"); // "Draw"
```
INSTRUCTIONRUEND
*/
/*
INITIALSOLUTIONSTART
const winner = {
  rock: {scissors: "", lizard: ""},
  paper: {rock: "", spock: ""},
  scissors: {paper: "", lizard: ""},
  lizard: {spock: "", paper: ""},
  spock: {scissors: "", rock: ""},
};

fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const winner = {
  rock: {scissors: "", lizard: ""},
  paper: {rock: "", spock: ""},
  scissors: {paper: "", lizard: ""},
  lizard: {spock: "", paper: ""},
  spock: {scissors: "", rock: ""},
};

function getWinner(player1, player2) {
  if (winner[player1].hasOwnProperty(player2)) {
    return "Player 1 won";
  } else if (winner[player2].hasOwnProperty(player1)) {
    return "Player 2 won";
  } else {
    return "Draw";
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it("Created function `getWinner`", () => {
  expect(getWinner).to.be.a("function");
});

it('getWinner("rock", "paper")  // "Player 2 won"', () => {
  expect(getWinner("rock", "paper")).to.be.equal("Player 2 won");
});

it('getWinner("rock", "scissors")  // "Player 1 won"', () => {
  expect(getWinner("rock", "scissors")).to.be.equal("Player 1 won");
});

it('getWinner("rock", "lizard")  // "Player 1 won"', () => {
  expect(getWinner("rock", "lizard")).to.be.equal("Player 1 won");
});

it('getWinner("rock", "spock")  // "Player 2 won"', () => {
  expect(getWinner("rock", "spock")).to.be.equal("Player 2 won");
});

it('getWinner("paper", "rock")  // "Player 1 won"', () => {
  expect(getWinner("paper", "rock")).to.be.equal("Player 1 won");
});

it('getWinner("paper", "scissors")  // "Player 2 won"', () => {
  expect(getWinner("paper", "scissors")).to.be.equal("Player 2 won");
});

it('getWinner("paper", "lizard")  // "Player 2 won"', () => {
  expect(getWinner("paper", "lizard")).to.be.equal("Player 2 won");
});

it('getWinner("paper", "spock")  // "Player 1 won"', () => {
  expect(getWinner("paper", "spock")).to.be.equal("Player 1 won");
});

it('getWinner("scissors", "rock")  // "Player 2 won"', () => {
  expect(getWinner("scissors", "rock")).to.be.equal("Player 2 won");
});

it('getWinner("scissors", "paper")  // "Player 1 won"', () => {
  expect(getWinner("scissors", "paper")).to.be.equal("Player 1 won");
});

it('getWinner("scissors", "lizard")  // "Player 1 won"', () => {
  expect(getWinner("scissors", "lizard")).to.be.equal("Player 1 won");
});

it('getWinner("scissors", "spock")  // "Player 2 won"', () => {
  expect(getWinner("scissors", "spock")).to.be.equal("Player 2 won");
});

it('getWinner("lizard", "rock")  // "Player 2 won"', () => {
  expect(getWinner("lizard", "rock")).to.be.equal("Player 2 won");
});

it('getWinner("lizard", "paper")  // "Player 1 won"', () => {
  expect(getWinner("lizard", "paper")).to.be.equal("Player 1 won");
});

it('getWinner("lizard", "scissors")  // "Player 2 won"', () => {
  expect(getWinner("lizard", "scissors")).to.be.equal("Player 2 won");
});

it('getWinner("lizard", "spock")  // "Player 1 won"', () => {
  expect(getWinner("lizard", "spock")).to.be.equal("Player 1 won");
});

it('getWinner("spock", "rock")  // "Player 1 won"', () => {
  expect(getWinner("spock", "rock")).to.be.equal("Player 1 won");
});

it('getWinner("spock", "paper")  // "Player 2 won"', () => {
  expect(getWinner("spock", "paper")).to.be.equal("Player 2 won");
});

it('getWinner("spock", "scissors")  // "Player 1 won"', () => {
  expect(getWinner("spock", "scissors")).to.be.equal("Player 1 won");
});

it('getWinner("spock", "lizard")  // "Player 2 won"', () => {
  expect(getWinner("spock", "lizard")).to.be.equal("Player 2 won");
});

it('getWinner("rock", "rock")  // "Draw"', () => {
  expect(getWinner("rock", "rock")).to.be.equal("Draw");
});

it('getWinner("paper", "paper")  // "Draw"', () => {
  expect(getWinner("paper", "paper")).to.be.equal("Draw");
});

it('getWinner("scissors", "scissors")  // "Draw"', () => {
  expect(getWinner("scissors", "scissors")).to.be.equal("Draw");
});

it('getWinner("lizard", "lizard")  // "Draw"', () => {
  expect(getWinner("lizard", "lizard")).to.be.equal("Draw");
});

it('getWinner("spock", "spock")  // "Draw"', () => {
  expect(getWinner("spock", "spock")).to.be.equal("Draw");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
