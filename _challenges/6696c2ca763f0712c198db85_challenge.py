// NAMEEN:Fix the print to output 5
// NAMERU:Сделайте так, чтобы в выводе было число 5

/*
INSTRUCTIONENSTART
The function `demo()` changes the value of variable `a`.

Fix the code so that the print outside the function shows the global `a`, which equals 5.

You can rename the local variable to avoid overwriting the global one.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `demo()` изменяет значение переменной `a`.

Сделайте так, чтобы `print()` вне функции показывал глобальное значение переменной `a`, равное 5.

Вы можете переименовать локальную переменную, чтобы избежать перезаписи глобальной.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```python
a = 5

def demo():
    a = 100

demo()
print(a)
```
HINTENEND
*/

/*
HINTRUSTART
```python
a = 5

def demo():
    a = 100

demo()
print(a)
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
a = 5

def demo():
    global a
    a = 100

demo()
print(a)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
a = 5

def demo():
    a = 100

demo()
print(a)
// SOLUTIONEND

// OPENTESTSSTART

// OPENTESTSEND

// HIDDENTESTSSTART
a = 5

def demo():
    a = 100

demo()
print(a)
// HIDDENTESTSEND
