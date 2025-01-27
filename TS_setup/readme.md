


# TypeScript Guide 📘

This guide provides an overview of TypeScript setup, primitive types, reference types, and enums, complete with definitions, diagrams, and code snippets.

## Table of Contents
1. [TypeScript Setup](#typescript-setup)
2. [Primitive Types](#primitive-types)
3. [Reference Types](#reference-types)
4. [Enums](#enums)

---

## 1. TypeScript Setup ⚙️

### Steps to Set Up TypeScript

1. **Install Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

2. **Install TypeScript**: Open your terminal and run the following command to install TypeScript globally:

   ```bash
   npm install -g typescript
   ```

3. **Initialize a TypeScript Project**: Create a new directory for your project and navigate into it. Then, run:

   ```bash
   mkdir my-typescript-project
   cd my-typescript-project
   tsc --init
   ```

   This command creates a `tsconfig.json` file, which is used to configure your TypeScript project.

4. **Create a TypeScript File**: Create a new file with a `.ts` extension, for example, `app.ts`.

5. **Compile TypeScript**: To compile your TypeScript code to JavaScript, run:

   ```bash
   tsc app.ts
   ```

6. **Run the JavaScript File**: After compilation, run the generated JavaScript file using Node.js:

   ```bash
   node app.js
   ```

### Diagram
```
+-------------------+
|   Install Node.js |
+-------------------+
          |
          v
+-------------------+
| Install TypeScript|
+-------------------+
          |
          v
+-------------------+
| Initialize Project |
+-------------------+
          |
          v
+-------------------+
| Create .ts File   |
+-------------------+
          |
          v
+-------------------+
| Compile to .js    |
+-------------------+
          |
          v
+-------------------+
| Run with Node.js   |
+-------------------+
```

---

## 2. Primitive Types 🔢

### Definition
Primitive types are the most basic data types in TypeScript. They represent single values and are immutable.

### Types of Primitive Types
- **Number**: Represents both integer and floating-point numbers.
- **String**: Represents a sequence of characters.
- **Boolean**: Represents a true or false value.
- **Null**: Represents the intentional absence of any value.
- **Undefined**: Represents a variable that has been declared but not assigned a value.
- **Symbol**: Represents a unique and immutable value (introduced in ES6).
- **BigInt**: Represents integers with arbitrary precision (introduced in ES11).

### Code Snippet
```typescript
let age: number = 30; // Number
let name: string = "Alice"; // String
let isActive: boolean = true; // Boolean
let emptyValue: null = null; // Null
let notAssigned: undefined; // Undefined
let uniqueId: symbol = Symbol("id"); // Symbol
let bigNumber: bigint = BigInt(12345678901234567890); // BigInt
```

---

## 3. Reference Types 📦

### Definition
Reference types are more complex data types that can hold multiple values or collections of values. They include objects, arrays, and functions.

### Types of Reference Types
- **Object**: A collection of key-value pairs.
- **Array**: A collection of values of the same type.
- **Function**: A callable object that can take parameters and return a value.

### Code Snippet
```typescript
// Object
let person: { name: string; age: number } = {
    name: "Bob",
    age: 25,
};

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

// Function
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

### Diagram
```
+-------------------+
|     Reference     |
|       Types       |
+-------------------+
          |
          v
+-------------------+
|       Object      |
+-------------------+
          |
          v
+-------------------+
|       Array       |
+-------------------+
          |
          v
+-------------------+
|      Function     |
+-------------------+
```

---

## 4. Enums 📊

### Definition
Enums (short for enumerations) are a special "class" that represents a group of constants. They allow you to define a set of named values, making your code more readable and maintainable.

### Types of Enums
- **Numeric Enums**: The default behavior where the first value is assigned `0`, and subsequent values are incremented by `1`.
- **String Enums**: Each member is initialized with a string literal.

### Code Snippet
```typescript
// Numeric Enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

// String Enum
enum Response {
    Yes = "YES",
    No = "NO",
}

// Usage
let move: Direction = Direction.Up; // move is 1
let answer: Response = Response.Yes; // answer is "YES"
```

### Diagram
```
+-------------------+
|       Enums       |
+-------------------+
          |
          v
+-------------------+
|    Numeric Enums  |
+-------------------+
          |
          v
+-------------------+
|    String Enums   |
+-------------------+
```

---

## Conclusion 🎉
This guide provides a foundational understanding of TypeScript setup, primitive types, reference types, and enums. By following the steps and examples provided, you can effectively start using TypeScript in your projects.
