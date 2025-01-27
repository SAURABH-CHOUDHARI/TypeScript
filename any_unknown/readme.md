

# TypeScript Types and Interfaces Guide 📚

This guide provides an overview of various TypeScript types, interfaces, and their usage with code snippets for better understanding.

## 1. Any Type 🌀
The `any` type allows you to opt-out of type checking. It can hold any value, making it flexible but potentially unsafe.

```typescript
let a: any; // a can be any type
a = "Hritik"; // string
a = 12; // number
```

## 2. Unknown Type ❓
The `unknown` type is similar to `any`, but it is safer because you must perform some type of checking before performing operations on it.

```typescript
let b: unknown; // b can hold any value
b = "Hritik"; // string
b = 12; // number
```

## 3. Void Type 🚫
The `void` type is used for functions that do not return a value.

```typescript
function dc(): void {
    console.log("void function");
}
```

## 4. Null Type 🌑
In TypeScript, you can explicitly define a variable that can be either a specific type or `null`.

```typescript
let a: string | null; // a can be a string or null
a = "Hritik"; // string
a = null; // null
```

## 5. Never Type 🔄
The `never` type represents values that never occur. It is often used for functions that throw errors or have infinite loops.

```typescript
function fun(): never {
    console.log("hey");
    throw new Error("This function never returns");
}
```

## 6. Type Interface 🧩
Interfaces in TypeScript define the structure of an object. They can be used to enforce type checking.

```typescript
interface User {
    name: string;
    email: string;
    password: string;
    gender?: string; // Optional property
}

function getDataOfUser(obj: User) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.password);
}

getDataOfUser({ name: "harsh", email: "sad@cona.com", password: "sjkbfa" });
```

## 7. Type Annotations 📝
Type annotations allow you to specify the type of a variable explicitly.

```typescript
let z: number = 12; // z is a number
let k: number | boolean | string; // k can be a number, boolean, or string
```

## 8. Function with Type Annotations ⚙️
You can specify types for function parameters and return types.

```typescript
function abcs(a: number, b: boolean): boolean {
    return true; // returns a boolean
}
```

## 9. Extending Interfaces 🔗
You can extend interfaces to create a new interface that inherits properties from another interface.

```typescript
interface User {
    name: string;
    email: string;
    password: string;
}

interface Admin extends User {
    admin: boolean; // additional property
}

function bcdf(obj: Admin) {
    console.log(obj.admin); // access admin property
}
```

## 10. Interface Merging 🛠️
TypeScript allows you to define the same interface multiple times, and it will merge them into a single interface.

```typescript
interface Abd {
    name: string;
}

interface Abd {
    email: string;
}

function abss(obj: Abd) {
    console.log(obj.email); // access email property
    console.log(obj.name); // access name property
}
```

## 11. Type Aliases 🔤
Type aliases allow you to create a new name for a type. They can be used for primitive types, unions, tuples, etc.

```typescript
type Value = string | number | null; // Value can be string, number, or null

let s: Value; // s can hold any of the defined types
```

## 12. Intersection Types ➕
Intersection types allow you to combine multiple types into one. A variable of an intersection type will have all the properties of the combined types.

```typescript
interface A {
    a: number;
}

interface B {
    b: string;
}

type AB = A & B; // AB has properties of both A and B

let obj: AB = {
    a: 1,
    b: "Hello"
};
```

## 13. Union Types 🔀
Union types allow you to define a variable that can hold multiple types. This is useful when a value can be one of several types.

```typescript
// Union type definition
let value: string | number; // value can be either a string or a number

value = "Hello"; // valid
console.log(value); // Output: Hello

value = 42; // valid
console.log(value); // Output: 42

// Function using union types
function printId(id: string | number) {
    console.log("Your ID is: " + id);
}

printId("ABC123"); // valid
printId(123456); // valid
```

### Conclusion 🎉
These concepts form the foundation of TypeScript's type system, allowing for better type safety and code maintainability. Understanding these types and how to use them effectively can greatly enhance your TypeScript programming experience.
