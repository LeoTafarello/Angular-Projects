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

## Preview

*(Add a screenshot of your app here)*
> **Design Note:** The UI features a sidebar with user profiles and a main content area that dynamically updates based on the selected user.

---

## Technologies Used

*   **Angular:** Core framework for the SPA (Single Page Application).
*   **TypeScript:** For robust, type-safe code.
*   **CSS3 / SCSS:** Custom styling for the enterprise-level look.
*   **Angular Components & Services:** Organized architecture to handle data sharing between the user list and the task view.

---

## Project Structure

```text
src/
 └── app/
     ├── components/
     │   ├── user/           # User sidebar components
     │   ├── tasks/          # Task list and task item components
     │   └── header/         # Main dashboard header
     ├── models/             # Task and User interfaces
     └── services/           # Logic for managing task data and filtering
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
