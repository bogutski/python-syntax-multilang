// NAMEEN:
// NAMERU:Сжатие строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `compress`, которая принимает строку и возвращает её сжатую версию, где каждый повторяющийся символ заменяется на сам символ и количество его повторений.

Если символ встречается один раз, он остается без изменений.


Примеры запуска функции:
```javascript
console.log(compress('aab')) // "a2b"
console.log(compress('kkkkj')) // "k4j"
console.log(compress('wwwaabbbb')) // "w3a2b4"
console.log(compress('mmmnnnnossssyqqr')) // "m3n4os4yq2r"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function compress(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compress(str) {
  let obj = {}
  let result = ''

  for(let char of str){
    if(obj.hasOwnProperty(char)) obj[char]++
    else obj[char] = 1
  }

  for(let key in obj){
    if(obj[key] > 1) result += key + obj[key]
    else result += key
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function compress', () => {
  expect(compress).to.be.a('function');
});

it('compress("aab") should return "a2b"', function() {
  expect(compress("aab")).to.equal("a2b");
});

it('compress("kkkkj") should return "k4j"', function() {
  expect(compress("kkkkj")).to.equal("k4j");
});

it('compress("wwwaabbbb") should return "w3a2b4"', function() {
  expect(compress("wwwaabbbb")).to.equal("w3a2b4");
});

it('compress("mmmnnnnossssyqqr") should return "m3n4os4yq2r"', function() {
  expect(compress("mmmnnnnossssyqqr")).to.equal("m3n4os4yq2r");
});

it('compress("a") should return "a"', function() {
  expect(compress("a")).to.equal("a");
});

it('compress("gggguiiimmmeeeeppp") should return "g4ui3m3e4p3"', function() {
  expect(compress("gggguiiimmmeeeeppp")).to.equal("g4ui3m3e4p3");
});

it('compress("yttrrreeeewwwwwqqqqqqm") should return "yt2r3e4w5q6m"', function() {
  expect(compress("yttrrreeeewwwwwqqqqqqm")).to.equal("yt2r3e4w5q6m");
});

it('compress("aaaaa") should return "a5"', function() {
  expect(compress("aaaaa")).to.equal("a5");
});

it('compress("aaabbbcccddd") should return "a3b3c3d3"', function() {
  expect(compress("aaabbbcccddd")).to.equal("a3b3c3d3");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
