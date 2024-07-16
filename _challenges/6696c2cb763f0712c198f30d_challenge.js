// NAMEEN:
// NAMERU:Динамическое обновление списка курсов с изменением регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `updateCoursesList`, которая принимает два аргумента: массив с текущим списком курсов и массив новых курсов для добавления.

Функция должна проверить каждый новый курс на наличие в текущем списке:

* Если курс уже присутствует, его название в оригинальном списке должно быть преобразовано в верхний регистр (UPPER CASE).
* Если курс отсутствует, его следует добавить в список в нижнем регистре (lower case).

Функция должна возвращать обновленный список курсов.

Примеры запуска функции:
```javascript
updateCoursesList(["Introduction to Programming", "Advanced JavaScript"], ["introduction to programming", "Python Basics"])
// ["INTRODUCTION TO PROGRAMMING", "Advanced JavaScript", "python basics"]

updateCoursesList(["Web Development", "Data Science"], ["Data Science", "Machine Learning"])
// ["Web Development", "DATA SCIENCE", "machine learning"]

updateCoursesList(["Algorithms", "Data Structures"], ["ALGORITHMS", "Graph Theory"])
// ["ALGORITHMS", "Data Structures", "graph theory"]

updateCoursesList(["Graphic Design", "UI/UX"], ["graphic design", "Web Design"])
// ["GRAPHIC DESIGN", "UI/UX", "web design"]

updateCoursesList([], ["React", "Vue"])
// ["react", "vue"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateCoursesList(courses, newCourses) {
  for(let el of newCourses){
    const indexOfEl = courses.findIndex(item => item.toLowerCase() === el.toLowerCase())

    if(indexOfEl > -1) courses[indexOfEl] = courses[indexOfEl].toUpperCase()
    else courses.push(el.toLowerCase())
  }

  return courses;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function updateCoursesList', () => {
  expect(updateCoursesList).to.be.a('function');
});

it('Converts existing course to UPPER CASE and adds new courses in lower case', () => {
  expect(updateCoursesList(["Math", "Science"], ["Science", "English"])).to.deep.equal(["Math", "SCIENCE", "english"]);
});

it('Handles empty initial list by adding new courses in lower case', () => {
  expect(updateCoursesList([], ["History", "Geography"])).to.deep.equal(["history", "geography"]);
});

it('Does not add a new course if it exactly matches an existing course in lower case', () => {
  expect(updateCoursesList(["Programming"], ["Programming"])).to.deep.equal(["PROGRAMMING"]);
});

it('Correctly processes mixed case inputs by adjusting case as necessary', () => {
  expect(updateCoursesList(["Biology", "Chemistry"], ["biology", "PHYSICS"])).to.deep.equal(["BIOLOGY", "Chemistry", "physics"]);
});

it('Processes an empty list of new courses by returning the unchanged current list', () => {
  expect(updateCoursesList(["Math", "Science"], [])).to.deep.equal(["Math", "Science"]);
});

it('Correctly adds a new course that differs only in case from an existing course', () => {
  expect(updateCoursesList(["art"], ["Art"])).to.deep.equal(["ART"]);
});

it('Updates multiple existing courses to UPPER CASE when matched', () => {
  expect(updateCoursesList(["History", "Geography"], ["history", "geography"])).to.deep.equal(["HISTORY", "GEOGRAPHY"]);
});

it('Maintains the original order of courses after updates and additions', () => {
  const originalCourses = ["Music", "Art"];
  const newCourses = ["music", "Dance", "art"];
  const updatedCourses = updateCoursesList(originalCourses, newCourses);
  expect(updatedCourses[0]).to.equal("MUSIC");
  expect(updatedCourses[1]).to.equal("ART");
  expect(updatedCourses[2]).to.equal("dance");
});

it('Adds new courses in lower case when no existing courses match', () => {
  expect(updateCoursesList(["Math", "Science"], ["Technology", "Engineering"])).to.deep.equal(["Math", "Science", "technology", "engineering"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
