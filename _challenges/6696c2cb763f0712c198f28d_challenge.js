// NAMEEN:
// NAMERU:Проверка чисел и строк в массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `checkForElementsType`, которая принимает два массива.

Функция должна проверить, что все элементы первого массива являются числами, а все элементы второго массива являются строками.


* Если все элементы первого массива являются числами, а все элементы второго массива являются строками, то вернуть объект вида `{firstArray: true, secondArray: true}`.

* Если один, либо оба, из массивов содержат элементы другого типа, то нужно поменять значение в объекте на `false` для соответствующего массива.

* Если один из массивов пустой, то поменять значение в объекте на `null` для соответствующего массива.

* Если оба массива пустые, то вернуть строку `'Both arrays are empty'`.




Примеры запуска функции:
```javascript
checkForElementsType([1, 2, 3], ['1', '2', '3']);     // {firstArray: true, secondArray: true}
checkForElementsType([20, 0, 6], ['a', 'b', true]);   // {firstArray: true, secondArray: false}
checkForElementsType([undefined, 'str'], [1, 5, 10]); // {firstArray: false, secondArray: false}
checkForElementsType([], ['a', 'b', 'c']);            // {firstArray: null, secondArray: true}
checkForElementsType(['string'], []);                 // {firstArray: false, secondArray: null}
checkForElementsType([], []);                         // 'Both arrays are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkForElementsType(arr1, arr2)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkForElementsType(arr1, arr2){
  if(!arr1.length && !arr2.length) return 'Both arrays are empty';
  
  let firstArr = true;
  let secondArr = true;
  
  if(!arr1.length) firstArr = null;
  if(!arr2.length) secondArr = null;
  
  for(let i = 0; i < arr1.length; i++){
    if(typeof arr1[i] !== 'number'){
     firstArr = false;
     break;
    }
  }
  
  for(let i = 0; i < arr2.length; i++){
    if(typeof arr2[i] !== 'string'){
     secondArr = false;
     break;
    }
  }
  
  return {'firstArray': firstArr, 'secondArray': secondArr};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkForElementsType', () => {
  expect(checkForElementsType).to.be.a('function');
});

it("checkForElementsType([1, 2, 3], ['1', '2', '3']) should return {'firstArray': true, 'secondArray': true}", () => {
  expect(checkForElementsType([1, 2, 3], ['1', '2', '3'])).to.be.deep.equal({'firstArray': true, 'secondArray': true});
});

it("checkForElementsType([10, 20, NaN], ['test', 'string', null]) should return {'firstArray': true, 'secondArray': false}", () => {
  expect(checkForElementsType([10, 20, NaN], ['test', 'string', null])).to.be.deep.equal({'firstArray': true, 'secondArray': false});
});

it("checkForElementsType([true, undefined, 'str'], ['only', 'strings', 'here']) should return {'firstArray': false, 'secondArray': true}", () => {
  expect(checkForElementsType([true, undefined, 'str'], ['only', 'strings', 'here'])).to.be.deep.equal({'firstArray': false, 'secondArray': true});
});

it("checkForElementsType([], ['a', 'b', 'c']) should return {'firstArray': null, 'secondArray': true}", () => {
  expect(checkForElementsType([], ['a', 'b', 'c'])).to.be.deep.equal({'firstArray': null, 'secondArray': true});
});

it("checkForElementsType([1, 2, 3], []) should return {'firstArray': true, 'secondArray': null}", () => {
  expect(checkForElementsType([1, 2, 3], [])).to.be.deep.equal({'firstArray': true, 'secondArray': null});
});

it("checkForElementsType([], []) should return 'Both arrays are empty'", () => {
  expect(checkForElementsType([], [])).to.be.equal('Both arrays are empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
