`Data types` in JavaScript are divided into `primitive` and `complex or compound` types.

#### Primitive data types

Only simple values can be written to a `primitive type` variable.

Examples of primitive data types: `number`, `string`, `boolean`.

```javascript
const name = 'Bobby'; // string
const num = 456; // number
const isAvailable = true; // boolean
```

When `copying primitive data types` - the whole value is copied and you get two independent variables.

Consider the example of copying a variable of type `number`:

```javascript
const num = 456;
const copy = num;

console.log(num); // 456
console.log(copy); // 456
```

The `copy` variable contains a copy of the `num` variable.

The `num` and `copy` variables are independent of each other.

Changing the value of one variable will have no effect on the other.

```javascript
copy = 100;

console.log(num); // 456
console.log(copy); // 100
```

A new value of `100` is written to the `copy` variable. The variable `num` has not changed.

The copying of variables of type `string` is done in the same way.

```javascript
const greeting = 'Welcome Bobby!';
let message = greeting;

console.log(greeting); // "Welcome Bobby!"
console.log(message); // "Welcome Bobby!"
```

There are 2 variables of type `string` - `greeting` and `message`. The variable `message` is a copy of the variable `greeting`.

Both variables store the same value of `'Welcome Bobby!'` The two values are unrelated.

By changing one variable, we do not change the other.

```javascript
message = 'Hello Bobby!';

console.log(greeting); // "Welcome Bobby!"
console.log(message); // "Hello Bobby!"
```

### Complex or compound data types

Variables of `complex or compound types` can store entire collections of data.

Non-primitive data types in JavaScript are represented by `objects`.

The `Objects` are a kind of building blocks, based on which JavaScript can define other types of data, such as `Array`, which we will look at in more detail in the next section of the course.

Objects are also called `reference` data types.

The main difference between objects and primitive types is that objects are stored and copied by reference, not as a single value.

When you declare a variable `type object` in computer memory, a `space` is allocated to store that object and all information written to it.

It is not the value of the object that is written to the created variable, but a `link`, an address or pointer to the location in computer memory where the object was created.

```javascript
const car = {
  id: 123,
};
```

A new object has been created that has one property `id` with a value of `123`.

A variable `car` of type `object` is created.

The `car` variable contains a reference to the place in computer memory where the created object is located.

Through the `car` variable you can access object properties: read and change their values, delete, add new properties, etc.

#### There is a fundamental difference between copying primitive data types and objects.

When you try to copy objects through assignment - `copy references` - no object copies are created.

Let's look at an example:

```javascript
const car = {
  id: 123,
};

console.log(car); // {id: 123}

const box = car;

console.log(box); // {id: 123}
```

Assigning the `box` variable to `car` does not create a physical copy of the object.

The `box` variable contains a `copy` of a reference to an already existing `car` object.

As a result, both variables contain references to the same object, but there is only one object.

You can now access an object through any of these variables to retrieve or change its properties.

```javascript
car.vin = 44444444444;

console.log(car); //{id: 123, vin: 44444444444}
console.log(box); //{id: 123, vin: 44444444444}
```

Since both variables point to the same object, after adding a new property `vin` through the `car` variable we see these changes by accessing the object through the `box` variable.

```javascript
box.vin = 55555555555;

console.log(car); //{id: 123, vin: 55555555555}
console.log(box); //{id: 123, vin: 55555555555}
```

Conversely, after changing the `vin` property through the `box` variable, we see these changes by accessing the object through the `car` variable.

It doesn't work for copying objects - you have to use other methods.

### Comparing objects

When comparing variables of type `object`, references are compared, not values written inside objects.

```javascript
const car = {
  id: 123,
};

const box = car;

console.log(box === car); // true
```

The references in the `box` and `car` variables are the same, so the result of their comparison is `true`.

```javascript
const car = {};
const box = {};

console.log(box === car); // false
```

Two empty objects are created. They look the same, and it can be mistakenly assumed that the result of their comparison should be `true`.

In fact, each newly created object is allocated its `own` memory space, so they have different address-references.

Comparing two different references returns `false`.

```javascript
console.log({} === {}); // false

console.log({} == {}); // false
```

To compare objects, you need to compare their properties-keys and the values written in them.

We need to check that for each property of one object there is a corresponding property in the other object.

For objects to be equal, the values of the same property in both objects must be equal to each other.

```javascript
const car = { id: 10 };
const box = { id: 10 };

console.log(box.id === car.id); // true
```

This example compares primitive values - numbers written in objects.

The numbers are equal, so the result of the comparison is `true`.

Thus, to compare 2 objects, you need to `compare all their properties`.

If the object does not have very many properties, you can go through them one by one.

```javascript
const car = { id: 10, price: 45 };
const box = { id: 10, price: 44 };

console.log(box.id === car.id && box.price === car.price); // false
```

The objects `car` and `box` are not equal to each other, because their `price` properties have different values.

```javascript
const car = { id: 10, price: 45 };
const box = { id: 10, price: 45 };

console.log(box.id === car.id && box.price === car.price); // true
```

The objects `car` and `box` are equal because they each have 2 of the same properties `id` and `price` with the same values.

For objects with a more complex structure, JavaScript has other built-in comparison mechanisms.

To compare objects containing other nested objects, you can use the `JSON.stringify()` method, which converts the passed object to a string.

### Copying objects

To get a copy of an object, copy all its properties to a new empty object.

As a result, we get two objects with the same content and different references.

```javascript
const car = { id: 10, price: 44 };
const box = {};

box.id = car.id;
box.price = car.price;

console.log(box); // { id: 10, price: 44 }

console.log(box === car); // false
```

An object `car` was created with two properties `id` and `price`.

A new empty object `box` was created and the properties `id` and `price` from the object `car` were copied into it.

Thus we obtained 2 identical objects placed at different addresses in the computer memory.

Comparing the `box` and `car` variables returns `false` because they are comparing references pointing to different memory addresses.

```javascript
box.id = 1010;

console.log(box); // { id: 1010, price: 44 }
console.log(car); // { id: 10, price: 44 }

car.price = 55;

console.log(car); // { id: 10, price: 55 }
console.log(box); // { id: 1010, price: 44 }
```

The created objects `car` and `box` are not related to each other in any way - changing one of them does not change the other.

Consider another example of copying an object.

Suppose we have a `building` object that has the following structure:

- `type`, building type - string
- `floors`, number of floors - number
- `address`, address - object with two properties: `city` and `streetNumber`

Let's write a function `copyBuilding` that will take a `building` object and return a copy of that object:

```javascript
function copyBuilding(building) {
  const newBuilding = {};
  newBuilding.type = building.type;
  newBuilding.floors = building.floors;
  newBuilding.address = {};
  newBuilding.address.city = building.address.city;
  newBuilding.address.streetNumber = building.address.streetNumber;
  return newBuilding;
}

const building1 = {
  type: 'residence',
  floors: 2,
  address: {
    city: 'New York',
    streetNumber: '23 Belt ln',
  },
};

console.log(copyBuilding(building1));
// { address: {city: "New York", streetNumber: "23 Belt ln"}, floors: 2, type: "residence"}
```
