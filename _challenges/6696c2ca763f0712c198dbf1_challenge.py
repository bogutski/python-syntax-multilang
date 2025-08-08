// NAMEEN:Increase by 5
// NAMERU:Увеличение на 5

/*
INSTRUCTIONENSTART
Create a variable `count` and assign it the value `20`.
Then increment the existing value of the `count` variable by `5`.
To do this, write the command:

```python
count = 20
count = count + 5
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `count` и присвойте ей значение `20`:

```python
count = 20
```

Затем запишите команду, увеличивающую имеющееся значение переменной count на `5`:
```python
count = count + 5
```

Итого, в итоге должно получиться так:
```python
count = 20
count = count + 5
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART

HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
count = 20
count = count + 5
// SOLUTIONEND

// OPENTESTSSTART
it('"count" variable contains a value', () => {
  expect(count).not.undefined;
});

it('The data type of the "count" variable is number', () => {
  expect(count).a('number');
});

it('The "count" variable contains 25', () => {
  expect(count).eq(25);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
