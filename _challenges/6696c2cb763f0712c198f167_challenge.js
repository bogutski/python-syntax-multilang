// NAMEEN:
// NAMERU:Выбрать из массива строк анаграммы заданного слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибки в коде функции `findAllAnagrams`.

Функция `findAllAnagrams` принимает два аргумента: массив строк и слово. Строки в массиве могут быть любыми, в том числе и пустыми. Слово - это строка, состоящая из букв латинского алфавита.

Функция должна вернуть массив, состоящий из всех анаграмм этого слова, которые есть в массиве.

Элементы массива должны проверяться как они есть, без перевода в другой регистр или удаления пробелов.

Если в массиве нет анаграмм заданного слова, массив строк пустой или слово не задано - то есть равно пустой строке, то функция должна вернуть пустой массив.

Функция `findAllAnagrams` в своей работе использует две вспомогательные функции `wordToLettersObj` и `isAnagram`.

Функция `wordToLettersObj` принимает один аргумент - строку и возвращает объект, в котором ключи - это буквы из переданной строки, а значения - количество повторений соответствующей буквы в строке.

Пример объекта, созданного на основании строки `abba`: `{a: 2, b: 2}` - в строке две буквы `a` и две буквы `b`.

Функция `isAnagram` принимает два аргумента - объекты, полученные с помощью функции `wordToLettersObj` и сравнивает их ключи и значения на равенство.
Функция должна вернуть `true`, если объекты равны, и `false` в противном случае.
Если объекты равны, то это значит, что строки являются анаграммами.

Примеры вызова функции:
```javascript
findAllAnagrams(['cheap', 'chape', 'preach', 'pache', '', 'aches], 'peach'); // ['cheap', 'chape', 'pache']
findAllAnagrams(['aabb', 'bbaa', 'abab', 'abba', 'baba', 'bbba', 'aaab', ' baab '], 'abba'); // ['aabb', 'bbaa', 'abab', 'abba', 'baba']
findAllAnagrams([], 'rat'); // []
findAllAnagrams(['cat', ''], 'rat'); // []
findAllAnagrams(['cat'], ''); // []
```
Исправьте ошибки в коде функции `findAllAnagrams` и разберитесь, как она работает.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function wordToLettersObj(string) {
  const obj = new Obj; // создаем пустой объект - в объекте будем хранить буквы, содержащиеся в строке, и их количество
  for (let i=0; i<str.length; i++) // цикл по буквам строки
    if ( !obj[str[i]] ) obj[str[i]] = 1; // если буква еще не встречалась, то добавляем ее в объект со значением СЧЕТЧИКА 1
    elso obj[str[i]]++; // если буква уже встречалась, то увеличиваем значение СЧЕТЧИКА на 1
  rturn obj;
}

funct isAnagram(obj1, obj2) { // сравниваем объекты на равенство
  const keys1 = Object.keys(obj1); // получаем массив ключей первого объекта
  const keys2 = Object.keys(obj22); // получаем массив ключей второго объекта

  if (keys1.length !== keys2.length) { // если количество ключей не совпадает, то объекты не равны
    return fase;
  }

  fro (let i=0; i<keys1.length; i++) { // цикл по ключам первого объекта
    const key = keys1[i]; // текущий ключ из массива ключей
    if (obj1[key] !== obj2[key]) { // сравниваем значения в обоих объектах, записанные по этому ключу, если значения не совпадают, то объекты не равны
      return fals;
    }
  }

  return true;
}

