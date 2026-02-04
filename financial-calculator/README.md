#  Investment Growth Simulator

A professional-grade financial application built with **Angular** to simulate long-term wealth accumulation. This tool provides a detailed year-by-year breakdown of how initial capital and annual contributions grow over time through compound interest.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

---

##  Project Overview

This calculator helps users visualize their financial future by calculating the power of compound interest. Unlike simple calculators, this project provides a full projection table, breaking down the growth into principal vs. interest.

###  User Inputs
*   **Initial Investment:** The starting amount (lump sum).
*   **Annual Investment:** The amount contributed every year.
*   **Expected Return:** The annual interest rate (%) expected.
*   **Duration:** The total investment horizon in years.

###  Detailed Projection Table
The application generates a dynamic report with the following columns:
1.  **Year:** The timeline of the investment.
2.  **Investment Value:** The total balance at the end of that year.
3.  **Interest (Year):** The profit generated specifically within that year.
4.  **Total Interest:** The cumulative interest earned since the beginning.
5.  **Invested Capital:** The total "out-of-pocket" amount (Initial + Annual additions).

---

##  Tech Stack

*   **Framework:** [Angular](https://angular.io/) (Latest version)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Forms:** Angular Reactive Forms for real-time validation.
*   **Styling:** (Add here: Tailwind CSS / Angular Material / Scss)
*   **Formatting:** Built-in Currency Pipes for localized financial formatting.

---

##  Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18+)
*   [Angular CLI](https://angular.io/cli)

### Project Structure

```text
src/app/
 ├── header/                    # Dashboard header (logo and title)
 ├── investiment-result/        # Table component to display calculation results
 ├── user-input/                # Form component for user data entry
 │    └── user-input.model.ts   # Interface for investment data types
 ├── app-investiment.service.ts # Centralized logic for financial math
 ├── app.component.ts           # Main application shell
 └── app.component.html         # Main layout orchestrator
```
---

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LeoTafarello/financial-calculator.git
    ```

2.  **Navigate to the folder:**
    ```bash
    cd financial-calculator
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

##  Projection Example

| Year | Investment Value | Interest (Year) | Total Interest | Invested Capital |
|:---:|:---:|:---:|:---:|:---:|
| 1 | $10,700.00 | $600.00 | $600.00 | $10,100.00 |
| 2 | $11,442.00 | $642.00 | $1.242.00 | $10,200.00 |
| ... | ... | ... | ... | ... |

---
Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
