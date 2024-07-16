// NAMEEN:
// NAMERU:Сумма положительных и отрицательных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfPosAndNeg`, которая принимает массив чисел и возвращает массив из двух сумм.

* Первый элемент возвращаемого массива - это сумма положительных чисел.

* Второй элемент возвращаемого массива - это сумма отрицательных чисел.

Если массив пустой, то верните строку 'Array is empty'.


Пример запуска функции:
```javascript
sumOfPosAndNeg([1, 2, 3, -1, -2, -3]) // [6, -6]
sumOfPosAndNeg([-25, -30, -15])       // [0, -70]
sumOfPosAndNeg([10, 20, 30])          // [60, 0]
sumOfPosAndNeg([])                    // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfPosAndNeg(arr){
  if(!arr.length) return 'Array is empty';
    let sumPos = 0;
    let sumNeg = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0)sumPos += arr[i]
        else sumNeg += arr[i]
    }
    return [sumPos, sumNeg]
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfPosAndNeg', () => {
  expect(sumOfPosAndNeg).to.be.a('function');
});

it('sumOfPosAndNeg([1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]) returns [55, -55]', () => {
  expect(sumOfPosAndNeg([1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10])).to.deep.equal([55, -55]);
});

it('sumOfPosAndNeg([10,222,3,44,5,6,71,83,99,1000]) should return [1543, 0]', () => {
  expect(sumOfPosAndNeg([10,222,3,44,5,6,71,83,99,1000])).to.deep.equal([1543, 0]);
});

it('sumOfPosAndNeg([-123, -47, -63, -14, -3, -700, -107, -27, -9, -10]) should return [0, -1103]', () => {
  expect(sumOfPosAndNeg([-123, -47, -63, -14, -3, -700, -107, -27, -9, -10])).to.deep.equal([0, -1103]);
});

it('sumOfPosAndNeg([100, -42, 57, -369, 500, -1, 0, -999, 1, 2]) should return [660, -1411]', () => {
  expect(sumOfPosAndNeg([100, -42, 57, -369, 500, -1, 0, -999, 1, 2])).to.deep.equal([660, -1411]);
});

it("sumOfPosAndNeg([]) should return 'Array is empty'", () => {
  expect(sumOfPosAndNeg([])).to.deep.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
