// NAMEEN:
// NAMERU:Собачье коммюнике

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `dogResponse`, которая принимает один параметр:
* `array` - массив с кличкой собаки и возрастом в формате `[dogName, dogAge]`, где
  * `dogName` - кличка собаки, строка;
  * `dogAge` - возраст собаки, число.

Функция должна возвращать строку вида: `dogName: bark! bark! bark!`

Условия:
* Количество повторений слова `bark!` должно соответствовать длине строки `dogName` за вычетом `dogAge`;
* Между словами `bark!` должен быть один пробел;
* Если длина строки `dogName` минус `dogAge` меньше или равно нулю, то функция должна возвращать строку вида: `dogName: hello!`.


Примеры запуска функции:
```javascript
dogResponse(["Bobby", 2]);  // 'Bobby: bark! bark! bark!'
dogResponse(["Daisy", 11]);  // 'Daisy: hello!'
```

Результат в первом примере получен следующим образом:
* Длина клички `Bobby` = 5;  возраст = 2;  разница длины клички и возраста: 5 - 2 = 3;  так как (3 <= 0) = false, то количество слов = 3;  итого текст с ответом = три раза "bark!".
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function dogResponse(arr) {
  const barkCount = arr[0].length - arr[1];
  if (barkCount > 0) {
    return `${arr[0]}: ${"bark! ".repeat(barkCount).trimEnd()}`;
  } else {
    return `${arr[0]}: hello!`;
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function dogResponse', () => {
  expect(dogResponse).to.be.a('function');
});

it('dogResponse(["Bobby", 2]);  // "Bobby: bark! bark! bark!"', () => {
  expect(dogResponse(["Bobby", 2])).eq("Bobby: bark! bark! bark!");
});

it('dogResponse(["Beethoven", 10]);  // "Beethoven: hello!"', () => {
  expect(dogResponse(["Beethoven", 10])).eq("Beethoven: hello!");
});

it('dogResponse(["Michelangelo", 0]);  // "Michelangelo: bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark!', () => {
  expect(dogResponse(["Michelangelo", 0])).eq("Michelangelo: bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark!");
});

it('dogResponse(["Max", 15]);  // "Max: hello!"', () => {
  expect(dogResponse(["Max", 15])).eq("Max: hello!");
});

it('dogResponse(["Daisy", 11]);  // "Daisy: hello!"', () => {
  expect(dogResponse(["Daisy", 11])).eq("Daisy: hello!");
});

it('dogResponse(["", 999999]);  // ": hello!"', () => {
  expect(dogResponse(["", 0])).eq(": hello!");
});

it('dogResponse(["AAAAAAAAAAAAAAAAAAAAA", -1]);  // "AAAAAAAAAAAAAAAAAAAAA: bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark!"', () => {
  expect(dogResponse(["AAAAAAAAAAAAAAAAAAAAA", -1])).eq("AAAAAAAAAAAAAAAAAAAAA: bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark! bark!");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
