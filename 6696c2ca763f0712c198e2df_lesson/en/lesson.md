The method `Math.round(x)` rounds the number `x` to the nearest integer.

There is a difference in rounding positive and negative numbers using this method:

1. If the fractional part of a **positive** number is less than 0.5, the rounding will be done to the nearest smaller integer, and if it is greater than or equal to 0.5, then to the nearest larger integer.

```
Math.round(10.49); // 10
Math.round(10.5); // 11
Math.round(10.51); // 11
```

2. If the fractional part of a **negative** number is less than or equal to 0.5, the number will be rounded to the nearest larger integer, and if greater than 0.5, to the nearest smaller integer.

```
Math.round(-10.49); // -10
Math.round(-10.5); // -10
Math.round(-10.51); // -11
```
