// NAMEEN:
// NAMERU:Найти числа и объединить их в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyNumbers`, которая принимает массив с разными типами данных, включая числовые.

Функция должна найти все числа с типом данных `number` и добавить их в строку.

Верните новый массив с этой строкой чисел в качестве единственного элемента.

* Если массив пустой - верните строку `'Array is empty'`
* Если в массиве нет чисел - верните строку `'No numbers in array'`


Примеры запуска функции:
```javascript
onlyNumbers([10, 20, 30, 5555]);                         // ['1020305555']
onlyNumbers([1,2,3, 'test', '55', true, null, NaN, 8]);  // ['1238']
onlyNumbers(['888', true, false, undefined, null, NaN]); // 'No numbers in array'
onlyNumbers([]);                                         // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyNumbers(arr){
  if(!arr.length) return 'Array is empty';
  let str = '';

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number' && !isNaN(arr[i])) str += arr[i];
  }

  if(!str.length) return 'No numbers in array';
  else return [str];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyNumbers', () => {
  expect(onlyNumbers).to.be.a('function');
});

it("Function onlyNumbers should return new array", () => {
  const arr = ['test',2,'3',4,5, NaN, true];
  expect(onlyNumbers(arr) === arr).to.be.false;
});

it("onlyNumbers([1,2,33, 'test', '55', true, null, NaN, 111]) should return ['1233111']", () => {
  expect(onlyNumbers([1,2,33, 'test', '55', true, null, NaN, 111])).to.eql(['1233111']);
});

it("onlyNumbers([10, 20, 30, 40, 50, 555, 123456789]) should return ['1020304050555123456789']", () => {
  expect(onlyNumbers([10, 20, 30, 40, 50, 555, 123456789])).to.eql(['1020304050555123456789']);
});

it("onlyNumbers([true, false, undefined, null, NaN, 'test', '123', (5 < 10)]) should return 'No numbers in array'", () => {
  expect(onlyNumbers([true, false, undefined, null, NaN, 'test', '123', (5 < 10)])).to.eql('No numbers in array');
});

it("onlyNumbers([]) should return 'Array is empty'", () => {
  expect(onlyNumbers([])).to.eql('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
