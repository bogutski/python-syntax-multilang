Checking if a property exists in an object is one of the basic operations that can be performed on objects. In this lesson, we will look at how to check if a property exists in an object and how to use that information to perform various actions.

There are several ways to check if a property exists in an object in JavaScript. Let's take a closer look at each of them.

### Operator `in`

The syntax of the `in` operator is as follows:

```javascript
property in object
```

Here `property` is the name of the property and `object` is the object in which the presence of the property is checked.

The `in` operator returns `true` if a property with the specified name exists in the object, and `false` otherwise.

For example, suppose we have a `person` object that contains information about a person:

```javascript
let person = { name: 'John', age: 30 };

if ('name' in person) {
  // this message will be displayed in the console, because the person object has a name property
  console.log('The person object has a name property');
}

if ('hobbies' in person) {
  console.log('The person object has a hobbies property');
} else {
  // this message will be displayed in the console, if the person object does not have a hobbies property
  console.log('The person object does not have a hobbies property');
}
```

In this example, we first check if the `name` property exists in the `person` object, and if it does, we output a message to the console.

Check for the `hobbies` property, which is not present in the object, and print the corresponding message to the console.

### Method `hasOwnProperty()`

The syntax of the `hasOwnProperty()` method looks like this

```javascript
object.hasOwnProperty(property)
```

Here `property` is the name of the property and `object` is the object in which the presence of the property is checked.

The `hasOwnProperty()` method returns true if the object contains a property with the specified name and false otherwise.

For example, using the `person` object from the previous example, we can check the presence of the `name` property as follows:

```javascript
if (person.hasOwnProperty('name')) {
  // this message will be displayed in the console, since the person object has the name property
  console.log('The person object has a name property');
}
```
