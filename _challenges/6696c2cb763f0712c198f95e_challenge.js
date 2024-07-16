// NAMEEN:
// NAMERU:Извлечение, модификация и сортировка объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getSortedModifiedObjects`, которая принимает массив объектов, два числа и строку.

Функция должна возвращать новый массив, содержащий объекты, извлеченные между указанными индексами (включительно для начала и не включительно для конца).

Каждый объект должен быть модифицирован:
 * числовые значения заменяются на их целые корни (находим корень числа и округляем к большему),
 * строковые значения преобразуются в нижний регистр и удаляются все пробелы.

Затем полученные объекты сортируются по указанному строковому свойству в порядке возрастания.


Примеры запуска функции:
```javascript
console.log(getSortedModifiedObjects(
    [{name: 'A pp le', count: 50},
     {name: ' BanANA ', count: 20},
     {name: 'C he rr y ', count: 75},
     {name: 'Dat E  ', count: 40}], 1, 4, 'name'));
// [{name: 'banana', count: 5}, {name: 'cherry', count: 9}, {name: 'date', count: 7}]

console.log(getSortedModifiedObjects(
    [{type: 'Dog', age: 5},
     {type: 'Cat', age: 7},
     {type: 'Ra bbit', age: 3},
     {type: 'Hamster', age: 2}], 0, 3, 'type'));
// [{type: 'cat', age: 3}, {type: 'dog', age: 3}, {type: 'rabbit', age: 2}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getSortedModifiedObjects(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getSortedModifiedObjects(arr, start, end, sortName) {
  const noSpacesAndLowerCase = string => {
    let newStr = ''
    for(let char of string){
      if(char !== ' ') newStr += char.toLowerCase()
    }
    return newStr
  }

  return arr.slice(start, end)
      .map(obj => {
        for(let key in obj){
          if(typeof obj[key] === 'number') obj[key] = Math.ceil(obj[key] ** 0.5);
          else if(typeof obj[key] === 'string') obj[key] = noSpacesAndLowerCase(obj[key]);
        }
        return obj
      })
      .sort((a, b) => a[sortName].localeCompare(b[sortName]));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getSortedModifiedObjects', () => {
  expect(getSortedModifiedObjects).to.be.a('function');
});

it('getSortedModifiedObjects([{name: "A pp le", count: 50}, {name: " BanANA ", count: 20}, {name: "C he rr y ", count: 75}, {name: "Dat E  ", count: 40}], 1, 4, "name") should return [{name: "banana", count: 5}, {name: "cherry", count: 9}, {name: "date", count: 7}]', function() {
  expect(getSortedModifiedObjects([{name: "A pp le", count: 50}, {name: " BanANA ", count: 20}, {name: "C he rr y ", count: 75}, {name: "Dat E  ", count: 40}], 1, 4, "name")).to.deep.equal([{name: "banana", count: 5}, {name: "cherry", count: 9}, {name: "date", count: 7}]);
});

it('getSortedModifiedObjects([{type: "Dog", age: 5}, {type: "Cat", age: 7}, {type: "Ra bbit", age: 3}, {type: "Hamster", age: 2}], 0, 3, "type") should return [{type: "cat", age: 3}, {type: "dog", age: 3}, {type: "rabbit", age: 2}]', function() {
  expect(getSortedModifiedObjects([{type: "Dog", age: 5}, {type: "Cat", age: 7}, {type: "Ra bbit", age: 3}, {type: "Hamster", age: 2}], 0, 3, "type")).to.deep.equal([{type: "cat", age: 3}, {type: "dog", age: 3}, {type: "rabbit", age: 2}]);
});

it('getSortedModifiedObjects([{brand: "Toyo ta", value: 60}, {brand: " Hon da", value: 45}, {brand: "Fo rd", value: 70}, {brand: "BMW", value: 50}], 1, 4, "brand") should return [{brand: "bmw", value: 8}, {brand: "ford", value: 9}, {brand: "honda", value: 7}]', function() {
  expect(getSortedModifiedObjects([{brand: "Toyo ta", value: 60}, {brand: " Hon da", value: 45}, {brand: "Fo rd", value: 70}, {brand: "BMW", value: 50}], 1, 4, "brand")).to.deep.equal([{brand: "bmw", value: 8}, {brand: "ford", value: 9}, {brand: "honda", value: 7}]);
});

it('getSortedModifiedObjects([{color: " R ed", value: 30}, {color: "Gre en", value: 80}, {color: " Blue", value: 90}, {color: "Y ellow", value: 20}], 0, 2, "color") should return [{color: "green", value: 9}, {color: "red", value: 6}]', function() {
  expect(getSortedModifiedObjects([{color: " R ed", value: 30}, {color: "Gre en", value: 80}, {color: " Blue", value: 90}, {color: "Y ellow", value: 20}], 0, 2, "color")).to.deep.equal([{color: "green", value: 9}, {color: "red", value: 6}]);
});

it('getSortedModifiedObjects([{title: " Book ", value: 20}, {title: "M aga zine", value: 60}, {title: "Newspa per", value: 70}], 1, 3, "title") should return [{title: "magazine", value: 8}, {title: "newspaper", value: 9}]', function() {
  expect(getSortedModifiedObjects([{title: " Book ", value: 20}, {title: "M aga zine", value: 60}, {title: "Newspa per", value: 70}], 1, 3, "title")).to.deep.equal([{title: "magazine", value: 8}, {title: "newspaper", value: 9}]);
});

it('getSortedModifiedObjects([{product: "L aptop", value: 40}, {product: " Tablet", value: 30}, {product: " Phone", value: 60}], 0, 3, "product") should return [{product: "laptop", value: 7}, {product: "phone", value: 8}, {product: "tablet", value: 6}]', function() {
  expect(getSortedModifiedObjects([{product: "L aptop", value: 40}, {product: " Tablet", value: 30}, {product: " Phone", value: 60}], 0, 3, "product")).to.deep.equal([{product: "laptop", value: 7}, {product: "phone", value: 8}, {product: "tablet", value: 6}]);
});

it('getSortedModifiedObjects([{model: " A", value: 100}, {model: "B ", value: 10}, {model: " C", value: 20}], 1, 3, "model") should return [{model: "b", value: 4}, {model: "c", value: 5}]', function() {
  expect(getSortedModifiedObjects([{model: " A", value: 100}, {model: "B ", value: 10}, {model: " C", value: 20}], 1, 3, "model")).to.deep.equal([{model: "b", value: 4}, {model: "c", value: 5}]);
});

it('getSortedModifiedObjects([{name: " Al ice", value: 45}, {name: " Bo b", value: 55}, {name: "Ch arlie", value: 65}], 1, 3, "name") should return [{name: "bob", value: 8}, {name: "charlie", value: 9}]', function() {
  expect(getSortedModifiedObjects([{name: " Al ice", value: 45}, {name: " Bo b", value: 55}, {name: "Ch arlie", value: 65}], 1, 3, "name")).to.deep.equal([{name: "bob", value: 8}, {name: "charlie", value: 9}]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
