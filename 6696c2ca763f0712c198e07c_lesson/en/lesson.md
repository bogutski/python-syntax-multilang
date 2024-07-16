### Limiting the scope of variables within a function

Let's create a function and call it:

```javascript
function hello(){
  const driverName = 'Bob';
}

hello();
console.log(driverName);
```

As we can see, an error `driverName is not defined` appears in the console.

But why? A variable declared inside a function is visible **only inside the function**, and if we want to access the `driverName` variable, we have to do it inside the function.

```javascript
function hello(){
  const driverName = 'Bob';
  console.log(driverName);
}

hello();
```

As we can see, now `console.log(driverName);` is inside the function, so we have access to the `driverName` variable.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/limit-access.png)

### Limiting the scope of variables within a block

Create a block of code in curly braces:

```javascript
{
  const driverName = 'Bob';
  console.log(driverName);
}
```

Now let's try to put `console.log(driverName);` outside the brackets and get the same result as in the example with the function: `driverName is not defined`, because the visibility of the `driverName` variable is limited to a block.

```javascript
{
  const driverName = 'Bob';
}

console.log(driverName);
```

### Access in a block to a variable declared outside the block

Let's change the condition and create a variable outside the block, and write `console.log` inside the block:

```javascript
const driverName = 'Bob';

{
  console.log(driverName);
}
```

What will we see that strikes us? Everything that is outside the block will be available inside the block.

### Accessing a variable in a function declared outside the function

The same will work with a function, but note that it is not good practice for a function to use something outside of the function itself.

```javascript
const name = 'Alice';

function hello() {
  return name;
}

console.log(hello());
```

Try experimenting with it.

In the following tasks we will find out where this is implemented and what it is for.

Repeat all the examples, write them yourself, because only through repetition can you learn to write code.
