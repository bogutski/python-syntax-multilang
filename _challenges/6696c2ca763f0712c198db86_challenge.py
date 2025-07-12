// NAMEEN:Make the function change the global variable
// NAMERU:Сделайте так, чтобы функция изменила глобальную переменную

/*
INSTRUCTIONENSTART
The variable `message` is defined outside the function.

Inside the function, you assign a new value to `message`, but it doesn’t affect the global one.

Fix the code so that the final `print()` shows `Python`.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Переменная `message` определена вне функции.

Внутри функции вы присваиваете новое значение переменной `message`, но это не влияет на глобальную.

Исправьте код так, чтобы финальный `print()` вывел `Python`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Use the `global` keyword to modify the global variable inside the function.
HINTENEND
*/

/*
HINTRUSTART
Используйте ключевое слово `global`, чтобы изменить глобальную переменную внутри функции.
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
message = "Hello"

def greet():
    message = "Python"

greet()
print(message)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
message = "Hello"

def greet():
    global message
    message = "Python"

greet()
print(message)
// SOLUTIONEND

// OPENTESTSSTART

// OPENTESTSEND

// HIDDENTESTSSTART
message = "Hello"

def greet():
    global message
    message = "Python"

greet()
print(message)
// HIDDENTESTSEND
