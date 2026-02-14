## Angular Reactive Forms Master

A comprehensive registration and authentication system built with **Angular**. This project focuses on advanced form-handling techniques, including nested groups, dynamic arrays, and custom validation logic to ensure high-quality data entry.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## Key Features

*   **Complex Form Architecture:** Utilizes `FormGroup`, `FormControl`, and `FormArray` to manage multi-step data (Personal Info, Address, Roles).
*   **Advanced Validation Suite:**
    *   **Built-in Validators:** `required`, `email`, `minLength`.
    *   **Custom Validators:** Logic for specific requirements (e.g., `mustContainQuestionMark`).
    *   **Cross-Field Validation:** Ensures passwords and confirm passwords match perfectly.
    *   **Async Validation:** Simulates checking if an email is unique against a database.
*   **Real-time Persistence:** Automatically saves form progress to `localStorage` as the user types, using RxJS `debounceTime` to optimize performance.
*   **Dynamic UI Feedback:** Real-time error messages using Angular's `@if` control flow based on the form's state (`touched`, `dirty`, and `invalid`).
*   **Memory Management:** Implements `DestroyRef` to clean up RxJS subscriptions and prevent memory leaks.

---

## Technical Stack & Concepts

*   **Angular Reactive Forms:** For a model-driven approach to handling form inputs.
*   **RxJS:** Used `valueChanges` with `debounceTime(500)` to handle auto-save logic without overloading the system.
*   **Encapsulation:** Nested `FormGroup` for structured data like addresses and password pairs.
*   **Persistence:** Local storage integration to improve User Experience (UX) by preventing data loss on page refresh.

---

## Project Structure

Organized into modular authentication components:

```text
src/app/auth/
 ├── login/                 # Login component with auto-save logic
 ├── signup/                # Advanced registration form
 │    ├── signup.component.ts   # Complex form definition & custom validators
 │    ├── signup.component.html # Template with conditional error rendering
 │    └── signup.component.css  # Themed form styling
 ├── auth.component.ts      # Main auth container
 └── validators/            # (Logic) Custom and Async validator functions
```

## Validation Deep Dive
 Custom Validators
This project implements custom logic such as mustContainQuestionMark, demonstrating how to extend Angular's validation engine to meet specific business rules.

 Cross-Field Validation
The equalValues validator is applied at the FormGroup level to compare the 'password' and 'confirmPassword' fields, ensuring security and consistency.

 ```typescript
Auto-Save Feature
 this.form.valueChanges
  .pipe(debounceTime(500))
  .subscribe(value => {
    window.localStorage.setItem('saved-form', JSON.stringify(value));
  });
```

## Installation & Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/LeoTafarello/Angular-Projects.git
    ```

2.  **Navigate to the folder:**
    ```bash
    cd Angular-Projects/form-site
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    ng serve
    ```

5.  **View in browser:**
    Navigate to `http://localhost:4200`

### License
Distributed under the MIT License.

Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
