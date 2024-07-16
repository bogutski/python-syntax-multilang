// NAMEEN:
// NAMERU:Извлечение и модификация элементов массива объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getModifiedObjects`, которая принимает массив объектов и два числа.

Функция должна возвращать новый массив, содержащий объекты, извлеченные между указанными индексами (включительно для начала и не включительно для конца).

Каждый объект должен быть модифицирован: значения всех строковых свойств преобразуются в верхний регистр, числовые значения умножаются на `2`.


Примеры запуска функции:
```javascript
console.log(getModifiedObjects(
    [{name: 'apple', count: 10},
     {name: 'banana', count: 20},
     {name: 'cherry', count: 30},
     {name: 'date', count: 40}
    ], 1, 3));
// [{name: 'BANANA', count: 40}, {name: 'CHERRY', count: 60}]

console.log(getModifiedObjects(
    [{type: 'dog', age: 5},
     {type: 'cat', age: 7},
     {type: 'rabbit', age: 3},
     {type: 'hamster', age: 2}
    ], 0, 2));
// [{type: 'DOG', age: 10}, {type: 'CAT', age: 14}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getModifiedObjects(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getModifiedObjects(arr, start, end) {
  return arr.slice(start, end).map(obj => {

    for(let key in obj) {
      if(typeof obj[key] === 'number') obj[key] *= 2;
      else if(typeof obj[key] === 'string') obj[key] = obj[key].toUpperCase();
    }

    return obj
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getModifiedObjects', () => {
  expect(getModifiedObjects).to.be.a('function');
});

it('getModifiedObjects([{name: "apple", count: 10}, {name: "banana", count: 20}, {name: "cherry", count: 30}, {name: "date", count: 40}], 1, 3) should return [{name: "BANANA", count: 40}, {name: "CHERRY", count: 60}]', function() {
  expect(getModifiedObjects([{name: "apple", count: 10}, {name: "banana", count: 20}, {name: "cherry", count: 30}, {name: "date", count: 40}], 1, 3)).to.eql([{name: "BANANA", count: 40}, {name: "CHERRY", count: 60}]);
});

it('getModifiedObjects([{type: "dog", age: 5}, {type: "cat", age: 7}, {type: "rabbit", age: 3}, {type: "hamster", age: 2}], 0, 2) should return [{type: "DOG", age: 10}, {type: "CAT", age: 14}]', function() {
  expect(getModifiedObjects([{type: "dog", age: 5}, {type: "cat", age: 7}, {type: "rabbit", age: 3}, {type: "hamster", age: 2}], 0, 2)).to.eql([{type: "DOG", age: 10}, {type: "CAT", age: 14}]);
});

it('getModifiedObjects([{color: "red", value: 100}, {color: "green", value: 200}, {color: "blue", value: 300}], 1, 3) should return [{color: "GREEN", value: 400}, {color: "BLUE", value: 600}]', function() {
  expect(getModifiedObjects([{color: "red", value: 100}, {color: "green", value: 200}, {color: "blue", value: 300}], 1, 3)).to.eql([{color: "GREEN", value: 400}, {color: "BLUE", value: 600}]);
});

it('getModifiedObjects([{brand: "Toyota", price: 15000}, {brand: "Honda", price: 20000}, {brand: "Ford", price: 25000}], 0, 2) should return [{brand: "TOYOTA", price: 30000}, {brand: "HONDA", price: 40000}]', function() {
  expect(getModifiedObjects([{brand: "Toyota", price: 15000}, {brand: "Honda", price: 20000}, {brand: "Ford", price: 25000}], 0, 2)).to.eql([{brand: "TOYOTA", price: 30000}, {brand: "HONDA", price: 40000}]);
});

it('getModifiedObjects([{title: "Book", pages: 300}, {title: "Magazine", pages: 100}, {title: "Newspaper", pages: 50}], 1, 3) should return [{title: "MAGAZINE", pages: 200}, {title: "NEWSPAPER", pages: 100}]', function() {
  expect(getModifiedObjects([{title: "Book", pages: 300}, {title: "Magazine", pages: 100}, {title: "Newspaper", pages: 50}], 1, 3)).to.eql([{title: "MAGAZINE", pages: 200}, {title: "NEWSPAPER", pages: 100}]);
});

it('getModifiedObjects([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], 1, 2) should return [{name: "BOB", age: 60}]', function() {
  expect(getModifiedObjects([{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], 1, 2)).to.eql([{name: "BOB", age: 60}]);
});

it('getModifiedObjects([{product: "Laptop", price: 1000}, {product: "Tablet", price: 500}, {product: "Phone", price: 800}], 0, 1) should return [{product: "LAPTOP", price: 2000}]', function() {
  expect(getModifiedObjects([{product: "Laptop", price: 1000}, {product: "Tablet", price: 500}, {product: "Phone", price: 800}], 0, 1)).to.eql([{product: "LAPTOP", price: 2000}]);
});

it('getModifiedObjects([{model: "A", value: 10}, {model: "B", value: 20}, {model: "C", value: 30}], 1, 3) should return [{model: "B", value: 40}, {model: "C", value: 60}]', function() {
  expect(getModifiedObjects([{model: "A", value: 10}, {model: "B", value: 20}, {model: "C", value: 30}], 1, 3)).to.eql([{model: "B", value: 40}, {model: "C", value: 60}]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
