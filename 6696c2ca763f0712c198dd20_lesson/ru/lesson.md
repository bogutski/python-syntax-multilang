Значение `null` не относится ни к одному из типов, рассмотренных ранее, а образует свой отдельный тип, состоящий из единственного значения `null`:
```
let age = null;
```
Для записи в переменную «пустого» или «неизвестного» значения используется **null**.
В JavaScript `null` не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках. Это просто специальное значение, которое имеет смысл «ничего» или «значение неизвестно».![](https://course-qa-basics.s3.us-west-1.amazonaws.com/is-null-equal-to-an-empty-string.png)

В частности, код выше говорит о том, что возраст `age` неизвестен.

Интересной особенностью этого типа данных является то, что `typeof null` выдает результат "object" – это официально признанная ошибка в языке, которая сохраняется для совместимости. На самом деле` null` – это не объект, а отдельный тип данных.

Другой особенностью этого типа данных является то, что `null` строго равен только самому себе и ничему больше.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/is-null-equal-to-itself.png) А точнее:
```
console.log(null === null); // true
```
При нестрогом сравнении null и undefined получаем true: ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/compare-null-and-undefined.png)
``` 
console.log(null == undefined); // true
```

Что же можно делать с `null`, если он равен только самому себе? Какие математические операции можно с ним совершать?  
Тут все довольно прозаично: при выполнении арифметических операций и сравнениях (>, >=, <, <=) `null` становится обычным нулем 0.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/compare-null-with-zero.png)
```
console.log(null < 1);     // true
console.log(null <= -1);   // false
console.log(null > 5);     // false
console.log(null >= -5);   // true
console.log(null <= 0);    // true
console.log(null >= 0);    // true
console.log(null > 0);     // false
console.log(null == 0);    // false
```


