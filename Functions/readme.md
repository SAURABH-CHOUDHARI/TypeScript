
# TypeScript Functions Guide 📘

This guide provides an overview of functions in TypeScript, including definitions, explanations, and TypeScript code snippets for each topic.

## Table of Contents
1. [Functions](#functions)
2. [Function Types](#function-types)
3. [Optional and Default Parameters](#optional-and-default-parameters)
4. [Rest Parameters](#rest-parameters)
5. [Overloads](#overloads)

---

## 1. Functions 🔧

### Definition
A function is a block of code that performs a specific task. Functions can take parameters, perform operations, and return values. In TypeScript, you can define functions with specific types for parameters and return values.

### TypeScript Code Snippet
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice!
```

---

## 2. Function Types 🏷️

### Definition
Function types allow you to define the type of a function, including its parameters and return type. This is useful for type-checking when passing functions as arguments or returning functions from other functions.

### TypeScript Code Snippet
#### Defining a Function Type
You can define a function type using a type alias.

```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

---

## 3. Optional and Default Parameters ⚙️

### Definition
Optional parameters are parameters that can be omitted when calling a function. They are defined using the `?` symbol. Default parameters allow you to specify a default value for a parameter if no value is provided.

### TypeScript Code Snippet
#### Optional Parameters
```typescript
function greet(name: string, age?: number): string {
    return age ? `Hello, ${name}! You are ${age} years old.` : `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", 30)); // Output: Hello, Bob! You are 30 years old.
```

#### Default Parameters
```typescript
function multiply(a: number, b: number = 1): number {
    return a * b;
}

console.log(multiply(5)); // Output: 5 (5 * 1)
console.log(multiply(5, 2)); // Output: 10 (5 * 2)
```

---

## 4. Rest Parameters 🌊

### Definition
Rest parameters allow you to represent an indefinite number of arguments as an array. They are defined using the `...` syntax before the parameter name.

### TypeScript Code Snippet
```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

---

## 5. Overloads 📚

### Definition
Function overloads allow you to define multiple signatures for a function. This enables the same function to behave differently based on the types and number of arguments passed.

### TypeScript Code Snippet
```typescript
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
function combine(input1: any, input2: any): any {
    return input1 + input2;
}

console.log(combine("Hello, ", "World!")); // Output: Hello, World!
console.log(combine(5, 10)); // Output: 15
```

---

## Conclusion 🎉
This guide provides a comprehensive overview of functions in TypeScript, covering function types, optional and default parameters, rest parameters, and overloads. Understanding these concepts will help you write more flexible and type-safe code in TypeScript.
