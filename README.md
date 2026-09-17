# Web-dev5

# SpendWise Dashboard

## Project Description

SpendWise is a personal finance dashboard designed to help users understand their monthly budget, expenses, savings, and remaining balance.

The project started as a visual dashboard using HTML and CSS. In Week 6, JavaScript was added to transform the dashboard from a static interface into an application that can collect and process financial information.

The application now allows users to enter their monthly budget and total expenses. JavaScript then calculates the remaining balance and percentage of the budget that has been spent.

---

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
````

---

## 1. HTML

The `index.html` file provides the structure of the SpendWise dashboard.

It contains:

* Sidebar navigation
* Dashboard header
* User information
* Total budget card
* Total expenses card
* Remaining balance card
* Six expense category cards

The HTML file also links the CSS and JavaScript files.

---

## 2. CSS

The `style.css` file controls the visual appearance of the application.

CSS Grid is used for the main dashboard layout and category cards.

Flexbox is used for:

* Sidebar navigation
* Dashboard header
* User information
* Summary cards
* Category cards

CSS custom properties are used to create a consistent color theme.

The project also includes:

* Responsive design
* Hover effects
* Keyboard focus effects
* Dark theme support
* Card shadows
* Rounded corners

---

# JavaScript Concepts

## 3. JavaScript Setup

The JavaScript file is called:

```text
script.js
```

It is connected to the HTML file using:

```html
<script src="script.js"></script>
```

The script is placed before the closing `body` tag so that the HTML elements are available when JavaScript runs.

---

## 4. Variables

Variables are used to store important application information.

Examples include:

```javascript
let monthlyBudget = 2000;
let totalExpenses = 1240;
let userName = "Hassan";
let currency = "USD";
let savingsGoal = 500;
```

These variables store information that can be used by different parts of the application.

---

## 5. Data Types

Different JavaScript data types are used in the project.

### Number

```javascript
let budget = 2000;
```

Numbers are used for financial calculations.

### String

```javascript
let category = "Food";
```

Strings are used to store text.

### Boolean

```javascript
let isBudgetActive = true;
```

A Boolean stores either `true` or `false`.

---

## 6. User Input

The application collects budgeting information using the JavaScript `prompt()` function.

For example:

```javascript
let userBudgetInput = prompt(
    "Enter your monthly budget:"
);
```

The user is then asked to enter their total expenses:

```javascript
let userExpenseInput = prompt(
    "Enter your total expenses:"
);
```

The values collected from `prompt()` are converted into numbers using:

```javascript
Number(userBudgetInput);
```

and:

```javascript
Number(userExpenseInput);
```

---

## 7. Budget Calculations

JavaScript calculates the remaining balance using subtraction.

The calculation is:

```text
Remaining Balance = Budget - Expenses
```

The project implements this calculation using a function:

```javascript
function calculateRemainingBalance(budget, expenses) {

    let remainingBalance = budget - expenses;

    return remainingBalance;
}
```

For example:

```text
Budget = $2,000
Expenses = $1,250

Remaining Balance = $750
```

---

## 8. Expense Percentage

The application also calculates how much of the budget has been spent.

The formula is:

```text
Percentage Spent = (Expenses / Budget) × 100
```

This is implemented using:

```javascript
function calculateExpensePercentage(budget, expenses) {

    let percentage = (expenses / budget) * 100;

    return percentage;
}
```

---

## 9. Functions

Functions are used to organize the JavaScript code into reusable sections.

The project includes:

### calculateRemainingBalance()

Calculates the remaining budget after expenses.

```javascript
calculateRemainingBalance(budget, expenses);
```

### calculateExpensePercentage()

Calculates the percentage of the budget that has been spent.

```javascript
calculateExpensePercentage(budget, expenses);
```

### getBudgetStatus()

Determines whether the user is within their budget, has used the entire budget, or has exceeded the budget.

```javascript
getBudgetStatus(budget, expenses);
```

Using functions makes the code easier to organize, reuse, and maintain.

---

## 10. Input Validation

The application checks whether the user entered valid numbers.

It uses:

```javascript
isNaN()
```

to check whether the entered value is not a number.

The application also checks that the budget and expenses are not negative.

---

## 11. Displaying Results

The calculated results are displayed in the browser console using `console.log()`.

Example:

```javascript
console.log("Monthly Budget:", userBudget);
console.log("Total Expenses:", userExpenses);
console.log("Remaining Balance:", remainingBalance);
```

The results are clearly labeled to make the output easy to understand.

---

## 12. Dashboard Update

After the calculations are completed, JavaScript updates the dashboard summary cards.

The budget card is updated using:

```javascript
document.getElementById(
    "budget-display"
).textContent = "$" + userBudget.toFixed(2);
```

The expenses card is updated using:

```javascript
document.getElementById(
    "expense-display"
).textContent = "$" + userExpenses.toFixed(2);
```

The remaining balance is updated using:

```javascript
document.getElementById(
    "balance-display"
).textContent = "$" + remainingBalance.toFixed(2);
```

---

# How to Test the Application

1. Open `index.html` in a browser.
2. Enter a monthly budget when prompted.
3. Enter your total expenses.
4. Click `OK`.
5. Open browser Developer Tools.
6. Select the **Console** tab.
7. Check the SpendWise report.
8. Verify that the dashboard values have been updated.

---

# Example Test

Enter:

```text
Monthly Budget: 2000
Total Expenses: 1250
```

Expected result:

```text
Remaining Balance: 750
Percentage Spent: 62.50%
Budget Status: You are within your budget.
```

---

# Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts

---

# Author