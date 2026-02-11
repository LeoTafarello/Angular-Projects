# PlacePicker - Personal Travel Collection

A Full-Stack application built with **Angular** and **Node.js** that allows users to explore a gallery of breathtaking locations and curate their own personal list of "Favorite Places." 

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=rxjs&logoColor=white)

---

## Features

*   **Explore Destinations:** Browse a list of available places fetched from a backend API.
*   **One-Click Selection:** Easily add any place to your "Favorite Places" list with a single click.
*   **Dynamic Removal:** Remove a location from your favorites by clicking on it in the personal collection area.
*   **Real-time Synchronization:** The app communicates with a Node.js backend to persist your choices.
*   **Error Handling:** Robust error management using custom Modals to notify the user if API requests fail.
*   **Modern State Management:** Powered by **Angular Signals** for reactive and efficient UI updates.

---

## Tech Stack & Concepts

*   **Frontend:** Angular (Standalone Components, Signals, HttpClient).
*   **Backend:** Node.js with Express (Serving static images and RESTful API).
*   **API Communication:** Use of `GET`, `PUT`, and `DELETE` requests to manage the data.
*   **RxJS:** Implementation of operators like `map`, `tap`, and `catchError` for stream handling.
*   **Clean Architecture:** Separation of concerns between Services, Models, and Components.

---

## Project Structure

  Organized into Frontend (Angular) and Backend (Node.js) layers:
  
```text
placepikcer/
 ├── backend/                 # Node.js + Express Server
 │    ├── data/               # JSON files (places.json, user-places.json)
 │    └── app.js              # API routes and logic
 ├── src/app/
 │    ├── places/             # Place-related components
 │    │    ├── available-places/ # Lists all places from API
 │    │    ├── user-places/      # Displays user's favorites
 │    │    └── places.service.ts # Centralized API & Signals logic
 │    ├── shared/             # Shared UI (Modals, Error handling)
 │    ├── place.model.ts      # TypeScript Interface for Place objects
 │    └── app.component.ts    # Main layout

```

## Installation & Setup

To run this project locally, you must start both the Backend API and the Frontend Application:
1. Start the Backend Server
   
 ```bash
cd Angular-Projects/placepikcer/backend
npm install
node app.js
 ```

The server will run on http://localhost:3000

2. Start the Frontend (Angular)
Open a new terminal and run:

 ```bash
cd Angular-Projects/placepikcer
npm install
ng serve
 ```
Access the application at http://localhost:4200/

## Performance Highlight: Signals & API
This project leverages Angular Signals to track the state of user-selected places. This modern approach replaces traditional change detection for these specific updates, providing a significant performance boost and making the UI instantly responsive to API changes.

## License
Distributed under the MIT License.

Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
