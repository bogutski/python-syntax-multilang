// NAMEEN:
// NAMERU:Составитель аббревиатур

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Аббревиатура — это сокращение слова или словосочетания, образованное из первых букв слов, из которых оно состоит. Например, BMW — это аббревиатура, образованная из первых букв слов «Bayerische Motoren Werke»

Напишите функцию `makeAcronym`, которая принимает три строки и возвращает аббревиатуру, составленную из первых букв этих строк.

Пример запуска функции:
```javascript
makeAcronym('   Kentucky', ' Fried', 'Chicken'); // 'KFC'
makeAcronym('  node',    package', '    Manager'); // 'NPM'
makeAcronym('    national', ' hockey', 'League'); // 'NHL'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function makeAcronym(string1, string2, string3) {
  return (
    string1.trim()[0].toUpperCase() +
    string2.trim()[0].toUpperCase() +
    string3.trim()[0].toUpperCase()
  );
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function makeAcronym', () => {
  expect(makeAcronym).to.be.a('function');
});

it('makeAcronym("   Kentucky", " Fried", "Chicken") should return "KFC"', () => {
  expect(makeAcronym('   Kentucky', ' Fried', 'Chicken')).to.be.equal('KFC');
});

it('makeAcronym("  node",    package", "    Manager") should return "NPM"', () => {
  expect(makeAcronym('  node', 'package', '    Manager')).to.be.equal('NPM');
});

it('makeAcronym("    national", " hockey", "League") should return "NHL"', () => {
  expect(makeAcronym('    national', ' hockey', 'League')).to.be.equal('NHL');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
