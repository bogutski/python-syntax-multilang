Переменные в JS могут начинаться с `буквы`, знака подчеркивания `_` или знака доллара `$`.

```javascript
const name = 'Alice';
const _age = 20;
const $color = 'red';
```

Называйте переменные так, чтобы было понятно, что в них хранится.

Чем проще и понятнее имя переменной, тем лучше.

С практикой вы научитесь давать переменным осмысленные имена.

### Несколько примеров переменных про адрес

```javascript
const address = '123, Market street'; // Храним адрес
const city = 'San Francisco'; // город
const state = 'CA'; // штат
const zipCode = '94107'; // почтовый индекс
```

Все эти переменные хранят что-то про адрес, но названия переменных позволяют понять, что именно в них хранится.

Обратите внимание: в этом примере имена переменных состоят только из одного слова.

Не всегда одним словом можно описать содержимое переменной.

Для более точного описания используются несколько слов.

Например: переменная, которая хранит имя пользователя, может называться `userName` или `userFirstName`.

### Пример переменных про собаку

Мы хотим создать переменные, которые хранят информацию про собаку. Например: имя, возраст, породу и цвет.

Можно сделать так:

```javascript
const name = 'Mango';
const age = 2;
const breed = 'shepherd';
const color = 'black';
```

Такие имена для переменных приемлемы, но не очень информативны.

Вариант с префиксом `dog` лучше:

```javascript
const dogName = 'Mango';
const dogAge = 2;
const dogBreed = 'shepherd';
const dogColor = 'black';
```

Так понятно, что в переменных хранится информация про собаку.

Если в программе будет еще несколько сущностей, например, `кот`, `рыба`, `птица`, то имена переменных стоит называть так, чтобы было понятно, что в них хранится.

```javascript
const catName = 'Poly';
const catAge = 3;
const catBreed = 'siamese';
const catColor = 'white';

const fishName = 'Nemo';
const fishAge = 1;
const fishBreed = 'clownfish';
const fishColor = 'orange';

const birdName = 'Tweety';
const birdAge = 2;
const birdBreed = 'canary';
const birdColor = 'yellow';
```

### Примеры правильного и понятного именования переменных

Если мы хотим хранить в переменной количество дней в году, то лучше назвать её `daysInYear`, а не `days`.

Переменные будут хранить в себе данные о пользователе.

`userName` — имя пользователя

`userAge` — возраст пользователя

Представим, что у нас есть коробка для доставки товаров.

В переменных будут храниться свойства коробки.

`boxPrice` — цена коробки

`boxColor` — цвет коробки

`boxWeight` — вес коробки

`boxMaterial` — материал коробки

`boxQuantity` — количество коробок

`boxType` — тип коробки

`boxWidth` — ширина коробки

`boxHeight` — высота коробки

`boxLength` — длина коробки

`boxVolume` — объем коробки

`boxCapacity` — вместимость коробки

`boxSize` — размер коробки (например: `small`, `medium`, `large`)

Любой, кто посмотрит на эти переменные должен догадаться, что в них хранится.

Когда в имени несколько слов, мы пишем их слитно. Это правило называют `Camel case` как горбы верблюда.

* все слова пишутся слитно
* первое слово всегда с маленькой буквы
* каждое следующее слово с большой буквы

### Пример переменной из двух слов

```javascript
const zipCode = '987A-987A'; // создана переменная с индексом. Индекс всегда записывают как строку, string

const priceClient = 100; // создана переменная 'клиентская цена' со значением 100
```

### Пример имени переменной из нескольких слов

```javascript
const distanceFromClientToWarehouse = 456; // создана переменная 'расстояние от клиента до склада' со значением 456

const deliveryAddressMain = '56 Second st, SF'; // создана переменная 'основной адрес доставки'. Присвоено значение '56 Second st, SF'
```

### Пример имени с заглавными буквами

```javascript
const PI = 3.14; // создана переменная 'пи' со значением 3.14
const IP = '192.168.0.10' // создана переменная 'айпи' со значением '192.168.0.10'
const DATABASE_LOGIN = 'admin'; // создана переменная 'логин базы данных' со значением 'admin'
```

### В сложных именах на первое место всегда ставьте сущность, а потом её свойство

```javascript
const phoneMain = 5556677; // создана переменная телефон основной со значением 5556677
const deliveryDriver = 'Andrew'; // создана переменная 'имя доставщика', со значением 'Andrew'. Доставка тут является основной сущностью
```

## Ошибки в именах переменных

Есть несколько правил и ошибок, которые нужно избегать при создании переменных.

### Переменные не могут начинаться с цифры

```javascript
const 12month = 'December'; // Плохо. Числа в начале имени переменной не допускается
const month12 = 'December'; // Хорошо. Числа могут быть в середине или в конце имени переменной
```

### Нельзя использовать минус (дефис) в имени

```javascript
const time-from-a-to-be; // Плохо. Не используем дефис в имени переменной
const time_from_a_to_b; // Хорошо. Используем Snake case
const timeFromAToB; // Хорошо. Используем Camel case
```

### Нельзя использовать пробел в имени

```javascript
const value Client; // Плохо. Не используем пробел в имени переменной
const valueClient; // Хорошо. Используем Camel case
const value_client; // Хорошо. Используем Snake case
```

## Хороший тон при создании переменных

