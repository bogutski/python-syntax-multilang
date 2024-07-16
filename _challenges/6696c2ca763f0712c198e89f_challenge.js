// NAMEEN:
// NAMERU:Исправление багов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `bugFixer`, которая принимает один параметр:
* `array` - массив, может содержать любое количество строк и чисел.

Массив `array` имеет следующую структуру (пример):
```javascript
[1, 2, "bug", "One", "Two", "Three", "bug", "bug"]
```

Функция должна вернуть исправленный массив `array`, в котором строки `bug` заменены на строки `FIX`.

Условия:
* Массив `array` содержит не более трех строк `bug`.

Примеры запуска функции:
```javascript
bugFixer([1, 2, "bug", "One", "Two", "Three", "bug", "bug"]);  // [1, 2, "FIX", "One", "Two", "Three", "FIX", "FIX"]
bugFixer(["Cat", "Dog", "bug", "Turtle"]);  // ["Cat", "Dog", "FIX", "Turtle"]
bugFixer(["Flower", "Cactus", "Mushroom"]);  // ["Flower", "Cactus", "Mushroom"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function bugFixer(array) {
  if (array.includes("bug")) {
    const firstIndex = array.indexOf("bug");
    const lastIndex = array.lastIndexOf("bug");
    if (firstIndex === lastIndex) {
      array[firstIndex] = "FIX";
    } else if (array.indexOf("bug", firstIndex + 1) === lastIndex) {
      array[firstIndex] = "FIX";
      array[lastIndex] = "FIX";
    } else {
      const middleIndex = array.indexOf("bug", firstIndex + 1);
      array[firstIndex] = "FIX";
      array[middleIndex] = "FIX";
      array[lastIndex] = "FIX";
    }
  }
  return array;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function `bugFixer`', () => {
  expect(typeof bugFixer).eq('function');
});

it('bugFixer([1, 2, "bug", "One", "Two", "Three", "bug", "bug"]);  // [1, 2, "FIX", "One", "Two", "Three", "FIX", "FIX"]', () => {
  expect(bugFixer([1, 2, "bug", "One", "Two", "Three", "bug", "bug"])).deep.eq([1, 2, "FIX", "One", "Two", "Three", "FIX", "FIX"]);
});

it('bugFixer(["Cat", "Dog", "bug", "Turtle"]);  // ["Cat", "Dog", "FIX", "Turtle"]', () => {
  expect(bugFixer(["Cat", "Dog", "bug", "Turtle"])).deep.eq(["Cat", "Dog", "FIX", "Turtle"]);
});

it('bugFixer(["Flower", "Cactus", "Mushroom"]);  // ["Flower", "Cactus", "Mushroom"]', () => {
  expect(bugFixer(["Flower", "Cactus", "Mushroom"])).deep.eq(["Flower", "Cactus", "Mushroom"]);
});

it('bugFixer(["bug", "bug", "bug"]);  // ["FIX", "FIX", "FIX"]', () => {
  expect(bugFixer(["bug", "bug", "bug"])).deep.eq(["FIX", "FIX", "FIX"]);
});

it('bugFixer([]);  // []', () => {
  expect(bugFixer([])).deep.eq([]);
});

it('bugFixer(["", "", ""]);  // ["", "", ""]', () => {
  expect(bugFixer(["", "", ""])).deep.eq(["", "", ""]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
