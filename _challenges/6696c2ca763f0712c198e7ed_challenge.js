// NAMEEN:
// NAMERU:Формирование титульной строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addTitleString`, которая принимает массив строк `names`, содержащий информацию о человеке: титул, имя и фамилию.

Элементы массива расположены в следующем порядке: `title, firstName, lastName`.

Массив может быть пустым, некоторые элементы массива могут быть пропущены.

Строки могут содержать пробелы в начале и в конце, но не могут быть пустыми.

Нужно отформатировать строки, удалив из каждой пробелы в начале и в конце, и записать новые значения в массив `names`.

Из отформатированных элементов нужно получить строку `titleString` в формате: `title firstName lastName` и добавить ее в конец массива.

Функция должна вернуть обновленный массив `names`.

Если количество элементов в переданном массиве не равно 3, то функция должна вернуть сообщение `"Invalid input"`.

Примеры запуска функции:

```javascript
addTitleString([' Mr.', '  John', '  Smith  ']);         // ['Mr.', 'John', 'Smith', 'Mr. John Smith']
addTitleString(['Mrs.   ', '  Sarah', '  Smith']);       // ['Mrs.', 'Sarah', 'Smith', 'Mrs. Sarah Smith']
addTitleString(['  Johnny', '  Depp']);                  // "Invalid input"
addTitleString(['Mr.', 'Johnny', ' Depp', 'Little  ']);  // "Invalid input"
addTitleString([]);                                      // "Invalid input"
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addTitleString
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addTitleString(names) {
  if (names.length !== 3) {
    return 'Invalid input';
  }
  names[0] = names[0].trim();
  names[1] = names[1].trim();
  names[2] = names[2].trim();
  names.push(`${names[0]} ${names[1]} ${names[2]}`);
  return names;
}
// SOLUTIONEND


// OPENTESTSSTART

it('Created function addTitleString', () => {
  expect(addTitleString).to.be.a('function');
});

it('addTitleString(["  Mrs. " , "    Jane   ", " Hermann    "]) should return ["Mrs.", "Jane", "Hermann", "Mrs. Jane Hermann"]', () => {
  expect(addTitleString(["  Mrs. " , "    Jane   ", " Hermann    "])).to.deep.equal(["Mrs.", "Jane", "Hermann", "Mrs. Jane Hermann"]);
});

it('addTitleString(["  Mr. " , "    John   ", " Smith    "]) should return ["Mr.", "John", "Smith", "Mr. John Smith"]', () => {
  expect(addTitleString(["  Mr. " , "    John   ", " Smith    "])).to.deep.equal(["Mr.", "John", "Smith", "Mr. John Smith"]);
});

it('addTitleString(["  Mr. " , "    John   "]) should return "Invalid input"', () => {
  expect(addTitleString(["  Mr. " , "    John   "])).to.equal("Invalid input");
});

it('addTitleString(["  Mr. " , "  Rick  ", " Ford", "  Little  "]) should return "Invalid input"', () => {
  expect(addTitleString(["  Mr. " , "  Rick  ", " Ford", "  Little  "])).to.equal("Invalid input");
});

it('addTitleString(["  Mr. " , "  Rick  ", " Ford"]) should return ["Mr.", "Rick", "Ford", "Mr. Rick Ford"]', () => {
  expect(addTitleString(["  Mr. " , "  Rick  ", " Ford"])).to.deep.equal(["Mr.", "Rick", "Ford", "Mr. Rick Ford"]);
});

it('addTitleString(["Dr." , "Stephen", "Goldman"]) should return ["Dr.", "Stephen", "Goldman", "Dr. Stephen Goldman"]', () => {
  expect(addTitleString(["Dr." , "Stephen", "Goldman"])).to.deep.equal(["Dr.", "Stephen", "Goldman", "Dr. Stephen Goldman"]);
});

it('addTitleString([]) should return "Invalid input"', () => {
  expect(addTitleString([])).to.equal("Invalid input");
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
