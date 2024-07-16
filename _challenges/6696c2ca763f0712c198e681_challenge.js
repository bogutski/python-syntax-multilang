// NAMEEN:
// NAMERU:Результаты голосования с четырех участков

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Есть четыре избирательных участка и пять кандидатов.

Необходимо написать функцию `getVotingResults`.

Функция принимает на вход четыре объекта.

Каждый объект содержит информацию о голосах за каждого кандидата с одного избирательного участка.

Каждый объект имеет следующую структуру:
* `candidate1` – количество голосов за первого кандидата, число
* `candidate2` – количество голосов за второго кандидата, число
* `candidate3` – количество голосов за третьего кандидата, число
* `candidate4` – количество голосов за четвертого кандидата, число
* `candidate5` – количество голосов за пятого кандидата, число

Функция должна вернуть строку вида: `candidate3 Wins! 150 votes`.

Пример запуска функции:
```javascript
const votingResults1 = { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 };
const votingResults2 = { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 };
const votingResults3 = { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 };
const votingResults4 = { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 };
getVotingResults(votingResults1, votingResults2, votingResults3, votingResults4);
// candidate5 Wins! 200 votes
```

В функцию всегда будут передаваться данные, в которых только один кандидат набрал больше всех голосов.

Не будет ситуации, когда два или более кандидатов набрали одинаковое количество голосов.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART

//
function getVotingResults(
  votingResults1,
  votingResults2,
  votingResults3,
  votingResults4,
) {
  const candidates = {
    candidate1:
      votingResults1.candidate1 +
      votingResults2.candidate1 +
      votingResults3.candidate1 +
      votingResults4.candidate1,
    candidate2:
      votingResults1.candidate2 +
      votingResults2.candidate2 +
      votingResults3.candidate2 +
      votingResults4.candidate2,
    candidate3:
      votingResults1.candidate3 +
      votingResults2.candidate3 +
      votingResults3.candidate3 +
      votingResults4.candidate3,
    candidate4:
      votingResults1.candidate4 +
      votingResults2.candidate4 +
      votingResults3.candidate4 +
      votingResults4.candidate4,
    candidate5:
      votingResults1.candidate5 +
      votingResults2.candidate5 +
      votingResults3.candidate5 +
      votingResults4.candidate5,
  };

  if (
    candidates.candidate1 > candidates.candidate2 &&
    candidates.candidate1 > candidates.candidate3 &&
    candidates.candidate1 > candidates.candidate4 &&
    candidates.candidate1 > candidates.candidate5
  ) {
    return `candidate1 Wins! ${candidates.candidate1} votes`;
  } else if (
    candidates.candidate2 > candidates.candidate1 &&
    candidates.candidate2 > candidates.candidate3 &&
    candidates.candidate2 > candidates.candidate4 &&
    candidates.candidate2 > candidates.candidate5
  ) {
    return `candidate2 Wins! ${candidates.candidate2} votes`;
  } else if (
    candidates.candidate3 > candidates.candidate1 &&
    candidates.candidate3 > candidates.candidate2 &&
    candidates.candidate3 > candidates.candidate4 &&
    candidates.candidate3 > candidates.candidate5
  ) {
    return `candidate3 Wins! ${candidates.candidate3} votes`;
  } else if (
    candidates.candidate4 > candidates.candidate1 &&
    candidates.candidate4 > candidates.candidate2 &&
    candidates.candidate4 > candidates.candidate3 &&
    candidates.candidate4 > candidates.candidate5
  ) {
    return `candidate4 Wins! ${candidates.candidate4} votes`;
  } else if (
    candidates.candidate5 > candidates.candidate1 &&
    candidates.candidate5 > candidates.candidate2 &&
    candidates.candidate5 > candidates.candidate3 &&
    candidates.candidate5 > candidates.candidate4
  ) {
    return `candidate5 Wins! ${candidates.candidate5} votes`;
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function getVotingResults', () => {
  expect(getVotingResults).to.be.a('function');
});

it('getVotingResults({ candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }, { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }, { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }, { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 }) should return candidate5 Wins! 200 votes', () => {
  expect(
    getVotingResults(
      { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 },
      { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 },
      { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 },
      { candidate1: 10, candidate2: 20, candidate3: 30, candidate4: 40, candidate5: 50 },
    ),
  ).to.be.equal('candidate5 Wins! 200 votes');
});

// candidate 1 wins
it('getVotingResults({ candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 }, { candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 }, { candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 }, { candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 }) should return candidate1 Wins! 40 votes', () => {
  expect(
    getVotingResults(
      { candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 },
      { candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 },
      { candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 },
      { candidate1: 10, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 5 },
    ),
  ).to.be.equal('candidate1 Wins! 40 votes');
});

// candidate 2 wins
it('getVotingResults({ candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 }, { candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 }, { candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 }, { candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 }) should return candidate2 Wins! 80 votes', () => {
  expect(
    getVotingResults(
      { candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 },
      { candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 },
      { candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 },
      { candidate1: 1, candidate2: 20, candidate3: 3, candidate4: 4, candidate5: 5 },
    ),
  ).to.be.equal('candidate2 Wins! 80 votes');
});

// candidate 3 wins
it('getVotingResults({ candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 }, { candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 }, { candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 }, { candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 }) should return candidate3 Wins! 120 votes', () => {
  expect(
    getVotingResults(
      { candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 },
      { candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 },
      { candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 },
      { candidate1: 1, candidate2: 2, candidate3: 30, candidate4: 4, candidate5: 5 },
    ),
  ).to.be.equal('candidate3 Wins! 120 votes');
});

// candidate 4 wins
it('getVotingResults({ candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 }, { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 }, { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 }, { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 }) should return candidate4 Wins! 160 votes', () => {
  expect(
    getVotingResults(
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 },
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 },
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 },
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 40, candidate5: 5 },
    ),
  ).to.be.equal('candidate4 Wins! 160 votes');
});

// candidate 5 wins
it('getVotingResults({ candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 }, { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 }, { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 }, { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 }) should return candidate5 Wins! 200 votes', () => {
  expect(
    getVotingResults(
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 },
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 },
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 },
      { candidate1: 1, candidate2: 2, candidate3: 3, candidate4: 4, candidate5: 50 },
    ),
  ).to.be.equal('candidate5 Wins! 200 votes');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
