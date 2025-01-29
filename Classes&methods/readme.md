
# TypeScript Classes and Objects Guide 📘

This guide provides an overview of classes and objects in TypeScript, including definitions, explanations, and code snippets for each topic.

## 1. Classes and Objects 🏛️

### Definition
A class is a blueprint for creating objects. It defines properties and methods that the created objects will have. An object is an instance of a class.

### Code Snippet
```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Alice", 30);
console.log(person1); // Output: Person { name: 'Alice', age: 30 }
```

---

## 2. Class Definition 📜

### Definition
A class definition includes the class keyword, the class name, and the body of the class, which contains properties and methods.

### Code Snippet
```typescript
class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}

const car1 = new Car("Toyota", 2020);
car1.displayInfo(); // Output: Model: Toyota, Year: 2020
```

---

## 3. Constructors 🏗️

### Definition
A constructor is a special method that is called when an instance of a class is created. It is used to initialize the properties of the class.

### Code Snippet
```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.
```

---

## 4. Access Modifiers (Public, Private, Protected) 🔒

### Definition
Access modifiers control the visibility of class members (properties and methods). The three main access modifiers are:
- **Public**: Members are accessible from anywhere.
- **Private**: Members are accessible only within the class.
- **Protected**: Members are accessible within the class and its subclasses.

### Code Snippet
```typescript
class Employee {
    public name: string;
    private salary: number;
    protected position: string;

    constructor(name: string, salary: number, position: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }

    public getSalary(): number {
        return this.salary;
    }
}

const emp = new Employee("John", 50000, "Manager");
console.log(emp.name); // Output: John
console.log(emp.getSalary()); // Output: 50000
// console.log(emp.salary); // Error: Property 'salary' is private
```

---

## 5. Readonly Practices 🔒

### Definition
The `readonly` modifier is used to mark properties that cannot be modified after the object is created. They can only be assigned during initialization or in the constructor.

### Code Snippet
```typescript
class Point {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const point = new Point(10, 20);
console.log(point.x); // Output: 10
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property
```

---

## 6. Optional Properties ❓

### Definition
Optional properties are defined using the `?` symbol. They may or may not be present in an object.

### Code Snippet
```typescript
class User {
    username: string;
    email?: string; // Optional property

    constructor(username: string, email?: string) {
        this.username = username;
        this.email = email;
    }
}

const user1 = new User("Alice");
const user2 = new User("Bob", "bob@example.com");

console.log(user1); // Output: User { username: 'Alice' }
console.log(user2); // Output: User { username: 'Bob', email: 'bob@example.com' }
```

---

## 7. Parameter Properties 🛠️

### Definition
Parameter properties allow you to declare and initialize class properties directly in the constructor parameters, reducing boilerplate code.

### Code Snippet
```typescript
class Rectangle {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area()); // Output: 50
```

---

## 8. Getters and Setters 🔄

### Definition
Getters and setters allow you to define methods for getting and setting the values of properties. They provide a way to control access to the properties.

### Code Snippet
```typescript
class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log("Radius must be positive.");
        }
    }
}

const circle = new Circle(5);
console.log(circle.radius); // Output: 5
circle.radius = 10; // Set new radius
console.log(circle.radius); // Output: 10
circle.radius = -5; // Output: Radius must be positive.
```

---

## 9. Static Members 🌟

### Definition
Static members belong to the class itself rather than to any specific instance. They can be accessed without creating an instance of the class.

### Code Snippet
```typescript
class MathUtils {
    static PI: number = 3.14;

    static areaOfCircle(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.areaOfCircle(5)); // Output: 78.5
```

---

## 10. Abstract Classes and Methods 🏗️

### Definition
Abstract classes cannot be instantiated directly and are meant to be subclassed. They can contain abstract methods that must be implemented by derived classes.

### Code Snippet
```typescript
abstract class Shape {
    abstract area(): number; // Abstract method

    display(): void {
        console.log(`Area: ${this.area()}`);
    }
}

class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}

const square = new Square(4);
square.display(); // Output: Area: 16
```

---

## Conclusion 🎉
This guide provides a comprehensive overview of classes and objects in TypeScript, covering essential concepts such as class definitions, constructors, access modifiers, and more. Understanding these concepts will help you effectively utilize object-oriented programming in TypeScript.
