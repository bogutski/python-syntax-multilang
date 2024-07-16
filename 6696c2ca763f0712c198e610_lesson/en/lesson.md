We can change and delete object properties. To change an object property, we can simply refer to it by name and assign a new value.

For example:

```javascript
const car = {
  make: "Toyota",
  model: "Sienna",
  year: 2078,
  price: 789987,
};

car.year = ""; // change the value of the car property to an empty string
console.log(car); // { make: "Toyota", model: "Sienna", year: "", price: 789987 }

car.year = undefined; // change the value of the car property to undefined
console.log(car); // { make: "Toyota", model: "Sienna", year: undefined, price: 789987 }
```

In JavaScript you can use the delete operator to delete an object property. Its syntax looks like this

```javascript
delete objectName.propertyName;
```

where `objectName` is the name of the object and `propertyName` is the name of the property to remove.

It is important to note that when you delete an object property, it is completely removed from the object and is no longer available for use.

Let's look at an example:

```javascript
let car = {
  make: "Toyota",
  model: "Sienna",
  year: 2078,
  price: 789987,
  motor: {
    v: 4,
    id: 31231
  }
};

delete car.year; // delete the property year

console.log(car); // { make: "Toyota", model: "Sienna", price: 789987, 
                  //   motor: { v: 4, id: 31231} }
console.log(car.year); // undefined

delete car.motor.id; // delete the property motor.id
console.log(car); // { make: "Toyota", model: "Sienna", price: 789987, motor: { v: 4 } }

delete car.motor; // delete the property motor
console.log(car); // { make: "Toyota", model: "Sienna", price: 789987 }
```

Let's write a function to remove a certain property from an object:

```js
function cleanObject(obj, targetKey) {
  delete obj[targetKey];
  return obj;
}

console.log(cleanObject({ name: "Bob", age: 546 }, "age")); // { name: 'Bob' }
```

We can also assign variables to the property:

```js
car = {
  id: 24234,
  year: 2017,
};

const key = 'year'

car[key] = car.id;

console.log(car); // It will return { id: 24234, year: 24234 }
```

To swap the values of two properties, we need to enter an additional property, then swap the values, and delete the entered property.
Let's write an algorithm for swapping values of two different object properties:

```js
car = {
  id: 24234,
  vin: 3432314234603,
};

car.id_ = car.id;
car.id = car.vin;
car.vin = car.id_;
delete car.id_;

console.log(car); //Вернет { id: 3432314234603, vin: 24234 }
```
