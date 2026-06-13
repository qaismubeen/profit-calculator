# Profit Calculator

A clean, mobile-responsive web-based profit calculator built for Pakistani bank accounts and savings schemes. Calculates gross profit, withholding tax (WHT), and net profit based on principal amount, profit rate, and filer/non-filer tax category.

Built as part of my hands-on development work alongside IT Operations and infrastructure experience in the Pakistan Air Force.

## Live Demo

[https://qaismubeen.github.io/profit-calculator/](https://qaismubeen.github.io/profit-calculator/)

## Features

- Supports decimal profit rates (e.g. 11.4%, 12.75%)
- Calculates profit per month and per year
- Applies WHT deduction — Filer (15%) or Non-Filer (30%)
- Shows net profit after tax and total amount after 1 month / 1 year
- Auto-formats principal amount with commas on input
- Fully responsive — works on mobile, tablet, and desktop
- Single file — no dependencies, no frameworks, no build tools

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Usage

No installation required. Open `index.html` in any browser or visit the live demo above.

## Calculations

| Field | Formula |
|---|---|
| Profit / Year | Principal × Rate / 100 |
| Profit / Month | Profit per Year / 12 |
| WHT Tax | Profit per Year × Tax Rate / 100 |
| Net Profit / Year | Profit per Year − WHT Tax |
| Net Profit / Month | Net Profit per Year / 12 |
| Total After 1 Month | Principal + Net Profit per Month |
| Total After 1 Year | Principal + Net Profit per Year |

## WHT Categories

| Category | Rate |
|---|---|
| Filer | 15% |
| Non-Filer | 30% |

## Developer

**Qais Mubeen**  
IT Operations — Pakistan Air Force | Special Forces  
GitHub: [qaismubeen](https://github.com/qaismubeen)  
LinkedIn: [qaismubeen](https://linkedin.com/in/qaismubeen)
