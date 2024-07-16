### Accessing object properties

Let's repeat how to access object properties:

```javascript
const person = {
  name: 'Jack',
  age: 25,
  isAdult: true,
  address: {
    street: '150 Main',
    city: 'New York',
    state: 'NY'
  }
};

console.log(person.name)                    // 'Jack'
console.log(person.isAdult)                 // true
console.log(person.address.city)            // 'New York'

console.log(person['age'])                  // 25
console.log(person['address']['state'])     // 'NY'
```

There are two ways to refer to an object property: via `dot` or using `square brackets`.



### Changing object properties

Let's now create an object and change its properties.

```javascript
const car = {
  brand: 'Ford',
  color: 'white',
  year: 2020
}
console.log(car);     // { brand: 'Ford', color: 'white', year: 2020 }

car.brand = 'Audi';
car.color = 'black';
car.year = 2021;
console.log(car);     // { brand: 'Audi', color: 'black', year: 2021 }
```

Now create a more complex object and use square brackets to refer to properties.

```javascript
const student = {
    firstName: 'Mike',
    lastName: 'Smith',
    address: {
        street: '20 Atlantic',
        city: 'Miami',
        state: 'Florida'
    }
}
console.log(student) // {
                       // firstName: 'Mike',
                       // lastName: 'Smith',
                       // address: { street: '20 Atlantic', city: 'Miami', state: 'Florida' }
                       // }

student['firstName'] = 'Jack' // use square brackets to refer to the key
student.address['street'] = '132 South Orange' // use a period and square brackets to address the key
student['address']['city'] = 'Orlando' // use only square brackets for key reference

console.log(student) // {
                       // firstName: 'Jack',
                       // lastName: 'Smith',
                       // address: { street: '132 South Orange', city: 'Orlando', state: 'Florida' }
                       // }
```



### The difference between `let` and `const`

No matter which keyword was used to create the object: `let` or `const`, the object properties can be changed.

Because `object` is a reference data type, and when you create an object, a reference to it is saved, and when you change the property, the reference will not change.

The only difference will be when we assign a new object to the created variable.

For example:

```javascript
const name = {
    firstName: 'John',
    lastName: 'Black',
}
name = {
    firstName: 'Alice',
    lastName: 'Black',
}

// in this case it will be: `TypeError`
```
The error will be because we create a new object and write a new reference to a variable that was created with the `const` keyword.



### The function of summing up the values of the object

Let's write a function called `sumObject` that will summarize the values of an object.

```javascript
function sumObject(object){
    object.sum = object.num1 + object.num2; // write the result of summation to the `sum` property
    return object; // return the updated object
}

console.log(sumObject({num1: 5, num2: 10, sum: 0})) // // { num1: 5, num2: 10, sum: 15 }
console.log(sumObject({num1: -123, num2: 746, sum: 0})) // // { num1: -123, num2: 746, sum: 623 }
```
