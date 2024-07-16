// NAMEEN:
// NAMERU:Добавление приветствия

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addGreeting`, которая принимает массив задач и добавляет в его начало задачу: `Say - Hello, World!`.

Функция должна возвращать обновленный массив задач.

Пример запуска функции:
```javascript
addGreeting([]); // ["Say - Hello, World!"]
addGreeting(["Clean the room"]); // ["Say - Hello, World!", "Clean the room"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addGreeting(){
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addGreeting(arr){
  arr.unshift('Say - Hello, World!')
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addGreeting', () => {
  expect(addGreeting).to.be.a('function');
});

it("addGreeting([]) should return ['Say - Hello, World!']", () => {
  expect(addGreeting([])).deep.equal(["Say - Hello, World!"]);
});

it("addGreeting(['Buy milk']) should return ['Say - Hello, World!', 'Buy milk']", () => {
  expect(addGreeting(["Buy milk"])).deep.equal(["Say - Hello, World!", "Buy milk"]);
});

it("addGreeting(['Clean the room', 'Buy groceries']) should return ['Say - Hello, World!', 'Clean the room', 'Buy groceries']", () => {
  expect(addGreeting(["Clean the room", "Buy groceries"])).deep.equal(["Say - Hello, World!", "Clean the room", "Buy groceries"]);
});

it("addGreeting(['Walk the dog']) should include 'Say - Hello, World!' as the first task", () => {
  expect(addGreeting(["Walk the dog"])[0]).eql("Say - Hello, World!");
});

it("addGreeting(['Do homework']) should have a length of 2", () => {
  expect(addGreeting(["Do homework"]).length).eq(2);
});

it("addGreeting(['Read a book', 'Write a letter']) should not modify the other tasks' order", () => {
  const result = addGreeting(["Read a book", "Write a letter"]);
  expect(result[1]).eql("Read a book");
  expect(result[2]).eql("Write a letter");
});

it("addGreeting(['Go shopping']) should not return an empty array", () => {
  expect(addGreeting(["Go shopping"]).length).not.eql(0);
});

it("addGreeting(['Study JavaScript']) should return array with 'Say - Hello, World!' as the first element", () => {
  expect(addGreeting(["Study JavaScript"])[0]).eql("Say - Hello, World!");
});

it("addGreeting(['Take a nap', 'Exercise']) should increase the array length by 1", () => {
  const initialLength = 2;
  const result = addGreeting(["Take a nap", "Exercise"]);
  expect(result.length).eql(initialLength + 1);
});

it("addGreeting(['Prepare dinner']) should return an array starting with 'Say - Hello, World!", () => {
  const result = addGreeting(["Prepare dinner"]);
  expect(result[0]).eql("Say - Hello, World!");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
