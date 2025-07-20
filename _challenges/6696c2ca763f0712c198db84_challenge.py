// NAMEEN:Fix the scope error
// NAMERU:Исправьте ошибку области видимости

/*
INSTRUCTIONENSTART
There is a variable `a` declared inside a function.

You need to make sure that the `print(a)` outside the function does not throw an error.

Fix the code so that the value of `a` can be printed after the function is called.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Переменная `a` была объявлена внутри функции.

Нужно сделать так, чтобы команда `print(a)` вне функции не вызывала ошибку.

Исправьте код так, чтобы значение `a` можно было вывести после вызова функции.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Try moving the variable `a` outside the function.
```python
a = 10
def show():
    pass
show()
print(a)
```
HINTENEND
*/

/*
HINTRUSTART
Попробуйте переместить переменную `a` за пределы функции.
```python
a = 10
def show():
    pass
show()
print(a)
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
def show():
    a = 10
    pass
show()
print(a)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
a = 10
def show():
    pass
show()
print(a)
// SOLUTIONEND

// OPENTESTSSTART

// OPENTESTSEND

// HIDDENTESTSSTART
a = 10
def show():
    pass
show()
print(a)
// HIDDENTESTSEND
