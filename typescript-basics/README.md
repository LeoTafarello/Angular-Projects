## TypeScript Fundamentals & Basics

This directory contains practical notes and code examples for mastering **TypeScript**. The primary focus is understanding strong typing, modern syntax features, and object-oriented programming principles that enhance JavaScript development.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## Purpose
To document my TypeScript learning journey and serve as a quick-reference "cheat sheet" for essential concepts used in Angular projects and modern web development.

## Key Concepts in `Basic.ts`

The main file covers the following fundamental topics:

### 1. Functions & Types
*   Defining explicit types for parameters and return values.
*   Understanding the use of the `any` type and its implications.

### 2. Generics
*   Using `<T>` to create reusable functions that work with multiple types while maintaining type safety.
*   Practical example: The `insertAtBeginning` utility function for array manipulation.

### 3. Classes & Objects
*   Class declaration and instantiation (`Student` class).
*   **Shorthand Constructor:** Using access modifiers (`public`, `private`) directly within the constructor parameters to simplify attribute declaration and initialization.
*   Method logic and data encapsulation.

### 4. Interfaces
*   Defining structural contracts with `interface` to ensure objects follow a specific shape (e.g., the `Human` interface).

---

## How to View & Run
Since this is a syntax study repository, you can:
1. Read the documented code directly in [Basic.ts](./src/Basic.ts).
2. If you have `ts-node` installed, you can execute the file via terminal:
   ```bash
   ts-node src/Basic.ts
   ```
