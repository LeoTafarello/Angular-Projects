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
| 1 | $11,200.00 | $200.00 | $200.00 | $11,000.00 |
| 2 | $12,544.00 | $344.00 | $544.00 | $12,000.00 |
| ... | ... | ... | ... | ... |

---
Developed by Leonardo Tafarello (https://github.com/LeoTafarello)
