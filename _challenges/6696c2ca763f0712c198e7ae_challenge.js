// NAMEEN:
// NAMERU:Изменение элемента в массиве с помощью метода indexOf()

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyFruits`, которая принимает один параметр - массив.

Массив содержит произвольное количество строк с названиями фруктов, среди которых есть только одна строка с `cucumber`.
Пример массива: `['apple', 'banana', 'cucumber', 'orange', 'melon']`

Функция должна вернуть массив, в котором `cucumber` будет изменён на `kiwi`.

Для нахождения элемента `cucumber` в массиве используйте метод `indexOf()`

Пример запуска функции:
```javascript
onlyFruits(['banana', 'cucumber', 'orange', 'melon']); // ['banana', 'kiwi', 'orange', 'melon']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyFruits(arr){
  arr[arr.indexOf('cucumber')] = 'kiwi';
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyFruits', () => {
  expect(onlyFruits).to.be.a('function');
});

it('onlyFruits(["banana", "cucumber", "orange", "melon"]) should return ["banana", "kiwi", "orange", "melon"]', () => {
    expect(onlyFruits(['banana', 'cucumber', 'orange', 'melon'])).to.eql(['banana', 'kiwi', 'orange', 'melon']);
});

it('onlyFruits(["cucumber", "orange", "melon"]) should return ["kiwi", "orange", "melon"]', () => {
    expect(onlyFruits(['cucumber', 'orange', 'melon'])).to.eql(['kiwi', 'orange', 'melon']);
});

it('onlyFruits(["banana", "orange", "apricot", "grapefruit", "mango", "cucumber"]) should return ["banana", "orange", "apricot", "grapefruit", "mango", "kiwi"]', () => {
    expect(onlyFruits(['banana', 'orange', 'apricot', 'grapefruit', 'mango', 'cucumber'])).to.eql(['banana', 'orange', 'apricot', 'grapefruit', 'mango', 'kiwi']);
});

it('onlyFruits(["cucumber", "mango"]) should return ["kiwi", "mango"]', () => {
    expect(onlyFruits(['cucumber', 'mango'])).to.eql(['kiwi', 'mango']);
});

it('onlyFruits(["cucumber"]) should return ["kiwi"]', () => {
    expect(onlyFruits(['cucumber'])).to.eql(['kiwi']);
});

it('onlyFruits(["orange", "apricot", "grapefruit", "cucumber", "mango", "plum", "pomegranate"]) should return ["orange", "apricot", "grapefruit", "kiwi", "mango", "plum", "pomegranate"]', () => {
    expect(onlyFruits(['orange', 'apricot', 'grapefruit', 'cucumber', 'mango', 'plum', 'pomegranate'])).to.eql(['orange', 'apricot', 'grapefruit', 'kiwi', 'mango', 'plum', 'pomegranate']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
