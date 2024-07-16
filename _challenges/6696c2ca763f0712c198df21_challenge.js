// NAMEEN:
// NAMERU:Функция `attentionToDetail` выводит в консоль 3 строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Очень хорошо, что вы исправили ошибки в функции `greeting`. Продолжаем.

Теперь надо написать новую функцию `attentionToDetail`, которая выводит в консоль 3 строки:

```javascript
P=======================A
-= Attention to detail =-
S=======================V
```

* Используйте 3 раза console.log
* Каждый console.log пишите с новой строки
* Используйте одинарные кавычки.
* Делайте все очень внимательно.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function attentionToDetail() {
  console.log('P=======================A');
  console.log('-= Attention to detail =-');
  console.log('S=======================V');
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function attentionToDetail', () => {
  expect(attentionToDetail).to.be.a('function');
});

const entire = attentionToDetail.toString();
const body = entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}')).trim();
const strings = body.split('\n');

it('Functions contains console.log for first string', () => {
  expect(body).contains('console.log(\'P=======================A\')');
});

it('Functions contains console.log for second string', () => {
  expect(body).contains('console.log(\'-= Attention to detail =-\')');
});

it('Functions contains console.log for last string', () => {
  expect(body).contains('console.log(\'S=======================V\')');
});

// order of console.log is important
it('Functions contains console.log in correct order', () => {
  const indexOfFirst = body.indexOf('console.log(\'P=======================A\')');
  const indexOfSecond = body.indexOf('console.log(\'-= Attention to detail =-\')');
  const indexOfThird = body.indexOf('console.log(\'S=======================V\')');
  const arrCurrentOrder = [indexOfFirst, indexOfSecond, indexOfThird];
  const arrCorrectOrder = [...arrCurrentOrder].sort((a, b) => a - b);
  expect(arrCorrectOrder).eql(arrCurrentOrder);
});

it('Function contains 3 console logs', () => {
  const occurrences = body.split('console.log').length - 1;
  expect(occurrences).eq(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
