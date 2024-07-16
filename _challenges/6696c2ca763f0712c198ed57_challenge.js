// NAMEEN:
// NAMERU:Объект строк и их количества

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `objectCount`, которая принимает массив и возвращает объект, где ключи - слова из массива, а значение ключа - количество этих слов в массиве.

Все строки в массиве написаны без пробелов и в нижнем регистре.

Если массив пустой, то функция должна вернуть `"No words - no object"`.

Для проверки наличия ключа в объекте можно использовать метод `hasOwnProperty`.


Примеры запуска функции:
```javascript
objectCount(['hello', 'hello', 'hello', 'bob', 'bob']); // {hello: 3, bob: 2}
objectCount(['a', 'b', 'b', 'k', 'a']); // {a: 2, b: 2, k: 1}
objectCount([]); // 'No words - no object'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectCount(arr){
  if(arr.length === 0) return 'No words - no object';
  const obj = {};
  for (let i = 0; i < arr.length; i++){
    if(obj.hasOwnProperty(arr[i])){
      obj[arr[i]] += 1;
    } else obj[arr[i]] = 1;
  }
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('objectCount is a function', () => {
  expect(objectCount).to.be.a('function');
})

it("objectCount(['hello', 'hello', 'bob'])) should return {hello: 3, bob: 2}", () =>{
  expect(objectCount(['hello', 'hello', 'hello', 'bob', 'bob'])).eql({hello: 3, bob: 2});
});

it("objectCount(['apple', 'fig', 'orange', 'apple', 'fig'])) should return {apple: 2, fig: 2, orange: 1}", () =>{
  expect(objectCount(['apple', 'fig', 'orange', 'apple', 'fig'])).eql({apple: 2, fig: 2, orange: 1});
});

it("objectCount(['a', 'b', 'b', 'k', 'a'])) should return {a: 2, b: 2, k: 1}", () =>{
  expect(objectCount(['a', 'b', 'b', 'k', 'a'])).eql({a: 2, b: 2, k: 1});
});

it("objectCount([])) should return 'No words - no object'", () =>{
  expect(objectCount([])).eql('No words - no object');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
