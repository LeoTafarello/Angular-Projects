## Task Manager - Enterprise Edition

A sleek and modern task management application built with **Angular**. This project focuses on a professional enterprise-level interface, now featuring a robust **Dynamic Routing** system for seamless navigation and data management.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## Key Features

*   **Dynamic Routing & Navigation:** Every action has its own unique URL, allowing for deep linking and browser history support.
*   **User-Centric Dashboards:** Navigate through specific user profiles using dynamic route parameters (`/users/:userId`).
*   **Nested Route Architecture:** Managed task views and "Add Task" forms using child routes for a cleaner UI flow.
*   **Data Resolvers:** Pre-fetches user and task data before the component loads, ensuring a smooth transition between views.
*   **Navigation Guards:** Implements `CanDeactivate` to prevent users from accidentally losing unsaved changes when leaving the "New Task" form.
*   **Custom 404 Page:** Intelligent "Not Found" handling for invalid URLs.

---

## Technologies Used

*   **Angular Router:** Utilizing Nested Routes, Resolvers, and Guards.
*   **TypeScript:** Type-safe route definitions and parameter handling.
*   **Reactive Logic:** Real-time updates synchronized with the current URL state.

---

## Project Structure

```text
src/app/
 ├── header/                # Global navigation and branding
 ├── tasks/                 # Task feature module
 │    ├── new-task/         # Form with 'canLeaveEditPage' Guard
 │    ├── no-task/          # Default fallback view
 │    ├── task/             # Individual task item
 │    └── tasks.service.ts  # Task data logic
 ├── users/                 # User feature module
 │    ├── user/             # User profile sidebar components
 │    ├── user-tasks/       # Main dashboard with Resolvers
 │    └── users.routes.ts   # Child routes for users
 ├── shared/                # Global reusable resources
 │    └── card/             # UI Wrapper using <ng-content>
 ├── not-found/             # 404 Custom error page
 ├── app.component.ts       # Main application shell & logic
 ├── app.routes.ts          # Main routing configuration
 └── dummy-users.ts         # Mock data for users and profiles
 ```

## Routing Logic

The application follows a structured URL hierarchy for a seamless navigation experience:

| Path | Component | Description |
|:--- |:--- |:--- |
| `/` | `NoTaskComponent` | Default home view when no user is selected. |
| `/users/:uid` | `UserTasksComponent` | Main dashboard for a specific user. |
| `/users/:uid/tasks` | `TasksComponent` | List of all tasks (pre-loaded via Resolvers). |
| `/users/:uid/tasks/new` | `NewTaskComponent` | Form to create tasks (protected by Guards). |
| `/**` | `NotFoundComponent` | 404 Catch-all route for invalid URLs. |

### Advanced Routing Concepts Applied:

*   **Resolvers (`resolve`):**  
    Used to fetch `userName` and `userTasks` before the component even starts to load. This ensures the UI never shows "empty" or "undefined" states while waiting for data.
    
*   **Guards (`canDeactivate`):**  
    The `canLeaveEditPage` guard is implemented on the task creation form. It detects if the user has unsaved data and triggers a confirmation prompt before allowing them to navigate away.
    
*   **Redirects:**  
    Automatic redirection from empty child paths (`/users/:uid`) directly to the tasks list to ensure the user always lands on a functional page.

## Installation & Setup
1. **Clone the repository:**
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

Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
