## Temperature Weather Dashboard

A specialized Angular application focused on **Data Transformation** through the power of **Pipes**. This project displays current and historical weather data, utilizing both built-in and custom-built pipes to handle date formatting, unit conversion, and dynamic sorting.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🚀 Key Features

*   **Real-time Date Formatting:** Uses Angular's built-in `date` pipe to display timestamps in a readable format.
*   **Unit Conversion (Celsius/Fahrenheit):** A custom pipe that converts temperature values on the fly and appends the correct symbol (°C/°F).
*   **Dynamic List Sorting:** An impure pipe that sorts historical data in ascending or descending order, updating automatically when the data changes.
*   **Localized View:** Displays weather data for multiple global cities (New York, Berlin, Paris, Chicago).

---

## Technical Stack & Concepts

*   **Angular:** Framework utilizing Standalone components and custom Pipes.
*   **Custom Pipes (`PipeTransform`):** 
    *   **TemperaturePipe:** Handles mathematical conversion logic and string formatting.
    *   **SortPipe:** An **Impure Pipe** (`pure: false`) designed to track changes inside arrays for real-time sorting.
*   **Control Flow:** Implementation of `@for` loops to render lists of historical temperatures.

---

## Project Structure

The project is organized to highlight the logic behind data transformation:

```text
src/app/
 ├── sort.pipe.ts          # Impure pipe for sorting arrays (asc/desc)
 ├── temperature.pipe.ts   # Custom pipe for °C to °F conversion
 ├── app.component.ts      # Main logic and temperature data sets
 ├── app.component.html    # Template applying pipes to raw data
 └── app.component.css     # Themed styling for temperature cards
```
---
## Pipes Deep Dive
1. Temperature Pipe
This pipe takes a raw number and transforms it based on parameters.

Logic: Uses formula (val * 9/5) + 32 for Celsius to Fahrenheit.
Usage: {{ value | temperature:'cel':'fah' }}

2. Sort Pipe (Impure)
Unlike standard pipes, this pipe is marked as pure: false.

Why? This allows the pipe to re-run whenever the array content changes (e.g., when a value is reset), ensuring the list remains sorted without manual triggers.
Usage: @for (temp of data | sort:'desc')

---

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LeoTafarello/Angular-Projects.git
    ```

2.  **Navigate to the folder:**
    ```bash
    cd Angular-Projects/weather-site
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
 
