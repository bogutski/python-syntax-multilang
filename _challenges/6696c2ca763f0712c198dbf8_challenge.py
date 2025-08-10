// NAMEEN:Double name
// NAMERU:Двойное имя

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-9.png)

Often Americans have two personal names.

Suppose the variable `name` stores the first name `Emma`.

The variable `name` needs to get the first two names separated by a space.

Write a command that changes the existing value of the `name` variable by concatenating it with the name 'Kate' with a space.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-9.png)

Часто американцы имеют два личных имени.

Предположим, что в переменной `name` уже хранится первое имя `Emma`.

Требуется в переменной `name` получить два первых имени через пробел.

Запишите команду, которая изменяет имеющееся значение переменной `name`, соединяя его с именем 'Kate' через пробел.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Similar example:
```python
name = "Alice"
name = name + " " + "Marie"
```
HINTENEND
*/

/*
HINTRUSTART
Похожий пример:
```python
name = "Alice"
name = name + " " + "Marie"
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
name = "Emma"
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
name = "Emma"
name = name + " " + "Kate"
// SOLUTIONEND

// OPENTESTSSTART
it('The "name" variable contains a value Emma Kate', () => {
    expect(name).eq('Emma Kate');
});

it('The "name" is type of string', () => {
    expect(typeof name).eq('string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
