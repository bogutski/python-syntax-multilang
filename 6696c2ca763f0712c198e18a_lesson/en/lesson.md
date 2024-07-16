![](https://course-qa-basics.s3.us-west-1.amazonaws.com/if-else-girl.png)

Branching allows you to change the course of program execution depending on the conditions.

There are three combinations of conditional operators:

* `if`
* `if...else`
* `if...else if...else`

### Single operator `if`

The `if` operator allows you to run a block of code when the specified condition is true.


```javascript
if (condition){
  // execute the code if the condition is true
}
```

For example, we need to write code to determine whether a person can be issued a nightclub pass based on their age.

```javascript
const age = 20;

if(age >= 21){
  console.log('Welcome') // the code will not work if age is less than 21
}

// the program will continue executing
console.log('The end');

```
### Combination of operators `if...else`
What if we want to do something else if the condition is false? The `else` operator comes in handy.

The `if...else` operator is used when we need to execute different instructions depending on whether the condition is true or false.

```javascript
if (condition) {
  // execute the code if the condition is true
} else {
  // execute code if condition is false
}
```

Using the `else` operator you can run a block of code only if the previous conditional statements were false.

```javascript
const age = 20;

if(age >= 21){
  console.log('Welcome') // the code will work if age is greater than 21
} else {
  console.log('Sorry, no') // the code will work if age is below 21
}
```

Convert this code to a function, and add a `prompt` box with a question **What is your age?** for the user to enter his age.

Since `prompt` returns a string `string`, we need to convert the variable `age` to a number.

You can do this with `Number()`, or just add `+` before `prompt`.

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age >= 21){
    return 'Welcome';
  } else {
    return 'Sorry, no';
  }
}

const answer = door();

console.log(answer); // let's assume the user entered 30 into the window, the console will display 'Welcome'
```

Let's imagine that our nightclub has several rooms:

1. 21 to 55 years old (55 inclusive)
2. 55 to 80 years old (80 inclusive)
3. From 80 years old

Let's try to write these conditions using the `if...else` operator

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age >= 21){
    if(age > 55){
      if(age > 80){
        return 'Room 3'; // over 80, room 3
      } else {
        return 'Room 2'; // between 55 and 80, Room 2
      }
    } else {
      return 'Room 1'; // from 21 to 55, room 1
    }
  } else {
    return 'Sorry, no';
  }
}

const answer = door();

console.log(answer);
```

Several nesting levels appeared and the code became hard to read.

### Combination of operators `if...else if...else`

Let's rewrite our code with three rooms using the `if...else if...else` operator

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age >= 21){ 
    return 'Room 1'; // 21 to 55, room 1
  } else if(age > 55){
    return 'Room 2'; // from 55 to 80, Room 2
  } else if (age > 80){
    return 'Room 1'; // over 80, Room 3
  } else {
    return 'Sorry, no';
  }
}

const answer = door();
console.log(answer); // if the user entered 56, the console will print 'Room 1'
                     // it should have been 'Room 2'
```

Why did this happen? Because `56 >= 21`, so the first condition is true.

The conditions are checked from top to bottom. As soon as one of the conditions becomes true, the code within the corresponding `if` is executed and the rest of the `if...else if...else` operator is ignored. If none of the conditions are true, the last `else` operator will be executed.

Let's try to rewrite the code so that the correct room numbers are returned to us

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age > 80){ 
    return 'Room 3'; // over 80, room 3
  } else if(age > 55){
    return 'Room 2'; // between 55 and 80, Room 2
  } else if (age >= 21){
    return 'Room 1'; // from 21 to 55, Room 1
  } else {
    return 'Sorry, no';
  }
}

const answer = door();

console.log(answer); 

// If the user entered 80, the console will print 'Room 3'.
// If the user entered 56, the console will output 'Room 2'
// If the user entered 25, the console will output 'Room 1'.
// If the user entered 18, the console will output 'Sorry, no'
```

Try different variants to understand how the `if...else if...else` operator works.
