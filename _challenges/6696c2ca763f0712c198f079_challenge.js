// NAMEEN:
// NAMERU:Найти вторую минимальную цифру

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `secondMinNumber`, которая принимает массив с одной строкой.

В строке находятся цифры без разделения. Например: `['12345']`.

Функция должна вернуть вторую минимальную цифру, которая будет переведена в тип данных `number`.

* Если массив либо строка пустая, то вернуть `'There are no numbers'`.
* Если в строке нет второй минимальной цифры, то вернуть `'There is no second min number'`.

В коде три ошибки.

Разберитесь как работает код, исправьте ошибки и перепишите код самостоятельно.


Пример запуска функции:
```javascript
secondMinNumber(['123']);  // 2
secondMinNumber(['98']);   // 9
secondMinNumber(['555']);  // 'There is no second min number' 
secondMinNumber(['']);     // 'There are no numbers'
secondMinNumber([]);       // 'There are no numbers'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function secondMinNumber(arr){
  if(!arr.length && !arr[0].length) return 'There are no numbers';
  const min = +arr[0][0];
  const secondMin = +arr[0][0];

  for(let i = 1; i < arr[0].length; i++){
    if(+arr[0][i] < min) min = +arr[0][i];
  }
  for(let i = 1; i < arr[0].length; i++){
    if((secondMin === min || +arr[0][i] < secondMin) && +arr[0][i] !== min) secondMin = +arr[0][i];
  }

  if(secondMin === min) return 'There is no second min number';
  else return secondMin
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMinNumber(arr){
  if(!arr.length || !arr[0].length) return 'There are no numbers';
  let min = +arr[0][0];
  let secondMin = +arr[0][0];

  for(let i = 1; i < arr[0].length; i++){
    if(+arr[0][i] < min) min = +arr[0][i];
  }
  for(let i = 1; i < arr[0].length; i++){
    if((secondMin === min || +arr[0][i] < secondMin) && +arr[0][i] !== min) secondMin = +arr[0][i];
  }

  if(secondMin === min) return 'There is no second min number';
  else return secondMin
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondMinNumber', () => {
  expect(secondMinNumber).to.be.a('function');
});

it('Function secondMinNumber does not include method sort', () => {
  expect(secondMinNumber.toString()).to.not.include('sort');
});

it('Function secondMinNumber does not include method Math.min', () => {
  expect(secondMinNumber.toString()).to.not.include('Math.min');
});

it("secondMinNumber(['12345']) should return 2", () => {
  expect(secondMinNumber(['12345'])).to.equal(2);
});

it("secondMinNumber(['98765]) should return 6", () => {
  expect(secondMinNumber(['98765'])).to.equal(6);
});

it("secondMinNumber(['898111']) should return 8", () => {
  expect(secondMinNumber(['898111'])).to.equal(8);
});

it("secondMinNumber(['555555']) should return 'There is no second min number'", () => {
  expect(secondMinNumber(['555555'])).to.equal('There is no second min number');
});

it("secondMinNumber(['']) should return 'There are no numbers'", () => {
  expect(secondMinNumber([''])).to.equal('There are no numbers');
});

it("secondMinNumber([]) should return 'There are no numbers'", () => {
  expect(secondMinNumber([])).to.equal('There are no numbers');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
