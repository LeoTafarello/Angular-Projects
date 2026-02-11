## Role-Based Authentication & Resource Manager

A specialized Angular application focused on user authentication and conditional content rendering. This project demonstrates how to control access to specific UI elements based on user roles (Admin, User, Guest) and implements custom directives to enhance security and user experience.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

##  Key Features

*   **Role-Based Access Control (RBAC):** Dynamically displays content based on the authenticated user's permissions:
    *   **Admin:** Full access, including exclusive management messages.
    *   **User:** Access to standard resources.
    *   **Guest:** Restricted view with authentication prompts.
*   **Custom Directives:**
    *   `SafeLinkDirective`: Intercepts clicks on external links, adding a confirmation dialog and query parameters for security tracking.
    *   `AuthDirective`: A structural directive that controls the visibility of elements based on the current user's role.
*   **Interactive Resources:** A curated list of learning links (Angular Docs, Academind, etc.) that interact with custom security logic.
*   **Authentication Service:** Centralized logic for managing login states and user credentials.

---

##  Technical Stack

*   **Angular:** Framework using Standalone components and advanced Directive logic.
*   **TypeScript:** Type-safe role management and event handling.
*   **Host Binding & Listeners:** Implementation of `@Directive` to manage DOM elements safely.
*   **Dependency Injection:** Using the modern `inject()` function to manage services and ElementRefs.

---

## Project Structure

Organized into modular authentication and resource components:

```text
src/app/
 ├── auth/                      # Authentication logic
 │    ├── auth.component.ts     # Login form and role switcher
 │    ├── auth.directive.ts     # Structural directive for role visibility
 │    └── auth.service.ts       # Global authentication state
 ├── learning-resources/        # Protected content area
 ├── safe-link.directive.ts     # Security directive for external links
 ├── log.directive.ts           # Utility directive for logging activity
 ├── app.component.ts           # Main application container
 └── app.model.ts               # User and Role type definitions
```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LeoTafarello/Angular-Projects.git
    ```

2.  **Navigate to the folder:**
    ```bash
    cd Angular-Projects/learning-resources-page
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

### Feature Highlight: Safe Link Directive
The appSafeLink directive is used on anchor tags (<a>) to prevent users from accidentally leaving the application. It triggers a browser confirmation and appends a ?from=myapp query parameter to the destination URL, demonstrating deep integration with DOM manipulation and Angular's host properties.

### License
Distributed under the MIT License.

Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
