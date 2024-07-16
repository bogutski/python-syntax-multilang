// NAMEEN:
// NAMERU:Очистка массива от "ложных" значений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterFalsyValues`, которая принимает массив с различными типами данных.

Функция возвращает новый массив, из которого удалены все "ложные" значения (false, null, undefined, 0, "", и NaN).

В решении этой задачи используйте метод `pop()` для последовательного удаления элементов из исходного массива до тех пор, пока не будут проверены все элементы.

В конце, верните массив только с "истинными" значениями.

Важно: функция должна сохранить порядок "истинных" элементов, как в исходном массиве.

Пример запуска функции:
```javascript
filterFalsyValues([7, "ate", "", false, 9]); // [ 7, 'ate', 9 ]
filterFalsyValues(["", "0", 0, false, null, undefined, NaN, "NaN"]); // [ '0', 'NaN' ]
filterFalsyValues([false, null, 0, NaN, undefined, ""]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterFalsyValues(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterFalsyValues(arr){
  let res = []

  for(let i = arr.length - 1; i >= 0; i--){
    const el = arr.pop()

    if(el) res.unshift(el)
  }

  return res
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterFalsyValues', () => {
  expect(filterFalsyValues).to.be.a('function');
});

it("filterFalsyValues([0, 1, false, 2, '', 3]) should return [1, 2, 3]", () => {
  expect(filterFalsyValues([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
});

it("filterFalsyValues([false, null, 0, NaN, undefined, '']) should return []", () => {
  expect(filterFalsyValues([false, null, 0, NaN, undefined, ""])).to.deep.equal([]);
});

it("filterFalsyValues(['hello', 42, true, [], {}]) should return ['hello', 42, true, [], {}]", () => {
  expect(filterFalsyValues(['hello', 42, true, [], {}])).to.deep.equal(['hello', 42, true, [], {}]);
});

it("filterFalsyValues(['', 'text', 0, 4, false, 'another']) should return ['text', 4, 'another']", () => {
  expect(filterFalsyValues(['', 'text', 0, 4, false, 'another'])).to.deep.equal(['text', 4, 'another']);
});

it("filterFalsyValues([0, 0, 0, 'yes', false]) should return ['yes']", () => {
  expect(filterFalsyValues([0, 0, 0, 'yes', false])).to.deep.equal(['yes']);
});

it("filterFalsyValues([0]) should return []", () => {
  expect(filterFalsyValues([0])).to.deep.equal([]);
});

it("filterFalsyValues([]) should return []", () => {
  expect(filterFalsyValues([])).to.deep.equal([]);
});

it("filterFalsyValues([[], 0, null, [1, 2], undefined]) should return [[], [1, 2]]", () => {
  expect(filterFalsyValues([[], 0, null, [1, 2], undefined])).to.deep.equal([[], [1, 2]]);
});

it("filterFalsyValues([-1, 0, 1, 2]) should return [-1, 1, 2]", () => {
  expect(filterFalsyValues([-1, 0, 1, 2])).to.deep.equal([-1, 1, 2]);
});

it("filterFalsyValues should include method pop()", () => {
  const str = filterFalsyValues.toString()
  expect(str).to.include('.pop()');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
