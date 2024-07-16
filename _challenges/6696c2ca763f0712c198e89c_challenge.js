// NAMEEN:
// NAMERU:Код Морзе

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дана таблица с кодом Морзе для букв английского алфавита:
```javascript
Символ  Код        Символ  Код        Символ  Код
A       .-         J       .---       S       ...
B       -...       K       -.-        T       -
C       -.-.       L       .-..       U       ..-
D       -..        M       --         V       ...-
E       .          N       -.         W       .--
F       ..-.       O       ---        X       -..-
G       --.        P       .--.       Y       -.--
H       ....       Q       --.-       Z       --..
I       ..         R       .-.
```

Напишите функцию `codeMorse`, которая кодирует текст в соответствии с кодом Морзе.

Условия:
* На вход функция принимает один параметр - строку, состоящую ровно из 5 символов;
* Строка может содержать только буквы английского алфавита, цифры и пробелы;
* Регистр букв не имеет значения;
* Пробелы, содержащиеся в строке, при кодировании должны игнорироваться;
* Цифры, содержащиеся в строке, не кодируются и остаются в исходном виде;
* Все закодированные символы, в том числе цифры, в результирующей строке должны быть разделены одним пробелом.

Примеры запуска функции:
```javascript
codeMorse('AbC d'); // '.- -... -.-. -..'
сodeMorse('B 747'); // '-... 7 4 7'
codeMorse('  1 2'); // '1 2'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
  const morse = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
  };
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function codeMorse(str) {
  const morse = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
  };

  str = str.toUpperCase();
  let strNew = '';
  if (str[0] !== ' ') {
    if (str[0] in morse) {
      strNew += morse[str[0]] + ' ';
    } else {
      strNew += str[0] + ' ';
    }
  }
  if (str[1] !== ' ') {
    if (str[1] in morse) {
      strNew += morse[str[1]] + ' ';
    } else {
      strNew += str[1] + ' ';
    }
  }
  if (str[2] !== ' ') {
    if (str[2] in morse) {
      strNew += morse[str[2]] + ' ';
    } else {
      strNew += str[2] + ' ';
    }
  }
  if (str[3] !== ' ') {
    if (str[3] in morse) {
      strNew += morse[str[3]] + ' ';
    } else {
      strNew += str[3] + ' ';
    }
  }
  if (str[4] !== ' ') {
    if (str[4] in morse) {
      strNew += morse[str[4]];
    } else {
      strNew += str[4];
    }
  }
  return strNew;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function codeMorse', () => {
  expect(typeof codeMorse).eq('function');
});

it('codeMorse("MarcO");  // "-- .- .-. -.-. ---"', () => {
  expect(codeMorse('MarcO')).eq('-- .- .-. -.-. ---');
});

it('codeMorse(" 94 6");  // "9 4 6"', () => {
  expect(codeMorse(' 94 6')).eq('9 4 6');
});

it('codeMorse("     ");  // ""', () => {
  expect(codeMorse('     ')).eq('');
});

it('codeMorse("0o0qQ");  // "0 --- 0 --.- --.-"', () => {
  expect(codeMorse('0o0qQ')).eq('0 --- 0 --.- --.-');
});

it('codeMorse("table");  // "- .- -... .-.. ."', () => {
  expect(codeMorse('table')).eq('- .- -... .-.. .');
});

it('codeMorse("abcde");  // ".- -... -.-. -.. ."', () => {
  expect(codeMorse('abcde')).eq('.- -... -.-. -.. .');
});

it('codeMorse("FGHIJ");  // "..-. --. .... .. .---"', () => {
  expect(codeMorse('FGHIJ')).eq('..-. --. .... .. .---');
});

it('codeMorse("klmno");  // "-.- .-.. -- -. ---"', () => {
  expect(codeMorse('klmno')).eq('-.- .-.. -- -. ---');
});

it('codeMorse("PQRST");  // ".--. --.- .-. ... -"', () => {
  expect(codeMorse('PQRST')).eq('.--. --.- .-. ... -');
});

it('codeMorse("uvwxy");  // "..- ...- .-- -..- -.--"', () => {
  expect(codeMorse('uvwxy')).eq('..- ...- .-- -..- -.--');
});

it('codeMorse("zZzZz");  // "--.. --.. --.. --.. --.."', () => {
  expect(codeMorse('zZzZz')).eq('--.. --.. --.. --.. --..');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
