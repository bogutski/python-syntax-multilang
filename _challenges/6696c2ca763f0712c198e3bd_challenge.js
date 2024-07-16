// NAMEEN:
// NAMERU:Средняя длина пяти строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageLength`, которая принимает пять строк и возвращает среднюю длину этих строк.

Для вычисления средней длины сложите длины всех строк и разделите на их количество.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageLength(str1, str2, str3, str4, str5) {
  return (str1.length + str2.length + str3.length + str4.length + str5.length) / 5;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageLength', () => {
  expect(averageLength).to.be.a('function');
});

it('averageLength("aaa", "aa", "a", "aaaa", "aaaaa") should return 3', () => {
  expect(averageLength('aaa', 'aa', 'a', 'aaaa', 'aaaaa')).to.equal(3);
});

it('averageLength("aaa", "aa", "a", "aaaaaaaa", "aaaaa") should return 3.8', () => {
  expect(averageLength('aaa', 'aa', 'a', 'aaaaaaaa', 'aaaaa')).to.equal(3.8);
});

it('averageLength("aaa", "aa", "a", "aa", "aaaa") should return 2.4', () => {
  expect(averageLength('aaa', 'aa', 'a', 'aa', 'aaaa')).to.equal(2.4);
});

it('averageLength("a", "", "", "a", "aa") should return 0.8', () => {
  expect(averageLength('a', '', '', 'a', 'aa')).to.equal(0.8);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
