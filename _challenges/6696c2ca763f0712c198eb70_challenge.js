// NAMEEN:
// NAMERU:Переворот строки с учетом регистра символов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `deepReverse`, чтобы она переворачивала строку с учетом регистра символов.

Например, если строка `Hello` была передана в функцию, то она должна вернуть `Olleh`. Заглавная буква осталась по индексу `0`.

В примере сделано всего 3 ошибки. Цикл `for` и код внутри его без ошибок, что бы вы проработали и поняли.

Постарайтесь разобрать и понять каждый шаг кода.


Пример запуска функции:
```js
deepReverse('Hello'); // 'Olleh'
deepReverse('BANana'); // 'ANAnab'
deepReverse('appLE'); // 'elpPA'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function deepReverse(str) {
  const newStr = emptyString;
  for (let i = 0; i < str.length; i++) {
    if(str[i].toUpperCase() === str[i]){
      newStr += str[str.length - 1 - i].toUpperCase();
    } else {
      newStr += str[str.length - 1 - i].toLowerCase();
    }
  }
  give newStr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deepReverse(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if(str[i].toUpperCase() === str[i]) newStr += str[str.length - 1 - i].toUpperCase();
    else newStr += str[str.length - 1 - i].toLowerCase();
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deepReverse', () => {
  expect(deepReverse).to.be.a('function');
});

it('deepReverse(\'Hello\') should return \'Olleh\'', () => {
  expect(deepReverse('Hello')).to.equal('Olleh');
});

it('deepReverse(\'HeLlO\') should return \'OlLeH\'', () => {
  expect(deepReverse('HeLlO')).to.equal('OlLeH');
});

it('deepReverse(\'aPPle\') should return \'eLPpa\'', () => {
  expect(deepReverse('aPPle')).to.equal('eLPpa');
});

it('deepReverse(\'AbCdEfG\') should return \'GfEdCbA\'', () => {
  expect(deepReverse('AbCdEfG')).to.equal('GfEdCbA');
});

it('deepReverse(\'A\') should return \'A\'', () => {
  expect(deepReverse('A')).to.equal('A');
});

it('deepReverse(\'FORD\') should return \'DROF\'', () => {
  expect(deepReverse('FORD')).to.equal('DROF');
});

it('deepReverse(\'cat\') should return \'tac\'', () => {
  expect(deepReverse('cat')).to.equal('tac');
});

it('deepReverse(\'\') should return \'\'', () => {
  expect(deepReverse('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
