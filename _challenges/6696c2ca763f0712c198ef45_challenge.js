// NAMEEN:
// NAMERU:Сумма всех чисел из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumAllNumbers`, которая принимает массив из численных и строковых значений.

Функция должна вернуть новый массив, в который будут добавлены все числовые значения из исходного массива и последним элементом будет добавлена строка, следующего вида:

 * `'Sum of all numbers is 15'`, где 15 - это сумма всех числовых значений.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.


Примеры запуска функции:
```javascript
sumAllNumbers([]);                  // 'Array is empty'
sumAllNumbers([1, 2, 3]);           // [1, 2, 3, 'Sum of all numbers is 6']
sumAllNumbers(['1', '2', '3']);     // ['Sum of all numbers is 0']
sumAllNumbers([0, 0, 0]);           // [0, 0, 0, 'Sum of all numbers is 0']
sumAllNumbers([1, '2', 3, 'a', 5]); // [1, 3, 5, 'Sum of all numbers is 9']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumAllNumbers(arr){
  if(!arr.length) return 'Array is empty';
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
      sum += arr[i];
      result.push(arr[i]);
    }
  }
  result.push(`Sum of all numbers is ${sum}`);
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumAllNumbers', () => {
  expect(sumAllNumbers).to.be.a('function');
});

it("sumAllNumbers([1, 2, 3, 'a', 5, 'b', 7, 'c', '9']) should return [1, 2, 3, 5, 7, 'Sum of all numbers is 18']", () => {
  expect(sumAllNumbers([1, 2, 3, 'a', 5, 'b', 7, 'c', '9'])).to.eql([1, 2, 3, 5, 7, 'Sum of all numbers is 18']);
});

it("sumAllNumbers([1, 2, 3]) should return [1, 2, 3, 'Sum of all numbers is 6']", () => {
  expect(sumAllNumbers([1, 2, 3])).to.eql([1, 2, 3, 'Sum of all numbers is 6']);
});

it("sumAllNumbers([500, 55, 5000]) should return [500, 55, 5000, 'Sum of all numbers is 5555']", () => {
  expect(sumAllNumbers([500, 55, 5000])).to.eql([500, 55, 5000, 'Sum of all numbers is 5555']);
});

it("sumAllNumbers(['a', 'b', 'c']) should return '['Sum of all numbers is 0']'", () => {
  expect(sumAllNumbers(['a', 'b', 'c'])).to.eql(['Sum of all numbers is 0']);
});

it("sumAllNumbers([0, 0, 0]) should return [0, 0, 0, 'Sum of all numbers is 0']", () => {
  expect(sumAllNumbers([0, 0, 0])).to.eql([0, 0, 0, 'Sum of all numbers is 0']);
});

it("sumAllNumbers(['1', '2', '3']) should return '['Sum of all numbers is 0']'", () => {
  expect(sumAllNumbers(['1', '2', '3'])).to.eql(['Sum of all numbers is 0']);
});

it("sumAllNumbers([]) should return 'Array is empty'", () => {
  expect(sumAllNumbers([])).to.eql('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
