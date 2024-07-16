// NAMEEN:
// NAMERU:Как скопировать массив?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `waysToCopy`, которая принимает массив с одним элементом и возвращает копию этого массива.

Массив будет приходить двух видов:

* Массив с примитивным типом данных
```javascript
array = [ 10 ]
array = [ 'HI' ]
array = [ false ]
```
* Массив с объектом
```javascript
array = [ {name: 'John'} ]
```


Если тип данных первого элемента массива - примитивный:
* Создайте новый массив, скопировав старый, с помощью метода `slice`

Если тип данных первого элемента массива - объект:
* Создайте новый массив, скопировав старый, с помощью метода `JSON.stringify` и `JSON.parse`


Вернуть оригинальный массив нельзя, так как ссылка на массивы будет проверяться на равенство.

Пример запуска функции:
```javascript
waysToCopy([ 10 ]); // => используем метод slice
waysToCopy([ {name: 'John'} ]); // => используем метод JSON.stringify и JSON.parse
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function waysToCopy(array){
  if (typeof array[0] !== 'object') {
    return array.slice()
  } else {
    return JSON.parse(JSON.stringify(array))
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function waysToCopy', () => {
  expect(waysToCopy).to.be.a('function');
});

it('waysToCopy([ 100 ]) should return [ 10 ]', () => {
  expect(waysToCopy([ 10 ])).to.eql([ 10 ]);
});

it("waysToCopy([ 'Hello' ]) should return [ 'Hello' ]", () => {
  expect(waysToCopy([ 'Hello' ])).to.eql([ 'Hello' ]);
});

it("waysToCopy([ true ]) should return [ true ]", () => {
  expect(waysToCopy([ true ])).to.eql([ true ]);
});
it('waysToCopy([ {name: "Mike"} ]) should return [ {name: "Mike"} ]', () => {
  expect(waysToCopy([ {name: "Mike"} ])).to.eql([ {name: "Mike"} ]);
});

it("waysToCopy([ {name: 'Alice'} ]) should return [ {name: 'Alice'} ]", () => {
  expect(waysToCopy([ {name: 'Alice'} ])).to.eql([ {name: 'Alice'} ]);
});

it("waysToCopy([ 25 ]) should return [ 25 ]", () => {
  const array = [ 25 ];
  expect(waysToCopy(array) === array).to.be.false;
});

it("waysToCopy([ {name: 'Jake'} ]) should return [ {name: 'Jake'} ]", () => {
  const array = [ {name: 'Jake'} ];
  expect(waysToCopy(array) === array).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
