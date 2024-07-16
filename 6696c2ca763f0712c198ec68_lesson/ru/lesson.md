### Нахождение количества гласных букв в строке с использованием метода `includes()`

Давайте рассмотрим пример, в котором мы будем искать количество гласных букв в строке. 

Для этого мы будем использовать цикл `for` и метод `includes()`.

```javascript
const str = 'HELLO programming WORLD!';
const vowels = 'aeiouAEIOU';            // гласные буквы

let count = 0;                          // счетчик гласных букв

for(let i = 0; i < str.length; i++){    // перебираем строку
    if(vowels.includes(str[i])){        // если элемент встречается в переменной `vowels`
        count++;                        // увеличиваем счетчик на 1
    }
}

console.log(count);                     // 6
```


### Нахождение количества гласных букв в строке с использованием только цикла `for`

В этом примере мы будем использовать два цикла `for`, чтобы найти количество гласных букв в строке.

Первый цикл будет проходить по строке с нашим предложением, а второй цикл будет проходить по строке с гласными буквами.

```javascript
const str = "Let's try to count the number of vowels in this sentence";
const vowels = 'aeiouAEIOU';                  // гласные буквы

let count = 0;

for(let i = 0; i < str.length; i++){          // проходим по строке в переменной `str`
    for(let j = 0; j < vowels.length; j++){   // проходим по строке в переменной `vowels`
        if(str[i] === vowels[j]){             // если элемент встречается в переменной `vowels`
            count++;                          // увеличиваем счетчик на 1
        }
    }
}

console.log(count);                           // 15
```


### Нахождение количества согласных букв в строке с использованием циклов

В этом примере мы создадим переменную `consonants`, в которой будут храниться все согласные буквы.

Затем мы будем использовать два цикла `for`, чтобы найти количество согласных букв в строке.

```javascript
const str = "Let's try to count the number of consonants in this sentence";
const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';      // согласные буквы

let count = 0;

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < consonants.length; j++){
        if(str[i] === consonants[j]){            // если элемент встречается в переменной `consonants`
            count++;                             // увеличиваем счетчик на 1
        }
    }
}

console.log(count);                              // 33
```


### Нахождение цифр в строке и добавление их в массив

В этом задании мы будем искать цифры в строке и добавлять их в массив.

```javascript
const str = "0Le1t's f2ind 34 all5 6numbers 789";
const numbers = '0123456789';                          // все цифры

const array = [];                                      // создаем пустой массив

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < numbers.length; j++){
        if(str[i] === numbers[j]) array.push(str[i]);  // если элемент из строки равен цифре, то добавляем ее в массив
    }
}

console.log(array);   // [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
```


### Сортировка строки на гласные, согласные и остальные символы

В этом примере мы будем сортировать строку на `гласные`, `согласные` и `остальные символы`.

Для этого создадим три массива и будем добавлять в них элементы, которые соответствуют определенным условиям.

```javascript
const str = "789  Let's  456  sort 0123";
const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';   // все согласные
const vowels = 'aeiouAEIOU';           // все гласные

const arrOfConsonants = [];            // массив для согласных
const arrOfVowels = [];                // массив для гласных
const arrElse = [];                    // массив для остальных элементов

for(let i = 0; i < str.length; i++){
    if (consonants.includes(str[i])) arrOfConsonants.push(str[i]);   // если элемент входит в строку с согласными, то добавляем его в массив с согласными
    else if (vowels.includes(str[i])) arrOfVowels.push(str[i]);      // если элемент входит в строку с гласными, то добавляем его в массив с гласными
    else arrElse.push(str[i]);                                       // иначе добавляем его в массив с остальными элементами
}

console.log(arrOfConsonants); // [ 'L', 't', 's', 's', 'r', 't' ]
console.log(arrOfVowels); // [ 'e', 'o' ]
console.log(arrElse); // ['7', '8', '9', ' ', ' ', "'", ' ', ' ', '4', '5', '6', ' ', ' ', ' ', '0', '1', '2', '3']
```