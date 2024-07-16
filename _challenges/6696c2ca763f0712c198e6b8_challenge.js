// NAMEEN:
// NAMERU:Сумма четных и нечетных чисел. Объекты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Запишите функцию `evenOddSum`, которая принимает 5 параметров в виде чисел.

Функция должна возвращать объект, в котором будут два свойства:
* `even` - сумма четных чисел
* `odd` - сумма нечетных чисел

Пример запуска функции:
```javascript
evenOddSum(1, 2, 3, 4, 5) // {even: 6, odd: 9}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function evenOddSum(n1, n2, n3, n4, n5) {
    let even = 0;
    let odd = 0;
    if (n1 % 2 === 0) {
        even += n1;
    } else {
        odd += n1;
    }
    if (n2 % 2 === 0) {
        even += n2;
    } else {
        odd += n2;
    }
    if (n3 % 2 === 0) {
        even += n3;
    } else {
        odd += n3;
    }
    if (n4 % 2 === 0) {
        even += n4;
    } else {
        odd += n4;
    }
    if (n5 % 2 === 0) {
        even += n5;
    } else {
        odd += n5;
    }
    return {even: even, odd: odd};
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function evenOddSum', () => {
    expect(evenOddSum).to.be.a('function');
});

it('evenOddSum(1, 2, 3, 4, 5) return {even: 6, odd: 9}', () => {
    expect(evenOddSum(1, 2, 3, 4, 5)).eql({even: 6, odd: 9});
});

it('evenOddSum(2, 3, 4, 5, 6) return {even: 12, odd: 8}', () => {
    expect(evenOddSum(2, 3, 4, 5, 6)).eql({even: 12, odd: 8});
});

it('evenOddSum(1, 3, 5, 7, 9) return {even: 0, odd: 25}', () => {
    expect(evenOddSum(1, 3, 5, 7, 9)).eql({even: 0, odd: 25});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