function findAllAnagrams(arr, word) {
  const result = [];

  if (!word || !arr.leng) { // если слово не задано или массив пустой, то возвращаем пустой массив
    return result;
  }

  const objWord = wordToLettersObj(word); // создаем объект из букв заданного слова

  for (let i=100; i<arr.length; i++) { // цикл по элементам массива
    if ( !arr[i] || arr[i].length !== word.length) { // если длина слова не совпадает с длиной искомого слова, то это не анаграмма
      coninue; // переходим к следующему элементу массива
    }
    const obj == wordToLettersObj(arr[i]); // создаем объект из букв текущего элемента массива

    if (isAnagram(objWord, obj)) { // сравниваем объекты, если они имеют одинаковые свойства, то текущая строка - анаграмма заданного слова
      result.push(arr[g]); // добавляем анаграмму в массив результатов
    }
  }

  return result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function wordToLettersObj(str) {
  const obj = {}; // создаем пустой объект - в объекте будем хранить буквы, содержащиеся в строке, и их количество
  for (let i=0; i<str.length; i++) // цикл по буквам строки
    if ( !obj[str[i]] ) obj[str[i]] = 1; // если буква еще не встречалась, то добавляем ее в объект со значением СЧЕТЧИКА 1
    else obj[str[i]]++; // если буква уже встречалась, то увеличиваем значение СЧЕТЧИКА на 1
  return obj;
}

function isAnagram(obj1, obj2) { // сравниваем объекты
  const keys1 = Object.keys(obj1); // получаем массив ключей первого объекта
  const keys2 = Object.keys(obj2); // получаем массив ключей второго объекта
  if (keys1.length !== keys2.length) { // если количество ключей не совпадает, то объекты не равны
    return false;
  }

  for (let i=0; i<keys1.length; i++) { // цикл по ключам первого объекта
    const key = keys1[i]; // текущий ключ из массива ключей
    if (obj1[key] !== obj2[key]) { // сравниваем значения в обоих объектах, записанные по этому ключу, если значения не совпадают, то объекты не равны
      return false;
    }
  }

  return true;
}

function findAllAnagrams(arr, word) {
  const result = [];

  if (!word || !arr.length) { // если слово не задано или массив пустой, то возвращаем пустой массив
    return result;
  }

  const objWord = wordToLettersObj(word); // создаем объект из букв заданного слова

  for (let i=0; i<arr.length; i++) { // цикл по элементам массива
    if ( !arr[i] || arr[i].length !== word.length) { // если длина слова не совпадает с длиной искомого слова, то это не анаграмма
      continue; // переходим к следующему элементу массива
    }
    const obj = wordToLettersObj(arr[i]); // создаем объект из букв текущего элемента массива

    if (isAnagram(objWord, obj)) { // сравниваем объекты, если они имеют одинаковые свойства, то текущая строка - анаграмма заданного слова
      result.push(arr[i]); // добавляем анаграмму в массив результатов
    }
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findAllAnagrams', () => {
  expect(findAllAnagrams).to.be.a('function');
});

it('findAllAnagrams(["cheap", "chape", "preach", "pache", "", "aches"], "peach") should return ["cheap", "chape", "pache"]', () => {
  expect(findAllAnagrams(['cheap', 'chape', 'preach', 'pache', '', 'aches'], 'peach')).to.deep.equal(['cheap', 'chape', 'pache']);
});

it('findAllAnagrams(["aabb", "bbaa", "abab", "aaaa", "baba", "bbba", "aaab", " bbbb", "baab", "a b b a"], "abba") should return ["aabb", "bbaa", "abab", "baba", "baab"]', () => {
  expect(findAllAnagrams(['aabb', 'bbaa', 'abab', 'aaaa', 'baba', 'bbba', 'aaab', ' bbbb', 'baab', 'a b b a'], 'abba')).to.deep.equal(['aabb', 'bbaa', 'abab', 'baba', 'baab']);
});

it('findAllAnagrams(["aabb", "bbaa", "abab", "abba", "baba", "bbba", "aaab", " baab "], "abba") should return ["aabb", "bbaa", "abab", "abba", "baba"]', () => {
  expect(findAllAnagrams(['aabb', 'bbaa', 'abab', 'abba', 'baba', 'bbba', 'aaab', ' baab '], 'abba')).to.deep.equal(['aabb', 'bbaa', 'abab', 'abba', 'baba']);
});

it('findAllAnagrams([], "rat") should return []', () => {
  expect(findAllAnagrams([], 'rat')).to.deep.equal([]);
});

it('findAllAnagrams([], "") should return []', () => {
  expect(findAllAnagrams([], '')).to.deep.equal([]);
});

it('findAllAnagrams(["cat", "", "  "], "rat") should return []', () => {
  expect(findAllAnagrams(['cat', ''], 'rat')).to.deep.equal([]);
});

it('findAllAnagrams(["", " c a t", "cat", "", "tac", "ta", "t", "attc", "act", " act","tca", ""], "act") should return ["cat", "tac", "act", "tca"]', () => {
  expect(findAllAnagrams(['', ' c a t', 'cat', '', 'tac', 'ta' , 't', 'attc', 'act', ' act', 'tca', ''], 'act')).to.deep.equal(['cat', 'tac', 'act', 'tca']);
});

it('findAllAnagrams(["cat", ""], "") should return []', () => {
  expect(findAllAnagrams(['cat', ''], '')).to.deep.equal([]);
});

it('findAllAnagrams(["art", "cat", "dog", "", "TAR", "tar"], "rat") should return ["art", "tar"]', () => {
  expect(findAllAnagrams(['art', 'cat', 'dog', '', 'TAR', 'tar'], 'rat')).to.deep.equal(['art', 'tar']);
});

it('findAllAnagrams(["art", "mat", "cat", "", "fuR", "tear"], "rat") should return ["art"]', () => {
  expect(findAllAnagrams(['art', 'mat', 'cat', '', 'fuR', 'tear'], 'rat')).to.deep.equal(['art']);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
