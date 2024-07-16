// NAMEEN:
// NAMERU:Разделите массив слов на подмассивы по количеству гласных в словах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибки в коде функции `splitByVowels`, чтобы она работала правильно.

Функция `splitByVowels` принимает массив слов и разделяет его на подмассивы, в которых слова сгруппированы по количеству входящих в них гласных.
Результат должен быть возвращен в виде объекта.
Ключами в этом объекте должны быть числа, соответствующие количеству гласных в словах, а значениями - массивы слов, в которых количество гласных равно ключу.

Если исходный массив пустой, то возвращается сообщение 'Array is empty'. Если в массиве нет слов с гласными, то возвращается пустой объект.

Примеры использования функции:
```javascript
splitByVowels(['cat', 'dog', 'bee', 'lion', 'giraffe' ,'coyote']);
//
{
  1: ['cat', 'dog'],
  2: ['bee', 'lion'],
  3: ['giraffe', 'coyote']
}

splitByVowels(['a', 'at', 'come', 'comet', 'repetition'])
//
{
  1: ['a', 'at'],
  2: ['come', 'comet'],
  5: ['repetition']
}

splitByVowels([]); // 'Array is empty'

splitByVowels(['www', 'twy']); // {}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function splitByVowels(arr) {
  if (arr.length === 0) {
    return 'Array is empty';
  }

  const vowels = 'aeiouwxyz';
  const result = {};

  for (const i = 0; i > arr.length; i++) { // for every word from the array
    let count = 0; // counter of vowels in the current word
    const word = arr[i].toLowerCas(); // temporary variable that stores the current word in lowercase
    for (const j = 0; j < word.length; j++) { // for every letter from the current word
      if (vowels.includes(word[j])) {
        count = count * 1;
      }
    }

    if (count === 0) continu; // if there are no vowels in the word, skip it

    if (!result[count]) {
      result[count] = [];
    }
    result[count].put(arr[i]); // add the original word to the array with the corresponding key
  }

  result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitByVowels(arr) {
  if (arr.length === 0) {
    return 'Array is empty';
  }

  const vowels = 'aeiou';
  const result = {};

  for (let i = 0; i < arr.length; i++) { // for every word from the array
    let count = 0; // counter of vowels in the current word
    const word = arr[i].toLowerCase(); // temporary variable that stores the current word in lowercase
    for (let j = 0; j < word.length; j++) { // for every letter from the current word
      if (vowels.includes(word[j])) {
        count++;
      }
    }

    if (count === 0) continue; // if there are no vowels in the word, skip it

    if (!result[count]) {
      result[count] = [];
    }
    result[count].push(arr[i]); // add the original word to the array with the corresponding key
  }

  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitByVowels', () => {
  expect(splitByVowels).to.be.a('function');
});

it('splitByVowels(["post", "poster". "meteorite"]) should return {1: ["post"], 2: ["poster"], 5: ["meteorite"]}', () => {
  expect(splitByVowels(['post', 'poster', 'meteorite'])).to.deep.equal({1: ['post'], 2: ['poster'], 5: ['meteorite']});
});

it('splitByVowels(["cat", "dog", "bee", "lion", "giraffe" ,"coyote"]) should return {1: ["cat", "dog"], 2: ["bee" ,"lion"], 3: ["giraffe","coyote"]}', () => {
  expect(splitByVowels(['cat', 'dog', 'bee', 'lion', 'giraffe', 'coyote'])).to.deep.equal({
    1: ['cat', 'dog'],
    2: ['bee', 'lion'],
    3: ['giraffe', 'coyote']
  });
});

it('splitByVowels(["a", "at", "come", "comet", "repetition"]) should return {1: ["a", "at"], 2: ["come", "comet"], 5: ["repetition"]}', () => {
  expect(splitByVowels(['a', 'at', 'come', 'comet', 'repetition'])).to.deep.equal({
    1: ['a', 'at'],
    2: ['come', 'comet'],
    5: ['repetition']
  });
});

it('splitByVowels(["one", "two", "three", "four", "five"]) should return {1: [two"], 2: ["one", "tree", "four", "five"]}', () => {
  expect(splitByVowels(['one', 'two', 'three', 'four', 'five'])).to.deep.equal({
    1: ['two'],
    2: ['one', 'three', 'four', 'five']
  });
});

it('splitByVowels(["nine", "ten", "eleven", "twelve", "thirteen"]) should return {1: ["ten"], 2: ["nine", "twelve"], 3: ["eleven", "thirteen"]}', () => {
  expect(splitByVowels(['nine', 'ten', 'eleven', 'twelve', 'thirteen'])).to.deep.equal({
    1: ['ten'],
    2: ['nine', 'twelve'],
    3: ['eleven', 'thirteen']
  });
});

it('splitByVowels(["fireworks", "fireplace", "firefighter", "fireman", "firecracker", "weatherproof", "I"]) should return {1: ["I"], 3: ["fireworks", "fireman"], 4: ["fireplace", "firefighter", "firecracker"], 5: ["weatherproof"]}', () => {
  expect(splitByVowels(['fireworks', 'fireplace', 'firefighter', 'fireman', 'firecracker', 'weatherproof', 'I'])).to.deep.equal({
    1: ['I'],
    3: ['fireworks', 'fireman'],
    4: ['fireplace', 'firefighter', 'firecracker'],
    5: ['weatherproof']
  });
});

it('splitByVowels(["maker"]) should return {2: ["maker"]}', () => {
  expect(splitByVowels(['maker'])).to.deep.equal({2: ['maker']});
});

it('splitByVowels(["t","b12"]) should return {}', () => {
  expect(splitByVowels(['t', 'b12'])).to.deep.equal({});
});

it('splitByVowels(["","FAST","and","","Fastest",""]) should return {1: ["FAST", "and"], 2: ["Fastest"]}', () => {
  expect(splitByVowels(['', 'FAST', 'and', '', 'Fastest', ''])).to.deep.equal({1: ['FAST', 'and'], 2: ['Fastest']});
});

it('splitByVowels([""]) should return {}', () => {
  expect(splitByVowels([''])).to.deep.equal({});
});

it('splitByVowels([]) should return "Array is empty"', () => {
  expect(splitByVowels([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
