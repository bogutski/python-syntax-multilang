Для поиска и обращения к символам в строке используются `индексы`.

Каждый символ в строке находится на своем месте, и это место пронумеровано.

### Первый символ всегда находится на индексе `0`

Для наглядности рассмотрим пример:

```javascript
const str = 'Hello PASV';
```

Первый символ этой строки — `H`, ему соответствует индекс `0`. 

Последний символ — `V`, соответствующий индексу `9`. 

У символа `пробел` также имеется индекс на позиции `5`.

Всего в строке `10` символов, то есть длина строки `str.length` равна `10`.

Индекс последнего символа всегда будет равен длине строки минус 1:

`str.length - 1`

В нашем примере:

`индекс последнего символа = str.length - 1 = 10 - 1 = 9`

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/str-length.png)

К символам в строке можно обращаться по их индексам, указывая их в квадратных скобках. 

Рассмотрим пример:

```javascript
const str = 'Hello PASV';
console.log(str[0]); // H - обращение в первому символу строки (индекс 0)
console.log(str[1]); // e
console.log(str[5]); //   - на этом индексе находится пробел
console.log(str[9]); // V
```

Внутри квадратных скобок можно написать значение переменной:

```javascript
const str = 'Hello PASV';

const i = 9;
console.log(str[i]); // V

const j = 8;
console.log(str[j]); // S
```

Обратиться к последнему символу в строке, независимо от ее содержимого, можно используя свойство `length`:

```javascript
const str = 'Hello JS';
const i = str.length - 1;
console.log(str[i]); // S - последний символ строки
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/hello-pasv.png)

Аналогично можно получить предпоследний символ:

```javascript
const j = str.length - 2;
console.log(str[j]); // J
```

Если указывать индексы, значение которых меньше нуля, а также если они выходят за границы строки, получим `undefined`:

```javascript
const str = 'Hello JS';
const i = 8;
const j = -1;
console.log(str[i]); // undefined
console.log(str[j]); // undefined
```

Создадим функцию, в которую будем передавать строку, и она будет возвращать только первый и последний символы:

```javascript
function firstAndLast(str){
  return str[0] + str[str.length - 1];
};

console.log(firstAndLast('Hello JS')); // HS
console.log(firstAndLast('ABC')); // AC
console.log(firstAndLast('AB')); // AB
console.log(firstAndLast('A')); // AA
```

Для более точной работы нашей функции добавим условие проверки длины - если строка состоит из одного символа, то пусть возвращается только этот символ:

```javascript
function firstAndLast(str){
  if(str.length === 1) return str;
  return str[0] + str[str.length - 1];
};

console.log(firstAndLast('A')); // A
```