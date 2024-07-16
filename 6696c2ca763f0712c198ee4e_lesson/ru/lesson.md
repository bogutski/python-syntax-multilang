Разберем задачу, в которой надо развернуть каждое слово в строке.

Необходимо, чтобы каждое слово осталось на своем месте, пробелы остались на своих местах, а каждое слово развернулось.

```javascript
const str = 'hello js pasv coding com';
           //olleh sj vsap gnidoc moc  // предполагаем получить такой результат

let res = '';                           // введем переменную, в которую будем записывать результат
let word = '';                          // введем переменную, в которую будем аккумулировать слово

for(let i = 0; i < str.length; i++){    // создаем цикл, чтобы пройтись по каждому символу строки
    if(str[i] === ' '){                 // если символ равен пробелу, то
    res +=reverse(word)                 // нужно делать реверс слова
    } else if(i === str.length - 1) {   // когда мы дошли до последнего символа
      word += str[i];                   // добавляем символ в переменную word
      res +=reverse(word) 
    } else {                            // иначе
        word += str[i];                 // добавляем символ в переменную word
    }

}

function reverse(str){                 // создадим функцию reverse
return str.toUpperCase()               // пока для примера функция будет только переводить строку в верхний регистр
}                                      // чтобы нам было видно, что функция работает


console.log(res); //  "HELLOHELLOHELLOJSHELLOJSPASVHELLOJSPASVCODINGHELLOJSPASVCODINGCOM"
```
Получили очень странный результат.

Это случилось потому что нигде в коде мы не очищаем переменную `word`.

```javascript
const str = 'hello js pasv coding com';
           //olleh sj vsap gnidoc moc    
let res = '';                          
let word = '';                          

for(let i = 0; i < str.length; i++){    
    if(str[i] === ' '){                
    res +=reverse(word);
    word = '';                          //  очищаем переменную word
    } else if(i === str.length - 1) {   
      word += str[i];                 
      res +=reverse(word) 
      word = '';                        // очищаем переменную word
    } else {                            
        word += str[i];                     
    }

}

function reverse(str){                 
return str.toUpperCase()               
}                                      


console.log(res); //  "HELLOJSPASVCODINGCOM"
```
Стало лучше, но нет пробелов.

```javascript
const str = 'hello js pasv coding com';
           //olleh sj vsap gnidoc moc    
let res = '';                          
let word = '';                          

for(let i = 0; i < str.length; i++){    
    if(str[i] === ' '){                
    res +=reverse(word);
    word = '';
    res += ' ';                         // добавляем пробел
    } else if(i === str.length - 1) {   
      word += str[i];                 
      res +=reverse(word)               // в последнее слово добавлять пробел не нужно
      word = '';                        
    } else {                            
        word += str[i];                     
    }

}

function reverse(str){                 
return str.toUpperCase()               
}                                      


console.log(res); //  "HELLO  JS PASV CODING COM"
```
Теперь все хорошо, пробелы на месте.
Давайте теперь напишем правильно функцию `reverse`, чтобы она разворачивала слова, а не переводила их в верхний регистр.

```javascript
const str = 'hello js pasv coding com';
let res = '';
let word = '';

for(let i = 0; i < str.length; i++){
  if(str[i] === ' '){
    res +=reverse(word);
    word = '';
    res += ' ';                        
  } else if(i === str.length - 1) {
    word += str[i];
    res +=reverse(word)              
    word = '';
  } else {
    word += str[i];
  }

}

function reverse(str){                 
  let res = '';                          // создаем переменную, в которую будем записывать результат
  for(let i = 0; i < str.length; i++) {   // создаем цикл, чтобы пройтись по каждому символу строки
    res = str[i] + res;                  // каждый символ добавляем в начало строки
  }
  return res;
}

console.log(res); //  "olleh  sj vsap gnidoc moc"
```

Получилось как надо! Слова перевернуты, пробелы на своих местах.

Обратите внимание, что внутри функции `reverse` мы используем переменную `res`. Хотя она и имеет такое же имя, как и переменная `res` вне функции, 
это разные переменные. Переменная `res` внутри функции называется локальной переменной. Она видна только внутри функции. Переменная `res` вне функции называется глобальной переменной. Она видна везде.

Для улучшения кода:

Мы видим, что некоторые части кода повторяются
    
```javascript
res +=reverse(word)              
word = '';
```

Можно подумать, каким образом мы можем упростить либо укоротить код. Для самостоятельного рассмотрения.

Заметьте, что в коде мы используем функцию `reverse` до ее объявления.

С функциями так делать можно. Это называется `"всплытие функций"` или `"hoisting"`.

Но с переменными так делать нельзя!
