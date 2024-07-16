// NAMEEN:
// NAMERU:Посчитать количество слов в скобках

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `insideBrackets`, которая принимает строку и возвращает количество слов внутри скобок.

Закрывающая скобка не может находиться перед открывающейся.

В скобках всегда будет находиться `минимум одно слово`.

Алгоритм решения:

* С помощью метода `indexOf` найти первую скобку и записать ее в переменную `firstBracket`.

* С помощью метода `indexOf` найти вторую скобку и записать ее в переменную `secondBracket`.

* Запустить цикл, который начинает проверку с индекса `firstBracket` и заканчивается на индексе `secondBracket`.

Пример запуска функции:
```javascript
insideBrackets('one (two) three') // 1
insideBrackets('(everything is fine)') // 3
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function insideBrackets(str){
  let count = 1;
  const firstBracket = str.indexOf('(');
  const secondBracket = str.indexOf(')');
  for (let i = firstBracket+1; i < secondBracket-1; i++){
    if(str[i] === ' ' && str[i+1] !== ' ')count++;
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('countSymbols is a function', () => {
  expect(insideBrackets).to.be.a('function');
})
it("insideBrackets('one (two) three') should return 1", () =>{
  expect(insideBrackets('one (two) three')).equal(1);
});
it("insideBrackets('hi (hi bob) bob') should return 2", () =>{
  expect(insideBrackets('hi (hi bob) bob')).equal(2);
});
it("insideBrackets('(everything is fine )') should return 3", () =>{
  expect(insideBrackets('(everything is fine)')).equal(3);
});
it("insideBrackets('(one)') should return 1", () =>{
  expect(insideBrackets('(one)')).equal(1);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
