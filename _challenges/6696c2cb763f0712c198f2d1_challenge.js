// NAMEEN:
// NAMERU:Посчитать количество вхождений каждого элемента в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEachEl` принимает массив строк и возвращает объект, в котором ключами являются элементы массива, а значениями - количество повторений этих элементов в массиве.

Примеры запуска функции:
```javascript
countEachEl(["hello", "js", "js"]) // {hello: 1, js: 2}
countEachEl(["a", "b", "c", "a", "c", "a", "x"]) // {a: 3, b: 1, c: 2, x: 1}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachEl(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    return count;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachEl', () => {
    expect(countEachEl).to.be.a('function');
});

it('countEachEl(["hello", "js", "js"]) should return {hello: 1, js: 2}', () => {
    expect(countEachEl(["hello", "js", "js"])).to.deep.equal({hello: 1, js: 2});
});

it('countEachEl(["a", "b", "c", "a", "c", "a", "x"]) should return {a: 3, b: 1, c: 2, x: 1}', () => {
    expect(countEachEl(["a", "b", "c", "a", "c", "a", "x"])).to.deep.equal({a: 3, b: 1, c: 2, x: 1});
});

//array of strings
it('countEachEl(["a", "b", "a", "a", "bc", "b", "c"]) should return {a: 3, b: 2, c: 1, bc: 1}', () => {
    expect(countEachEl(["a", "b", "a", "a", "bc", "b", "c"])).to.deep.equal({a: 3, b: 2, c: 1, bc: 1});
});

it('countEachEl(["js", "practice", "js", "code", "practice", "code", "code"]) should return {js: 2, practice: 2, code: 3}', () => {
    expect(countEachEl(["js", "practice", "js", "code", "practice", "code", "code"])).to.deep.equal({js: 2, practice: 2, code: 3});
});

it('countEachEl(["dog", "cat", "dog", "cow", "cow", "cow"]) should return {dog: 2, cat: 1, cow: 3}', () => {
    expect(countEachEl(["dog", "cat", "dog", "cow", "cow", "cow"])).to.deep.equal({dog: 2, cat: 1, cow: 3});
});

it('countEachEl([""]) should return {"": 1}', () => {
    expect(countEachEl([""])).to.deep.equal({"": 1});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
