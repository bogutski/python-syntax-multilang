// NAMEEN:
// NAMERU:Копирование и изменение массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `twoArrays`, которая принимает массив.

Функция должна вернуть массив из двух массивов, оригинального и его копии.


Создайте второй массив и скопируйте в него все элементы из первого массива.
Используйте метод `slice` для копирования элементов.

Измените первый элемент в первом массиве на `undefined`.

Верните массив из двух массивов:
```javascript
[ [originalArray], [copiedArray] ]
```

Пример запуска функции:
```javascript
twoArrays([1,2,3]) // [[undefined,2,3], [1,2,3]]
twoArrays(['a','b','c']) // [[undefined,'b','c'], ['a','b','c']]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function twoArrays(arr){
  const arr2 = arr.slice();
  arr[0] = undefined;
  return [arr, arr2];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function twoArrays', () => {
  expect(twoArrays).to.be.a('function');
});

it('twoArrays([1,2,3]) should return [[undefined,2,3], [1,2,3]]', () => {
  expect(twoArrays([1,2,3])).to.deep.equal([[undefined,2,3], [1,2,3]]);
});

it("twoArrays(['q','w','e']) should return [[undefined,'w','e'], ['q','w','e']]", () => {
  expect(twoArrays(['q','w','e'])).to.deep.equal([[undefined,'w','e'], ['q','w','e']]);
});

it("twoArrays([true,false,true]) should return [[undefined,false,true], [true,false,true]]", () => {
  expect(twoArrays([true,false,true])).to.deep.equal([[undefined,false,true], [true,false,true]]);
});

it('twoArrays([1,2,3]) should have method slice', () => {
  expect(twoArrays.toString()).to.have.string('slice');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
