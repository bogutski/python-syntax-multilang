// NAMEEN:
// NAMERU:Камень, ножницы, бумага


/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дан объект:
```javascript
const winner = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
```

Объект содержит в себе алгоритм игры "Камень, ножницы, бумага":
* `rock` побеждает `scissors`;
* `scissors` побеждает `paper`;
* `paper` побеждает `rock`.

Допишите функцию `getWinner`, которая принимает два аргумента:
* `player1` - выбор первого игрока, может принимать значения `rock`, `paper` или `scissors`, строка;
* `player2` - выбор второго игрока, может принимать значения `rock`, `paper` или `scissors`, строка;

Функция должна возвращать строку с результатом игры:
* `Player 1 won` - если первый игрок победил;
* `Player 2 won` - если второй игрок победил;
* `Draw` - если ничья.

Условия:
* Необходимо решить без использования операторов `&&` и `||`.

Пример запуска функции:
```javascript
getWinner("rock", "scissors"); // "Player 1 won"
getWinner("paper", "scissors"); // "Player 2 won"
getWinner("paper", "paper"); // "Draw"
```
INSTRUCTIONRUEND
*/
/*
INITIALSOLUTIONSTART
const winner = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const winner = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getWinner(player1, player2) {
  if (winner[player1] === player2) {
    return "Player 1 won";
  } else if (winner[player2] === player1) {
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

it('getWinner("rock", "scissors")  // "Player 1 won"', () => {
  expect(getWinner("rock", "scissors")).eq("Player 1 won");
});

it('getWinner("scissors", "paper")  // "Player 1 won"', () => {
  expect(getWinner("scissors", "paper")).eq("Player 1 won");
});

it('getWinner("paper", "rock")  // "Player 1 won"', () => {
  expect(getWinner("paper", "rock")).eq("Player 1 won");
});

it('getWinner("rock", "paper")  // "Player 2 won"', () => {
  expect(getWinner("rock", "paper")).eq("Player 2 won");
});

it('getWinner("scissors", "rock")  // "Player 2 won"', () => {
  expect(getWinner("scissors", "rock")).eq("Player 2 won");
});

it('getWinner("paper", "scissors")  // "Player 2 won"', () => {
  expect(getWinner("paper", "scissors")).eq("Player 2 won");
});

it('getWinner("rock", "rock")  // "Draw"', () => {
  expect(getWinner("rock", "rock")).eq("Draw");
});

it('getWinner("scissors", "scissors")  // "Draw"', () => {
  expect(getWinner("scissors", "scissors")).eq("Draw");
});

it('getWinner("paper", "paper")  // "Draw"', () => {
  expect(getWinner("paper", "paper")).eq("Draw");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
