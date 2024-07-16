// NAMEEN:
// NAMERU:Замена элемента во вложенном массиве с помощью метода lastIndexOf()

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `changeColor`, которая принимает  один параметр - массив.

Массив содержит в себе два вложенных массива с произвольным количеством строк.

Если во втором вложенном массиве есть строка `green`, то замените ее на `yellow`.

Если строк `green` во вложенном массиве больше одной, то заменится только последняя.

Для поиска строки `green` используйте метод `lastIndexOf()`.

Функция должна вернуть измененный массив.

Пример запуска функции:
```javascript
changeColor([['red', 'green', 'blue'], ['black', 'green', 'white']])
         // [['red', 'green', 'blue'], ['black', 'yellow', 'white']]
changeColor([['pink', 'green', 'red'], ['orange', 'green', 'blue', 'green']])
         // [['pink', 'green', 'red'], ['orange', 'green', 'blue', 'yellow']]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changeColor(arr){
  arr[1][arr[1].lastIndexOf('green')] = 'yellow';
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function changeColor', () => {
  expect(changeColor).to.be.a('function');
});

it('changeColor([["red", "green", "blue"], ["black", "green", "white"]]) should return [["red", "green", "blue"], ["black", "yellow", "white"]]', () => {
    expect(changeColor([['red', 'green', 'blue'], ['black', 'green', 'white']])).to.deep.equal([['red', 'green', 'blue'], ['black', 'yellow', 'white']]);
});

it('changeColor([["pink", "green", "red"], ["orange", "green", "blue", "green"]]) should return [["pink", "green", "red"], ["orange", "green", "blue", "yellow"]]', () => {
    expect(changeColor([['pink', 'green', 'red'], ['orange', 'green', 'blue', 'green']])).to.deep.equal([['pink', 'green', 'red'], ['orange', 'green', 'blue', 'yellow']]);
});

it('changeColor([["red", "blue"], ["orange", "black", "green", "white"]]) should return [["red", "blue"], ["orange", "black", "yellow", "white"]]', () => {
    expect(changeColor([['red', 'blue'], ['orange', 'black', 'green', 'white']])).to.deep.equal([['red', 'blue'], ['orange', 'black', 'yellow', 'white']]);
});

it('changeColor([["red"], ["green"]]) should return [["red"], ["yellow"]]', () => {
    expect(changeColor([['red'], ['green']])).to.deep.equal([['red'], ['yellow']]);
});

it('changeColor([["blue"], ["green", "green", "green", "green"]]) should return [["blue"], ["green", "green", "green", "yellow"]]', () => {
    expect(changeColor([['blue'], ['green', 'green', 'green', 'green']])).to.deep.equal([['blue'], ['green', 'green', 'green', 'yellow']]);
});

it('changeColor([["red", "green", "blue", "orange"], ["green", "orange", "white"]]) should return [["red", "green", "blue", "orange"], ["yellow", "orange", "white"]]', () => {
    expect(changeColor([['red', 'green', 'blue', 'orange'], ['green', 'orange', 'white']])).to.deep.equal([['red', 'green', 'blue', 'orange'], ['yellow', 'orange', 'white']]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
