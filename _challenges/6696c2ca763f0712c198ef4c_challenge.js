// NAMEEN:
// NAMERU:Заполнить элементы массива до 5 символов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillThemUp`, которая принимает массив строк разной длинны.

Функция должна пройтись по массиву и проверить длину каждого элемента.

* Если длина строки меньше `5`, то в конец строки должны быть добавлены символы `#`, до тех пор пока длина строки не
 станет равна `5`.
* Если длина строки больше или равна `5` то строка должна остаться без изменений.

Функция должна вернуть новый массив со всеми строками.

Если массив пустой, то функция должна вернуть `false`.


Примеры запуска функции:
```javascript
fillThemUp(['1', '22', '333', '4444', '55555']) // ['1####', '22###', '333##', '4444#', '55555']
fillThemUp(['abc', 'ab', 'a', 'abcd'])          // ['abc##', 'ab###', 'a####', 'abcd#']
fillThemUp(['a', 'b', 'c'])                     // ['a####', 'b####', 'c####']
fillThemUp(['', '', ''])                        // ['#####', '#####', '#####']
fillThemUp([])                                  // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillThemUp(arr){
  if (!arr.length) return false;
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
    if (arr[i].length < 5){
      let length = arr[i].length;

      for(let j = 0; j < 5 - length; j++){
        arr[i] += '#';
      }

    }
    newArr.push(arr[i]);
  }
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillThemUp', () => {
  expect(fillThemUp).to.be.a('function');
});

it("fillThemUp(['1', '22', '333', '4444', '55555', '666666']) should return ['1####', '22###', '333##', '4444#', '55555', '666666']", () => {
  expect(fillThemUp(['1', '22', '333', '4444', '55555', '666666'])).to.be.eql(['1####', '22###', '333##', '4444#', '55555', '666666']);
});

it("fillThemUp(['abc', 'ab', 'a', 'abcd', 'abcde', 'abcdef']) should return ['abc##', 'ab###', 'a####', 'abcd#', 'abcde', 'abcdef']", () => {
  expect(fillThemUp(['abc', 'ab', 'a', 'abcd', 'abcde', 'abcdef'])).to.be.eql(['abc##', 'ab###', 'a####', 'abcd#', 'abcde', 'abcdef']);
});

it("fillThemUp(['a', 'b', 'c']) should return ['a####', 'b####', 'c####']", () => {
  expect(fillThemUp(['a', 'b', 'c'])).to.be.eql(['a####', 'b####', 'c####']);
});

it("fillThemUp(['test', 'car', 'a', 'flower', '888', '']) should return ['test#', 'car##', 'a####', 'flower', '888##', '#####']", () => {
  expect(fillThemUp(['test', 'car', 'a', 'flower', '888', ''])).to.be.eql(['test#', 'car##', 'a####', 'flower', '888##', '#####']);
});

it("fillThemUp(['', '', '']) should return ['#####', '#####', '#####']", () => {
  expect(fillThemUp(['', '', ''])).to.be.eql(['#####', '#####', '#####']);
});

it("fillThemUp([]) should return false", () => {
  expect(fillThemUp([])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
