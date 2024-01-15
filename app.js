console.log("hello world");

function sayHello() {
  console.log("hello world");
}
sayHello();
sayHello();
sayHello();

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}

sayHelloTo("Tom");
sayHelloTo("Jimmy");
sayHelloTo("Robbie");

function greet(greeting, name) {
  console.log(greeting + " " + name + "!");
}

greet("Hello, good morning", "Tom");

function add(a, b) {
  return a + b;
}

const result = add(1, 5);
console.log("the result is", result);
const anotherResult = add(2, 10);
console.log("another result is", anotherResult);

function multiply(a, b) {
  return a * b;
}
const results = multiply(3, 3);
console.log(result);

function subtract(a, b) {
  return a - b;
}
const subtractResult = subtract(4, 6);
console.log(subtractResult);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
const calculation = calculate(2, 4, "+");
console.log(calculation);

const result = calculates(1, 5, "+");
console.log("The result is", result);
