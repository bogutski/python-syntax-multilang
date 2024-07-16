// NAMEEN:
// NAMERU:Извлечение и фильтрация элементов по условию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getFilteredElements`, которая принимает массив объектов и два числа.

Функция должна возвращать новый массив, содержащий объекты, извлеченные между указанными индексами (включительно для начала и не включительно для конца), которые содержат свойство `value`, значение которого больше `50`.


Примеры запуска функции:
```javascript
console.log(getFilteredElements(
    [{name: 'apple', value: 60},
     {name: 'banana', value: 20},
     {name: 'cherry', value: 75},
     {name: 'date', value: 40}], 0, 3));
// [{name: 'apple', value: 60}, {name: 'cherry', value: 75}]

console.log(getFilteredElements(
    [{type: 'dog', value: 30},
     {type: 'cat', value: 50},
     {type: 'rabbit', value: 80},
     {type: 'hamster', value: 25}], 1, 4));
// [{type: 'rabbit', value: 80}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getFilteredElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getFilteredElements(arr, start, end) {
  return arr.slice(start, end).filter(obj => obj.value > 50);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getFilteredElements', () => {
  expect(getFilteredElements).to.be.a('function');
});

it('getFilteredElements([{name: "apple", value: 60}, {name: "banana", value: 20}, {name: "cherry", value: 75}, {name: "date", value: 40}], 0, 3) should return [{name: "apple", value: 60}, {name: "cherry", value: 75}]', function() {
  expect(getFilteredElements([{name: "apple", value: 60}, {name: "banana", value: 20}, {name: "cherry", value: 75}, {name: "date", value: 40}], 0, 3)).to.eql([{name: "apple", value: 60}, {name: "cherry", value: 75}]);
});

it('getFilteredElements([{type: "dog", value: 30}, {type: "cat", value: 50}, {type: "rabbit", value: 80}, {type: "hamster", value: 25}], 1, 4) should return [{type: "rabbit", value: 80}]', function() {
  expect(getFilteredElements([{type: "dog", value: 30}, {type: "cat", value: 50}, {type: "rabbit", value: 80}, {type: "hamster", value: 25}], 1, 4)).to.eql([{type: "rabbit", value: 80}]);
});

it('getFilteredElements([{brand: "Toyota", value: 60}, {brand: "Honda", value: 45}, {brand: "Ford", value: 70}, {brand: "BMW", value: 50}], 1, 4) should return [{brand: "Ford", value: 70}]', function() {
  expect(getFilteredElements([{brand: "Toyota", value: 60}, {brand: "Honda", value: 45}, {brand: "Ford", value: 70}, {brand: "BMW", value: 50}], 1, 4)).to.eql([{brand: "Ford", value: 70}]);
});

it('getFilteredElements([{color: "red", value: 30}, {color: "green", value: 80}, {color: "blue", value: 90}, {color: "yellow", value: 20}], 0, 2) should return [{color: "green", value: 80}]', function() {
  expect(getFilteredElements([{color: "red", value: 30}, {color: "green", value: 80}, {color: "blue", value: 90}, {color: "yellow", value: 20}], 0, 2)).to.eql([{color: "green", value: 80}]);
});

it('getFilteredElements([{title: "Book", value: 20}, {title: "Magazine", value: 60}, {title: "Newspaper", value: 70}], 1, 3) should return [{title: "Magazine", value: 60}, {title: "Newspaper", value: 70}]', function() {
  expect(getFilteredElements([{title: "Book", value: 20}, {title: "Magazine", value: 60}, {title: "Newspaper", value: 70}], 1, 3)).to.eql([{title: "Magazine", value: 60}, {title: "Newspaper", value: 70}]);
});

it('getFilteredElements([{product: "Laptop", value: 40}, {product: "Tablet", value: 30}, {product: "Phone", value: 60}], 0, 3) should return [{product: "Phone", value: 60}]', function() {
  expect(getFilteredElements([{product: "Laptop", value: 40}, {product: "Tablet", value: 30}, {product: "Phone", value: 60}], 0, 3)).to.eql([{product: "Phone", value: 60}]);
});

it('getFilteredElements([{model: "A", value: 100}, {model: "B", value: 10}, {model: "C", value: 20}], 1, 3) should return []', function() {
  expect(getFilteredElements([{model: "A", value: 100}, {model: "B", value: 10}, {model: "C", value: 20}], 1, 3)).to.eql([]);
});

it('getFilteredElements([{name: "Alice", value: 45}, {name: "Bob", value: 55}, {name: "Charlie", value: 65}], 1, 3) should return [{name: "Bob", value: 55}, {name: "Charlie", value: 65}]', function() {
  expect(getFilteredElements([{name: "Alice", value: 45}, {name: "Bob", value: 55}, {name: "Charlie", value: 65}], 1, 3)).to.eql([{name: "Bob", value: 55}, {name: "Charlie", value: 65}]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
