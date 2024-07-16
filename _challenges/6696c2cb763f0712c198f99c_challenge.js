// NAMEEN:
// NAMERU:Разница между JSON-объектами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findJSONDifferences`, которая принимает два JSON-объекта в виде строк.

Функция должна сравнить объекты и вернуть отсортированный массив ключей, значения которых отличаются в двух объектах.


Примеры запуска функции:
```javascript
findJSONDifferences('{"c":"ranked","a":"wrong"}', '{"a":"rank","c":"wro"}'); // [ 'a', 'c' ]
findJSONDifferences('{"x":"1","y":"2"}', '{"x":"1","y":"3"}'); // [ 'y' ]
findJSONDifferences('{"name":"Alice","age":25}', '{"name":"Alice","age":30}'); // [ 'age' ]
findJSONDifferences('{"a":"1","b":"2","c":"3"}', '{"a":"1","b":"2","c":"4"}'); // [ 'c' ]
findJSONDifferences('{"hello":"world","hi":"hello","you":"me"}', '{"hello":"world","hi":"helloo","you":"me"}'); // [ 'hi' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findJSONDifferences(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findJSONDifferences(json1, json2) {
  const obj1 = JSON.parse(json1)
  const obj2 = JSON.parse(json2)

  const res = []
  for(let key in obj1){
    if(obj2.hasOwnProperty(key) && obj1[key] !== obj2[key]) res.push(key)
  }

  return res.sort()
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findJSONDifferences', () => {
  expect(findJSONDifferences).to.be.a('function');
});

it('findJSONDifferences(\'{"hello":"world","hi":"hello","you":"me"}\', \'{"hello":"world","hi":"helloo","you":"me"}\') should return [ "hi" ]', function() {
  expect(findJSONDifferences('{"hello":"world","hi":"hello","you":"me"}', '{"hello":"world","hi":"helloo","you":"me"}')).to.deep.equal([ 'hi' ]);
});

it('findJSONDifferences(\'{"c":"ranked","a":"wrong"}\', \'{"a":"rank","c":"wro"}\') should return [ "a", "c" ]', function() {
  expect(findJSONDifferences('{"c":"ranked","a":"wrong"}', '{"a":"rank","c":"wro"}')).to.deep.equal([ 'a', 'c' ]);
});

it('findJSONDifferences(\'{"x":"1","y":"2"}\', \'{"x":"1","y":"3"}\') should return [ "y" ]', function() {
  expect(findJSONDifferences('{"x":"1","y":"2"}', '{"x":"1","y":"3"}')).to.deep.equal([ 'y' ]);
});

it('findJSONDifferences(\'{"name":"Alice","age":25}\', \'{"name":"Alice","age":30}\') should return [ "age" ]', function() {
  expect(findJSONDifferences('{"name":"Alice","age":25}', '{"name":"Alice","age":30}')).to.deep.equal([ 'age' ]);
});

it('findJSONDifferences(\'{"a":"1","b":"2","c":"3"}\', \'{"a":"1","b":"2","c":"4"}\') should return [ "c" ]', function() {
  expect(findJSONDifferences('{"a":"1","b":"2","c":"3"}', '{"a":"1","b":"2","c":"4"}')).to.deep.equal([ 'c' ]);
});

it('findJSONDifferences(\'{"key1":"value1","key2":"value2"}\', \'{"key1":"value1","key2":"value3"}\') should return [ "key2" ]', function() {
  expect(findJSONDifferences('{"key1":"value1","key2":"value2"}', '{"key1":"value1","key2":"value3"}')).to.deep.equal([ 'key2' ]);
});

it('findJSONDifferences(\'{"a":"100","b":"200","c":"300"}\', \'{"a":"100","b":"200","c":"300"}\') should return []', function() {
  expect(findJSONDifferences('{"a":"100","b":"200","c":"300"}', '{"a":"100","b":"200","c":"300"}')).to.deep.equal([]);
});

it('findJSONDifferences(\'{"a":"abc","b":"def"}\', \'{"a":"xyz","b":"def"}\') should return [ "a" ]', function() {
  expect(findJSONDifferences('{"a":"abc","b":"def"}', '{"a":"xyz","b":"def"}')).to.deep.equal([ 'a' ]);
});

it('findJSONDifferences(\'{"a":"1","b":"2","c":"3"}\', \'{"a":"1","b":"3","c":"2"}\') should return [ "b", "c" ]', function() {
  expect(findJSONDifferences('{"a":"1","b":"2","c":"3"}', '{"a":"1","b":"3","c":"2"}')).to.deep.equal([ 'b', 'c' ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
