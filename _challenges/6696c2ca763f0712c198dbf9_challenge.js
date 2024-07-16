// NAMEEN:Double name
// NAMERU:Двойное имя

/*
INSTRUCTIONENSTART
Often Americans have two personal names.
Suppose the variable `name` stores the first name.
The variable `name` needs to get the first two names separated by a space.

There is a command that creates a variable `name` with the value `Ivan`:
```
let name = 'Ivan';
```
Write a command that changes the existing value of the `name` variable by concatenating it with the name 'Francis' with a space. The solution could be as follows:
```
name = name + ' ' + 'Francis';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-9.png)

Часто американцы имеют два личных имени.
Предположим, что в переменной `name` хранится первое имя.
Требуется в переменной `name` получить два первых имени через пробел.

Напишите команду, создающую переменную `name` со значением `Ivan`.

Запишите команду, которая изменяет имеющееся значение переменной `name`, соединяя его с именем 'Francis' через пробел.

Похожий пример:
```javascript
let name = 'Alice';
name = name + ' ' + 'Marie';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let name = 'Ivan';
name = name + ' ' + 'Francis';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let name = 'Ivan';
name = name + ' ' + 'Francis';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let name = 'Ivan';
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let name = 'Ivan';
name = name + ' ' + 'Francis';
// SOLUTIONEND


// OPENTESTSSTART
it('The `name` variable contains a value Ivan Francis', () => {
    expect(name).eq('Ivan Francis');
});

it('The "name" is type of string', () => {
    expect(typeof name).eq('string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
