// NAMEEN:
// NAMERU:Добавление двух новых студентов в список студентов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В класс по программированию на JavasScript записались двое новеньких.
Нужно добавить двух новых студентов в список студентов, посещающих класс.

Создайте функцию `addTwoStudents`.
Функция должна принимать три параметра:

* `names` – массив c именами студентов
* `name1` и `name2` – имена новых студентов, которое должны быть добавлены в конец массива `names`

Имена студентов являются строками. Каждая строка содержит имя и фамилию студента.

Функция должна возвращать массив, полученный в результате добавления новых элементов.

Для решения задачи используйте метод `push`.

Перед добавлением новых элементов `name1` и `name2` в массив, отформатируйте их, удалив лишние пробелы в начале и в конце.

Примеры запуска функции:

```javascript
addTwoStudents(["Alice Smith", "Peter Johns", "Clint Ford"], "Rick Weber", "Tracy Purdy    "); // ["Alice Smith", "Peter Johns", "Clint Ford", "Rick Weber", "Tracy Purdy"]
addTwoStudents(["Tommie Howell", "Lila Stamm"], " Kristina Larkin ", "   Chris Thompson";      // ["Tommie Howell", "Lila Stamm", "Kristina Larkin", "Chris Thompson"]
addTwoStudents(["Petr Ivanov"], " Owen Waters ", "  Emma King  ");                             // ["Petr Ivanov", "Owen Waters", "Emma King"]
addTwoStudents([], "   Max Belov ", " Kirk Cassin     ");                                      // ["Max Belov", "Kirk Cassin"]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addTwoStudents(names, name1, name2) {
  names.push(name1.trim(), name2.trim());
  return names
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addTwoStudents', () => {
  expect(addTwoStudents).to.be.a('function');
});

it('addTwoStudents(["Jessica Price", "Byron Schroeder", "Jordan Kertzmann", "Fannie Hermann", "Billie Wehner"], " Eleanor Stamm ", " Gene Runolfsson ")', () => {
  expect(addTwoStudents(['Jessica Price', 'Byron Schroeder', 'Jordan Kertzmann', 'Fannie Hermann', 'Billie Wehner'], ' Eleanor Stamm ', ' Gene Runolfsson ' )).
                     eql(['Jessica Price', 'Byron Schroeder', 'Jordan Kertzmann', 'Fannie Hermann', 'Billie Wehner', 'Eleanor Stamm', 'Gene Runolfsson']);
});

it('addTwoStudents(["Joyce Hermann", "Stephen Shanahan"], "Nichole Sauer      ", "Howard Pagac  ")', () => {
  expect(addTwoStudents(['Joyce Hermann', 'Stephen Shanahan'], 'Nichole Sauer      ', 'Howard Pagac  ', )).
                     eql(['Joyce Hermann', 'Stephen Shanahan', 'Nichole Sauer', 'Howard Pagac']);
});

it('(addTwoStudents(["Johnathan Little"], "Carla Ernser", "Brandi Rosenbaum")', () => {
  expect(addTwoStudents(['Johnathan Little'], 'Carla Ernser', 'Brandi Rosenbaum')).
                     eql(['Johnathan Little', 'Carla Ernser', 'Brandi Rosenbaum']);
});

it('addTwoStudents([], "  Anna Wolf", "  Tasha Schinner")', () => {
  expect(addTwoStudents([], '  Anna Wolf', '  Tasha Schinner')).
                     eql(['Anna Wolf', 'Tasha Schinner']);
});

it('(addTwoStudents(["Johnathan Little"], " Carla Ernser  ", "  Brandi Rosenbaum ")', () => {
  expect(addTwoStudents(['Johnathan Little'], ' Carla Ernser  ', '  Brandi Rosenbaum ')).
                     eql(['Johnathan Little', 'Carla Ernser', 'Brandi Rosenbaum']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
