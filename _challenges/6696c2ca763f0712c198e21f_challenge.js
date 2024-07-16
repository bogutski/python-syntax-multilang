// NAMEEN:
// NAMERU:Приходите позже

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Есть привычки откладывать дела и встречи на потом.

Напиши функцию `meetingProposal`, которая принимает один аргумент `date` - дату встречи.

Если `date` равна 'today', то функция должна вернуть строку 'Let's meet tomorrow'.

Если `date` равна 'tomorrow', то функция должна вернуть строку 'Let's meet after tomorrow'.

Если `date` равна 'after tomorrow', то функция должна вернуть строку 'Let's meet after after tomorrow'.

Если `date` не равна 'today', 'tomorrow' или 'after tomorrow', то функция должна вернуть строку 'Let's meet next week'.


Похожий пример сравнения:
```javascript
function compare(x) {
  if (x === 10) {
    return 11
  } else if (x === 11) {
    return 12
  } else {
    return 13
  }
}
```

Наверное вы думаете как вывести апостроф (одиночную кавычку) в строке? Вот так:

```javascript
console.log('Let\'s meet tomorrow');
```

Используете обратный слеш `\` перед апострофом `'` и он не будет считаться концом строки.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function meetingProposal(date) {
  if (date === 'today') {
    return 'Let\'s meet tomorrow';
  } else if (date === 'tomorrow') {
    return 'Let\'s meet after tomorrow';
  } else if (date === 'after tomorrow') {
    return 'Let\'s meet after after tomorrow';
  } else {
    return 'Let\'s meet next week';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function meetingProposal', () => {
  expect(meetingProposal).to.be.a('function');
});

it('Function returns correct result for argument "today"', () => {
  expect(meetingProposal('today')).eq('Let\'s meet tomorrow');
});

it('Function returns correct result for argument "tomorrow"', () => {
  expect(meetingProposal('tomorrow')).eq('Let\'s meet after tomorrow');
});

it('Function returns correct result for argument "after tomorrow"', () => {
  expect(meetingProposal('after tomorrow')).eq('Let\'s meet after after tomorrow');
});

it('Function returns correct result for argument "now"', () => {
  expect(meetingProposal('now')).eq('Let\'s meet next week');
});

it('Function returns correct result for argument "sometimes"', () => {
  expect(meetingProposal('sometimes')).eq('Let\'s meet next week');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
