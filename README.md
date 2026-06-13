# Profit Calculator

A professional, fully-featured web-based profit calculator built for Pakistani bank accounts and savings schemes. Calculates gross profit, withholding tax (WHT), Zakat deductions, and net profit — with comparison, charting, break-even analysis, PDF export, and session history.

Built as part of my hands-on development work alongside IT Operations and infrastructure experience in the Pakistan Air Force.

## Live Demo

[https://qaismubeen.github.io/profit-calculator/](https://qaismubeen.github.io/profit-calculator/)

## Features

- Supports decimal profit rates (e.g. 11.4%, 12.75%)
- WHT categories — Without WHT, Filer (15%), Non-Filer (30%)
- Optional Zakat deduction (2.5%) via checkbox
- Gross profit, deductions, and net profit per month and per year
- Compare two separate calculations side by side in a detailed table
- Bar and Pie chart toggle for visual breakdown
- Break-even calculator — find required rate or required principal for a target monthly income
- Session history — last 5 calculations, clickable to reload
- Export results and comparison table to a themed PDF
- Auto-formats principal amount with commas on input
- Fully responsive — mobile, tablet, and desktop
- Single file — no backend, no dependencies except Chart.js and jsPDF via CDN

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js
- jsPDF

## Usage

No installation required. Open `index.html` in any browser or visit the live demo above.

## Calculations

| Field | Formula |
|---|---|
| Profit / Year | Principal × Rate / 100 |
| Profit / Month | Profit per Year / 12 |
| WHT | Profit per Year × WHT Rate / 100 |
| Zakat | Profit per Year × 2.5 / 100 |
| Net Profit / Year | Profit per Year − Total Deductions |
| Net Profit / Month | Net Profit per Year / 12 |
| Total After 1 Month | Principal + Net Profit per Month |
| Total After 1 Year | Principal + Net Profit per Year |

## WHT Categories

| Category | Rate |
|---|---|
| Without Withholding Tax | 0% |
| Filer | 15% |
| Non-Filer | 30% |

## Developer

**Qais Mubeen**  
IT Operations — Pakistan Air Force | Special Forces  
GitHub: [qaismubeen](https://github.com/qaismubeen)  
LinkedIn: [qaismubeen](https://linkedin.com/in/qaismubeen)