Эти советы помогут вам создавать переменные, которые будут легко читаться и пониматься другим разработчикам.

### Первая буква всегда маленькая

```javascript
const LastName; // Плохо. Не используем заглавные буквы в начале имени переменной
const lastName; // Хорошо. Используем маленькие буквы в начале имени переменной
```

### Имя не должно содержать значение переменной

```javascript
const lastNameAlice = 'Smith'; // Плохо. Имя переменной содержит значение переменной
const phoneBob = '5556677'; // Плохо. Имя переменной содержит значение переменной

const lastName = 'Smith'; // Хорошо. Имя переменной не содержит значение переменной
const phone = '5556677'; // Хорошо. Имя переменной не содержит значение переменной
```

### Используйте только английские слова в именах переменных

```javascript
const mashina = 'A1R1'; // Плохо. Нужно создать переменную с именем 'car'

const español = 'Henry'; // Плохо. Используем только английские слова
const 你好 = 'Hello'; // Плохо. Используем только английские слова

const car = 'Volvo' // Хорошо
const stop = 'Main St' // Хорошо
```

### Значением переменной может все что угодно

```javascript
const greetingEnglish = 'Hello'; // Переменная greeting содержит строку 'Hello'
const greetingChinese = '你好'; // Переменная greeting содержит строку '你好'
const greetingSpanish = 'Hola'; // Переменная greeting содержит строку 'Hola'
const greetingJapan = 'こんにちは'; // Переменная greeting содержит строку 'こんにちは'

const smile = '😀'; // Переменная smile содержит строку '😀'
```

### Избегайте использования однобуквенных имен

```javascript
const a = 'Hello'; // Плохо. Не используем однобуквенные имена
const q = 123; // Плохо. Не используем однобуквенные имена
const firstName = 'John'; // Хорошо. Используем полное имя
```

Если в контексте вашего кода однобуквенное имя, вы можете использовать его, но ставьте себе вопрос, а нужно ли это? В большинстве случаев, нет.

Иногда однобуквенные имена могут быть полезны, например, когда вы используете цикл for. Но в большинстве случаев вы должны избегать их.

Сокращения в именах переменных не рекомендуется использовать, если они не являются общепринятыми.

Примеры сокращений:

```javascript
const num = 123; // Какое-то число
const str = 'Hello'; // Некая строка
const avg = 3.24; // Среднее значение
const neg = -1; // Какое-то отрицательное число
const pos = 1; // Какое-то положительное число

const n1 = 123; // Какое-то число
const n2 = 125; // Какое-то число
const n3 = 129; // Какое-то число
const n4 = 121; // Какое-то число

const str1 = 'Hello'; // Некая строка
const str2 = 'World'; // Некая строка
```

Здравый смысл должен помочь вам определить, когда использовать сокращения, а когда нет.


На разных проектах правила именования переменных могут слегка варьироваться, но основные требования, обеспечивающие лучшую "читаемость кода" следующие:  

1. Осмысленное название, отображающее суть данных, хранящихся в переменной.  
2. Использование имен в стиле **camelCase** - стиль написания составных слов, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри фразы пишется с прописной буквы. Стиль получил название **camelCase**, поскольку прописные буквы внутри слова напоминают горбы верблюда.

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/camelcase.PNG)

3. Использование **английского языка** (не транслита!), **цифр** (но не в начале имени!), знака подчеркивания **_** и доллара **$**.  
4. Нелатинские буквы разрешены, но не рекомендуются. Можно использовать любой язык, включая кириллицу. Имена с использованием русских букв разрешены, но есть международная традиция использовать английский язык в именах переменных. Возможно, ваш код в дальнейшем будут читать люди из разных стран.
5. Существует также список зарезервированных слов в JavaScript, которые нельзя употреблять в качестве имен переменных. Взять хотя бы ключевое слово **let** – поди разберись в записи типа:
```
let let;
```

Примеры **неправильного** именования переменных: 
```
const const;              // const - зарезервированное слово, его нельзя использовать в качестве переменной
const null = 0;           // null - зарезервированное слово, его нельзя использовать в качестве переменной 
let var = 100.99;         // var - зарезервированное слово, его нельзя использовать в качестве переменной 
let knigi = 500;          // нельзя использовать транслит в названии переменной
let 12month = 'December'; // нельзя начинать имя переменной с цифры
let sumofnumbers = a + b; // должен применяться стиль camelCase: когда после первого слова каждое последующее слово пишется с прописной буквы 
let tov = 100 ;           // давайте переменной понятное имя, таким образом другим разработчикам будет удобно работать с вашим кодом
```

Примеры **правильного** именования переменных:
```
let numberOfBooks = 500;        // используем только английский язык в названиях переменных
const book = 'Treasure Island'; // используем только английский язык в названиях переменных
let month12 = 'December';       // цифры допустимы в названиях переменных, если только они стоят не в начале слова 
let sumOfNumbers = a + b;       // применяется стиль camelCase
let totalNumberOfLines = 20;    // давайте переменной понятное название
const bug_is_harmful = true;    // можно использовать нижнее подчеркивание в названии переменной, но удобнее и "экономнее" использовать стиль camelCase
const bugIsHarmful = true;      // применяйте стиль camelCase: когда после первого слова каждое последующее слово пишется с прописной буквы 
let typeOfVariable = 'string';  // давайте переменной понятное имя
```





