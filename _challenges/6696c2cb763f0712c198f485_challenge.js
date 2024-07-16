// NAMEEN:
// NAMERU:Генерация HTML списка

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `generateHTMLList`, которая принимает массив строк и возвращает строку, представляющую собой HTML-разметку неупорядоченного списка (<ul>).

Каждый элемент массива должен стать элементом списка (<li>).

Используйте метод `map()` для создания элементов списка и метод `join()` для формирования итоговой строки HTML-разметки.


Пример запуска функции:
```javascript
generateHTMLList(['Apple', 'Banana', 'Cherry']);// '<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>'
generateHTMLList(['1', '2', '3']);// '<ul><li>1</li><li>2</li><li>3</li></ul>'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function generateHTMLList(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function generateHTMLList(arr) {
  const res = arr.map(str => `<li>${str}</li>`)
  return '<ul>' + res.join('') + '</ul>';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function generateHTMLList', () => {
  expect(generateHTMLList).to.be.a('function');
});

it('Function generateHTMLList should include method map()', () => {
  const res = generateHTMLList.toString()
  expect(res).to.include('.map(')
});

it("generateHTMLList(['Apple', 'Banana', 'Cherry']) should return '<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>'", () => {
  expect(generateHTMLList(["Apple", "Banana", "Cherry"])).to.equal("<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>");
});

it("generateHTMLList([]) should return '<ul></ul>'", () => {
  expect(generateHTMLList([])).to.equal("<ul></ul>");
});

it("generateHTMLList(['Single Item']) should return '<ul><li>Single Item</li></ul>'", () => {
  expect(generateHTMLList(["Single Item"])).to.equal("<ul><li>Single Item</li></ul>");
});

it("generateHTMLList(['First', 'Second']) should return '<ul><li>First</li><li>Second</li></ul>'", () => {
  expect(generateHTMLList(["First", "Second"])).to.equal("<ul><li>First</li><li>Second</li></ul>");
});

it("generateHTMLList(['Item 1', 'Item 2', 'Item 3', 'Item 4']) should return '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li></ul>'", () => {
  expect(generateHTMLList(["Item 1", "Item 2", "Item 3", "Item 4"])).to.equal("<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li></ul>");
});

it("generateHTMLList(['Hello', 'World']) should return '<ul><li>Hello</li><li>World</li></ul>'", () => {
  expect(generateHTMLList(["Hello", "World"])).to.equal("<ul><li>Hello</li><li>World</li></ul>");
});

it("generateHTMLList(['HTML', 'CSS', 'JavaScript']) should return '<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>'", () => {
  expect(generateHTMLList(["HTML", "CSS", "JavaScript"])).to.equal("<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>");
});

it("generateHTMLList(['React', 'Vue', 'Angular']) should return '<ul><li>React</li><li>Vue</li><li>Angular</li></ul>'", () => {
  expect(generateHTMLList(["React", "Vue", "Angular"])).to.equal("<ul><li>React</li><li>Vue</li><li>Angular</li></ul>");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
