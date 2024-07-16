In JavaScript there are currently 8 basic data types:

- "string" - a string can contain one or more characters, but there is no separate single-character type;
- "number" - for numbers of any kind: integer or floating point, integers are limited to `±2**53`;
- "boolean" is a logical value of true or false;
- "bigint" - integers of any length;
- "symbol" is a symbol for unique identifiers.
- "object" - object (for more complex data structures);
- "null" for unknown values (a type that has one null value);
- "undefined" is for uninitialized variables (a separate type that has one undefined value);

Let's summarize and put into practice all our knowledge of **primitive data types**.
* The numeric data type (number) includes integers and fractions, positive and negative numbers, as well as "special numeric values: Infinity, -Infinity and NaN.
* The string type is a sequence of characters enclosed in quotation marks.
* The boolean type can take only two values: true and false.
* The special value undefined means that "no value has been assigned".
* The null value forms its own separate type, consisting of a single null value. It has the type "object".

Interesting fact: `null` is a primitive data type that is assigned to a variable to indicate that it has no value.
But it has the value `object` in JavaScript when checking the type. Is actually a long-standing bug in the language. 
It was introduced in early versions of JavaScript and was retained for compatibility reasons with existing code.

This is why `JavaScript` is considered to have 8 data types, but in fact there are 7, because `null` is an error in the language.


Examples:
```
let name = 'Bob';        // "string"
let femaleName = 'Lucy'; // "string"

let age = 28;           // "number"
let numberOfKids = 3;   // "number"
let b = 1234567890123456789012345678901234567890n;  //"bigint"

let isAdult = age > 18; // "boolean"
let isMarried = true;   // "boolean" 

let address;            // "undefined"
let phoneNumber;        // "undefined"

let salary = null;      // "object"
let bonus = null;       // "object"
```
