// NAMEEN:
// NAMERU:Математические операции с элементами массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mathOperations`, которая принимает два параметра - 2 массива с числами.

Функция должна вернуть результат математической операции c последними элементами массивов.

* Если `последний элемент первого массива больше последнего элемента второго массива`,
  то функция должна вернуть `разницу` этих элементов.
* Если `последний элемент первого массива меньше последнего элемента второго массива`,
  то функция должна вернуть `сумму` этих элементов.
* Если `последний элемент первого массива равен последнему элементу второго массива`,
  то функция должна вернуть `произведение` этих элементов.

Пример работы функции:
```javascript
mathOperations([1, 2, 3], [4, 5, 12]); // 15
mathOperations([11, 24, 63, 3], [4, 5, 1]); // 2
mathOperations([10, 17, 87, 90, 3], [4, 41, 5, 3]); // 9
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mathOperations(numbers1, numbers2) {
    if (numbers1[numbers1.length - 1] > numbers2[numbers2.length - 1]) {
        return numbers1[numbers1.length - 1] - numbers2[numbers2.length - 1];
    } else if (numbers1[numbers1.length - 1] < numbers2[numbers2.length - 1]) {
        return numbers1[numbers1.length - 1] + numbers2[numbers2.length - 1];
    } else {
        return numbers1[numbers1.length - 1] * numbers2[numbers2.length - 1];
    }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function mathOperations', () => {
    expect(mathOperations).to.be.a('function');
});

it('mathOperations([1, 2, 3], [4, 5, 12]) should return 15', () => {
    expect(mathOperations([1, 2, 3], [4, 5, 12])).to.be.equal(15);
});

it('mathOperations([1, 2, 3], [4, 5, 1]) should return 2', () => {
    expect(mathOperations([1, 2, 3], [4, 5, 1])).to.be.equal(2);
});

it('mathOperations([1, 2, 3], [4, 5, 3]) should return 9', () => {
    expect(mathOperations([1, 2, 3], [4, 5, 3])).to.be.equal(9);
});

it('mathOperations([1, 2, 3, -3, 7, -15], [4, 5, 3, 8, 10, 11]) should return -4', () => {
    expect(mathOperations([1, 2, 3, -3, 7, -15], [4, 5, 3, 8, 10, 11])).to.be.equal(-4);
});

it('mathOperations([1, 2, 3, -3, 7, -5], [4, 5, 3, 8, 10, -5]) should return 25', () => {
    expect(mathOperations([1, 2, 3, -3, 7, -5], [4, 5, 3, 8, 10, -5])).to.be.equal(25);
});

it('mathOperations([1, 2, 3, -3, 7, 17], [4, 5, 3, 8, 10, -35]) should return 52', () => {
    expect(mathOperations([1, 2, 3, -3, 7, 17], [4, 5, 3, 8, 10, -35])).to.be.equal(52);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
