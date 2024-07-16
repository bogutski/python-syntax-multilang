Переворачивание массива — это распространенная задача, которую можно решить разными способами. Рассмотрим несколько методов переворачивания массива в JavaScript.

### Перевернуть массив с использованием метода `unshift`

Метод `unshift` добавляет один или несколько элементов в начало массива и возвращает новую длину массива. 

Пример:

```javascript
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [];

for(let i = 0; i < originalArray.length; i++) {
    reversedArray.unshift(originalArray[i]);
}

console.log(reversedArray); // Вывод: [5, 4, 3, 2, 1]
```

В этом методе мы проходим по исходному массиву и добавляем каждый элемент в начало нового массива, тем самым переворачивая его.


### Перевернуть массив с использованием метода `push`

Метод `push` добавляет один или несколько элементов в конец массива и возвращает новую длину массива. 

Чтобы перевернуть массив, можно использовать `push` в сочетании с циклом, проходящим по массиву с конца:


```javascript
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const reversedArray = [];

for(let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}

console.log(reversedArray); // [ 'e', 'd', 'c', 'b', 'a' ]
```

Здесь мы начинаем с последнего элемента исходного массива и добавляем его в новый массив с помощью `push`, тем самым достигая обратного порядка элементов.


### Перевернуть массив с использованием метода `reverse`

Метод `reverse` меняет порядок элементов массива на обратный местами и возвращает ссылку на этот же массив. Это самый простой и эффективный способ перевернуть массив:

```javascript
const originalArray = ['one', 'two', 'three'];
const reversedArray = originalArray.reverse();

console.log(reversedArray); // [ 'three', 'two', 'one' ]
```


Каждый из этих методов может быть использован в зависимости от конкретных требований задачи и предпочтений программиста. 

Метод `reverse` является наиболее прямым и эффективным способом для переворачивания массивов, но другие методы могут быть полезны в ситуациях, когда необходим более тонкий контроль над процессом переворачивания.