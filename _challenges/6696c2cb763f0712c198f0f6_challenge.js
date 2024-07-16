// NAMEEN:
// NAMERU:Найти массив с числами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию 'findArrayWithNumbers', которая принимает массив массивов.

Функция должна вернуть новый массив с двумя элементами:

* Первый элемент - строка `'Array with numbers by index <index>'`, где `<index>` - индекс массива в исходном массиве, в котором были числа.
* Второй элемент - массив, состоящий из чисел, который был найден в оригинальном массиве.

Перед добавлением в новый массив, каждое число должно быть умножено на 3.

Пример: массив `[['1','2','3'], ['test'], [7,8,9]]` должен вернуть массив `['Array with numbers by index 2', [21,24,27]]`.

Все внутренние массивы будут состоять только из строк и только один будет состоять из чисел.

Пустой массив передаваться не будет.

Алгоритм решения:
* Первый цикл проходит по внешнему массиву.
* Второй цикл проходит по внутреннему массиву.
* Условие `if` проверяет, что если первый элемент не является числом, то прерывает цикл.
* В условии `else`, мы добавляем в новый массив число, умноженное на 3.
* Так же, нужно сохранить индекс в переменную, когда мы найдем какой массив содержит числа.
* В конце цикла, нужно составить правильно строку и добавить в нее индекс.
* Вернуть новый массив со строкой и массивом чисел.

Пример запуска функции:
```javascript
findArrayWithNumbers([['1','2','3'], ['test'], [7,8,9]]); // ['Array with numbers by index 2', [21,24,27]]
findArrayWithNumbers([[20, 30, 40], ['a', 'b', 'c']]); // ['Array with numbers by index 0', [60, 90, 120]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findArrayWithNumbers(arr){
  const newArr = [];
  let index;
  for(let i = 0; i < arr.length; i++){

    for(let j = 0; j < arr[i].length; j++){
      if(typeof arr[i][j] !== 'number') break;
      else {
        if(index === undefined) index = i;
        newArr.push(arr[i][j] * 3);
      }
    }

  }
  const str = `Array with numbers by index ${index}`
  return [str, newArr];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findArrayWithNumbers', () => {
  expect(findArrayWithNumbers).to.be.a('function');
});

it("findArrayWithNumbers([['1','2','3'], ['test'], [7,8,9]]) should return ['Array with numbers by index 2', [21,24,27]]", () => {
  expect(findArrayWithNumbers([['1','2','3'], ['test'], [7,8,9]])).to.deep.equal(['Array with numbers by index 2', [21,24,27]]);
});

it("findArrayWithNumbers([[25, 35, 45], ['a', 'b', 'c']]) should return ['Array with numbers by index 0', [75, 105, 135]]", () => {
  expect(findArrayWithNumbers([[25, 35, 45], ['a', 'b', 'c']])).to.deep.equal(['Array with numbers by index 0', [75, 105, 135]]);
});

it("findArrayWithNumbers([[], [], ['text'], [1, 2, 3]]) should return ['Array with numbers by index 3', [3, 6, 9]]", () => {
  expect(findArrayWithNumbers([[], [], ['text'], [1, 2, 3]])).to.deep.equal(['Array with numbers by index 3', [3, 6, 9]]);
});

it("findArrayWithNumbers([['1','2','3'], ['test'], [0, 100, 900], []]) should return ['Array with numbers by index 2', [0, 300, 2700]]", () => {
  expect(findArrayWithNumbers([['1','2','3'], ['test'], [0, 100, 900], []])).to.deep.equal(['Array with numbers by index 2', [0, 300, 2700]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
