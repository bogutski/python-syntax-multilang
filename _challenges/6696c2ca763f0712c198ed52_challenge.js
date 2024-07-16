// NAMEEN:
// NAMERU: Посчитать количество слов за скобками

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `outsideBrackets`, которая принимает строку и возвращает количество слов за скобками.

После каждого слова есть один пробел.

Закрывающая скобка не может находиться перед открывающейся.

Пара скобок всегда присутствует в строке.

Алгоритм решения:

* С помощью метода `indexOf` найти первую скобку и записать ее в переменную `firstBracket`.

* С помощью метода `indexOf` найти вторую скобку и записать ее в переменную `secondBracket`.

* Запустить первый цикл, который начинает проверку с 0 и заканчивается на индексе`firstBracket` считая слова.

* Запустить второй цикл, который начинает проверку с `secondBracket` и заканчивается последним индексом строки.

Пример запуска функции:

```javascript
outsideBrackets('one (two) three') // 2
outsideBrackets('everything () is fine') // 3
outsideBrackets('()') // 0
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function outsideBrackets(str){
  let count = 0;
  str = ' ' + str;
  const firstBracket = str.indexOf('(');
  const secondBracket = str.indexOf(')');
  for (let i = 0; i < firstBracket-1; i++){
    if(str[i] === ' ' && str[i+1] !== ' ')count++;
  }
  for (let i = secondBracket; i < str.length; i++){
    if(str[i] === ' ' && str[i+1] !== ' ')count++;
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('outsideBrackets is a function', () => {
  expect(outsideBrackets).to.be.a('function');
})
it("outsideBrackets('one (two) three') should return 2", () =>{
  expect(outsideBrackets('one (two) three')).equal(2);
});
it("outsideBrackets('everything () is fine') should return 3", () =>{
  expect(outsideBrackets('everything () is fine')).equal(3);
});
it("outsideBrackets('()') should return 3", () =>{
  expect(outsideBrackets('()')).equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
