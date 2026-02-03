# Task Manager - Enterprise Edition

A sleek and modern task management application built with **Angular**. This project focuses on a clean user experience, allowing users to manage tasks across different team members with a professional enterprise-level interface.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## Features

*   **User-Centric Task Lists:** Switch between different users to see their specific task assignments.
*   **Add New Tasks:** Dynamic form to add tasks to a specific user's dashboard.
*   **Remove Tasks:** Easily delete completed or cancelled tasks.
*   **Modern UI/UX:** Dark-themed interface with a purple professional palette, responsive sidebar, and clean typography.
*   **State Management:** Reactive updates when tasks are added or removed.

---

## Technologies Used

*   **Angular:** Core framework for the SPA (Single Page Application).
*   **TypeScript:** For robust, type-safe code.
*   **CSS3 / SCSS:** Custom styling for the enterprise-level look.
*   **Angular Components & Services:** Organized architecture to handle data sharing between the user list and the task view.

---

## Project Structure

Baseado na organização do diretório `src/app`:

```text
src/app/
 ├── header/            # Dashboard top header component
 ├── shared/            # Shared resources
 │    └── card/         # Reusable Card UI component
 ├── tasks/             # Task-related features
 │    ├── new-task/     # Form component to add tasks
 │    ├── task/         # Individual task item component
 │    ├── tasks.service.ts # Centralized logic for tasks
 │    └── tasks.module.ts  # Feature module for tasks
 ├── user/              # User selection/profile components
 ├── app.component.ts   # Main logic for user selection
 ├── app.module.ts      # Root module
 └── dummy-users.ts     # Mock data for testing
```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LeoTafarello/Angular-Projects.git
    ```

2.  **Navigate to the folder:**
    ```bash
    cd Angular-Projects/task-site
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

---

### License
Distributed under the MIT License.

Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
