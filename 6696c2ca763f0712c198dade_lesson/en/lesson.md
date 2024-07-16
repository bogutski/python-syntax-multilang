![](https://course-qa-basics.s3.us-west-1.amazonaws.com/programmers-and-programs.png)

Programs are instructions for the computer.

The computer does everything only by instructions and does not (yet) have the ability to make decisions independently. So
programs are the only way we can give it commands.

Programs consist of instructions that the computer executes one at a time. Each instruction is a command that tells the computer what it should do.

For example, the "display text" instruction tells the computer to display the text we will write in the program.

Let's imagine that we have a robot. It can only follow the instructions we give it. What instructions can we give the robot?

An example of a not real program for a robot:


1. Take `10` steps forward
2. Turn left at `90` degrees
3. Take `5` steps forward
4. Turn right at `90` degrees
5. Measure the illuminance. If the illuminance is less than `50%`, turn on the flashlight
6. Make a short beep 
7. Take 5 steps backwards


Next, we will write programs for the computer. It will only do what we tell it to do.


### Console - `console.log()`

What is a console? A console is a place where a computer displays information. 

`console.log()` is a command that tells the computer that it should display what we will write in brackets.

For example:

```javascript
console.log('Hello, world!'); // Output to console: "Hello, world!"
console.log('My name is Alice'); // Output to console: "My name is Alice"
console.log(123); // Displayed in the console: 123
```

### Comments

If we want the computer, temporarily, not to execute some part of the code, we can comment it out.

To comment out a line, put two slashes `//` in front of it. 

The computer will not execute commands that are after two slashes.

For example:

```javascript
//console.log('Hello, world!'); // nothing will be displayed in the console
//console.log(100); // nothing will be displayed in the console
```
