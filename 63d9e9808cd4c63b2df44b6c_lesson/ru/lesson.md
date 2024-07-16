Все что сказано в этой лекции на данный момент нам не пригодится, но в будущем мы вернемся к этой теме.

### Округление чисел в меньшую сторону — `Math.floor()`

```javascript
console.log(Math.floor(3.0)); // 3  
console.log(Math.floor(3.1)); // 3
console.log(Math.floor(3.9)); // 3
```

### Округление чисел в большую сторону — `Math.ceil()`

```javascript
console.log(Math.ceil(3.0)); // 3  
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(3.9)); // 4
``` 

### Округление чисел до ближайшего целого — `Math.round()`

Если число больше `0.5`, то округляет в большую сторону, если меньше `0.5`, то округляет в меньшую сторону.

```javascript
console.log(Math.round(3.0)); // 3  
console.log(Math.round(3.1)); // 3
console.log(Math.round(3.3)); // 3
console.log(Math.round(3.4)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.9)); // 4
```

### Округление дробных чисел до заданного количества знаков после запятой — `toFixed()`

```javascript
console.log( Number((3.0).toFixed(2)) ); // 3.00
console.log( Number((3.1).toFixed(2)) ); // 3.10
console.log( Number((3.999456546546).toFixed(2)) ); // 4.00
console.log( Number((3.999456546546).toFixed(3)) ); // 4.000
console.log( Number((3.999456546546).toFixed(4)) ); // 3.9995
```

Скорее всего вы будете возвращаться к этой лекции. Поэтому, если вы не поняли какой-то момент, не бойтесь его повторить.
