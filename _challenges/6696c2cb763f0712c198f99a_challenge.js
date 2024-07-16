// NAMEEN:
// NAMERU:Замена буквы в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `replaceLetter`, которая принимает строку и заменяет все буквы `i` (без учета регистра) на буквы латинского алфавита, начиная с `а`.

Каждая следующая замена буквы `i` должна заменяться следующей буквой алфавита.


Примеры запуска функции:
```javascript
console.log(replaceLetter('Mississippi')); // "Massbsscppd"
console.log(replaceLetter('Impossibility')); // "ampossbbcldty"
console.log(replaceLetter('Illinois')); // "allbnocs"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function replaceLetter(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceLetter(str){
    let asc = 97
    let newStr = ''

    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === 'i'){
            newStr += String.fromCharCode(asc)
            asc++
        } else newStr += str[i]
    }
    return newStr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function replaceLetter', () => {
  expect(replaceLetter).to.be.a('function');
});

it('replaceLetter("Mississippi") should return "Massbsscppd"', function() {
  expect(replaceLetter("Mississippi")).to.equal("Massbsscppd");
});

it('replaceLetter("Impossibility") should return "ampossbbcldty"', function() {
  expect(replaceLetter("Impossibility")).to.equal("ampossbbcldty");
});

it('replaceLetter("Illinois") should return "allbnocs"', function() {
  expect(replaceLetter("Illinois")).to.equal("allbnocs");
});

it('replaceLetter("internationalization") should return "anternatbonalczatdon"', function() {
  expect(replaceLetter("internationalization")).to.equal("anternatbonalczatdon");
});

it('replaceLetter("invisibility") should return "anvbscbdlety"', function() {
  expect(replaceLetter("invisibility")).to.equal("anvbscbdlety");
});

it('replaceLetter("Ignition") should return "agnbtcon"', function() {
  expect(replaceLetter("Ignition")).to.equal("agnbtcon");
});

it('replaceLetter("Independent") should return "andependent"', function() {
  expect(replaceLetter("Independent")).to.equal("andependent");
});

it('replaceLetter("Incidence") should return "ancbdence"', function() {
  expect(replaceLetter("Incidence")).to.equal("ancbdence");
});

it('replaceLetter("Iterative") should return "ateratbve"', function() {
  expect(replaceLetter("Iterative")).to.equal("ateratbve");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
