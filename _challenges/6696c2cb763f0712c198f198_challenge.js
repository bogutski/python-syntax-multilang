// NAMEEN:
// NAMERU:Удаление пробелов и проверка на симметричность

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isArraySymmetrical`, которая принимает массив строк.

Функция должна вернуть `true`, если массив является симметричным, и `false` в противном случае.

В строках могут быть пробелы, как в начале и в конце, так и внутри слов.

Эта задача, повторяет алгоритм прошлой задачи, но нужно добавить цикл, в котором нужно убрать все пробелы из строки:

* Проверить, что массив не пустой, иначе вернуть строку `'Array is empty'`
* Перевести массив в строку, для этого воспользуйтесь методом `join`
* Привести строку к нижнему или верхнему регистру.
* Создать пустую строку, в которую будут записываться все символы, кроме пробелов.
* Создать цикл, который будет проходить по строке и записывать в новую строку все символы, кроме пробелов.
* Создайте цикл, который будет проверять, что первый символ равен последнему, второй предпоследнему и т.д.
  Цикл должен проходить до половины строки и если элементы равны, то возвращать `true`, иначе `false`


Примеры запуска функции:
```javascript
isArraySymmetrical(['A ', ' B B, ' C', 'b b', 'a ']);           // 'abbcbba' => true
isArraySymmetrical([' t rue   ', 'a Aa ', 'E UR T']);           // 'trueaaaeurt' => true
isArraySymmetrical(['T RU E', 'O  R', '  be', 'r  o', 'eurt']); // 'trueorberoeurt' => false
isArraySymmetrical(['123 ', '5 55', '12  3']);                  //  '123555123' => false
isArraySymmetrical([]);                                         // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isArraySymmetrical(arr) {
  if(!arr.length) return 'Array is empty';
  const str = arr.join('').toLowerCase();
  let noSpacesStr = '';

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') noSpacesStr += str[i];
  }

  for(let i = 0; i < noSpacesStr.length / 2; i++) {
    if(noSpacesStr[i] !== noSpacesStr[noSpacesStr.length - i - 1]) return false;

  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isArraySymmetrical', () => {
  expect(isArraySymmetrical).to.be.a('function');
});

it("Function isArraySymmetrical does not include 'reverse' method", () => {
  expect(isArraySymmetrical.toString()).to.not.include('reverse');
});

it("isArraySymmetrical([' A', 'b', 'c ', 'b', '  a ']) should return true", () => {
  expect(isArraySymmetrical([' A', 'b', 'c ', 'b', '  a '])).to.be.true;
});

it("isArraySymmetrical(['te st', 'SHO ULD', 'be  ', ' false']) should return false", () => {
  expect(isArraySymmetrical(['te st', 'SHO ULD', 'be  ', ' false'])).to.be.false;
});

it("isArraySymmetrical(['   TR U   E', ' O R', ' b e E b ', ' r o  ', 'e ur  t']) should return true", () => {
  expect(isArraySymmetrical(['   TR U   E', ' O R', ' b e E b ', ' r o  ', 'e ur  t'])).to.be.true;
});

it("isArraySymmetrical([' 12 3', '55 5', '1 23 ']) should return false", () => {
  expect(isArraySymmetrical([' 12 3', '55 5', '1 23 '])).to.be.false;
});

it("isArraySymmetrical(['789', 'abc', '   c b  a', '   9  87   ']) should return true", () => {
  expect(isArraySymmetrical(['789', 'abc', '   c b  a', '   9  87   '])).to.be.true;
});

it("isArraySymmetrical([]) should return 'Array is empty'", () => {
  expect(isArraySymmetrical([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
