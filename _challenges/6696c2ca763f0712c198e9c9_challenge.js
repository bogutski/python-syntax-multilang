// NAMEEN:
// NAMERU:Очистить массив от boolean

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `cleanFromBoolean` принимает массив `arr` в качестве параметра.

Массив может содержать типы: string, number, boolean..

Функция должна вернуть новый массив, состоящий только из строк и чисел. Если массив `arr` содержит только `boolean`, то новый массив будет пустым.

Используйте инструкцию `continue` для решения этой задачи.

Решение будет проверяться на использование `continue`.

Пример запуска функции:
``` javascript
cleanFromBoolean([1, 2, 'a', 'b', false, 5]) // [1, 2, 'a', 'b', 5]
cleanFromBoolean([1, 2, 3, 4]) // [1, 2, 3, 4]
cleanFromBoolean([true, true]) // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function cleanFromBoolean(arr){
  let arr2 = []
  for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'boolean') continue
    arr2.push(arr[i])
  }
  return arr2
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function cleanFromBoolean', () => {
  expect(cleanFromBoolean).to.be.a('function');
});

it('function cleanFromBoolean should include statement continue', () => {
  expect(cleanFromBoolean.toString()).to.include('continue');
});

it('cleanFromBoolean([1, 2, "a", "b"]) should return [1, 2, "a", "b"]', () => {
  expect(cleanFromBoolean([1, 2, "a", "b"])).to.eql([1, 2, "a", "b"]);
});

it('cleanFromBoolean([1, 2, 3, 4]) should return [1, 2, 3, 4]', () => {
  expect(cleanFromBoolean([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
});

it('cleanFromBoolean(["a", "b", true, "c", "d"]) should return ["a", "b", "c", "d"]', () => {
  expect(cleanFromBoolean(["a", "b", true, "c", "d"])).to.eql(["a", "b", "c", "d"]);
});

it('cleanFromBoolean([0, false, false, 0, "zero", "zero"]) should return [0, 0, "zero", "zero"]', () => {
  expect(cleanFromBoolean([0, false, false, 0, "zero", "zero"])).to.eql([0, 0, "zero", "zero"]);
});

it('cleanFromBoolean([false, false, true, true]) should return []', () => {
  expect (cleanFromBoolean([false, false, true, true])).to.eql([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
