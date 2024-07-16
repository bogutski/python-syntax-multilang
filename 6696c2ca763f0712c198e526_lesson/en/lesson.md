![](https://course-qa-basics.s3.us-west-1.amazonaws.com/object-string.png)

Each property has a `key` and a `value` and you can access these values using the property key.

JavaScript uses either the point or square bracket syntax to access object properties. Let's take a closer look at both.

### Point syntax

The point syntax is used to access object properties if the property name (key) is known beforehand. It looks like this:

```javascript
objectName.propertyName
```

Where `objectName` is the object name and `propertyName` is the property name (key).

For example, we have a `person` object:

```javascript
let person = { 
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};
```

We can access the properties of the `person` object using the point syntax:

```javascript
console.log(person.age); // 30
console.log(person.city); // 'New York'
console.log(person.firstName + ' ' + person.lastName + ' from ' + person.city); // 'John Doe from New York'
```

### Square brackets syntax

The square brackets syntax is used to access object properties if the property name contains spaces or other special characters. It looks as follows:

```javascript
objectName['propertyName']
```

Where `objectName` is the object name and `propertyName` is the property name (key).

For example, we can access the value of the key `'city name'` of the object `person` using the syntax of square brackets:

```javascript
console.log(person['city name']); // 'New York'
```

Another example with square brackets: the `'shirt-color'` key of the `store` object:

```javascript
console.log(store['shirt-color']); // 'red'
```


We can also use a variable instead of a property name:

```javascript
let propName = 'age';

console.log(person[propName]); // 30
```

Note that the property name in square brackets must be enclosed in quotation marks (double or single).

Let's write a function `compareAges` that takes two objects `person1` and `person2` that have the property `age` and returns a message about who is older.

```javascript
function compareAges(person1, person2) {
  if (person1.age > person2.age) {
    return person1.name + 'is older than' + person2.name;
  } else if (person1.age < person2.age) {
    return person2.name + 'is older than' + person1.name;
  } else {
    return 'these people are the same age';
  }
}

let person1 = { name: 'John', age: 30 };
let person2 = { name: 'Jane', age: 25 };

let result = compareAges(person1, person2);
console.log(result); // 'John older than Jane',
                     // because John is older than Jane Jane
```
