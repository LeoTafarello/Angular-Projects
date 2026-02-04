## Server Management Dashboard

A modern, high-performance monitoring dashboard built with **Angular**. This application provides real-time insights into server health, traffic analytics, and a comprehensive support ticket management system.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## Key Features

*   **Live Server Status:** Visual indicators showing system uptime and operational status.
*   **Traffic Analytics:** Dynamic bar charts representing user activity and server requests over the last 7 days.
*   **Support Ticket System:** A complete internal workflow to open new support requests and manage active tickets.
*   **Shared Component Architecture:** Highly reusable UI elements like custom buttons and specialized input controls.
*   **Responsive Design:** A sleek, dark-themed purple interface optimized for enterprise management.

---

## Technologies Used

*   **Angular:** Framework utilizing a modular and component-driven architecture.
*   **TypeScript:** Type-safe development for complex dashboard state management.
*   **CSS3:** Advanced styling featuring custom gradients and professional UI layouts.
*   **Component Composition:** Extensive use of "Dashboard Items" as wrappers for different monitoring modules.

---

## Project Structure

Organizado de forma modular dentro de `src/app`:

```text
src/app/
 ├── dashboard/                # Main dashboard container
 │    ├── dashboard-item/      # Wrapper component for dashboard cards
 │    ├── server-status/       # Server monitoring logic and UI
 │    ├── traffic/             # Activity charts and analytics
 │    └── support-tickets/     # Ticket management system
 │         ├── new-ticket/     # Form component to open new requests
 │         └── ticket/         # Component to display individual ticket data
 ├── header/                   # Navigation and branding
 ├── shared/                   # Global reusable components
 │    ├── button/              # Custom styled buttons
 │    └── control/             # Specialized input and form controls
 ├── app.component.ts          # Root layout
 └── app.model.ts              # Global data interfaces and types
```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LeoTafarello/Angular-Projects.git
    ```

2.  **Navigate to the folder:**
    ```bash
    cd Angular-Projects/server-site/Server-site
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

##  Modules Overview

*   **Server Status**  
    Monitors system availability using real-time signals to indicate whether services are operational or require attention.

*   **User Activity (Traffic)**  
    Visualizes server requests using a bar chart system, providing a 7-day snapshot of infrastructure load.

*   **Support Tickets**  
    Divided into two main sub-modules:
    *   **New Ticket**: Handles the input and validation for opening new requests.
    *   **Ticket Item**: Manages the display and state of existing support entries.


---

### License
Distributed under the MIT License.

Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
