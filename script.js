// Monthly budget
let monthlyBudget = 2000;

// Current expenses
let totalExpenses = 1240;

// User name
let userName = "Hassan";

// Currency
let currency = "USD";

// Savings goal
let savingsGoal = 500;


/* ========================================
   2. DATA TYPES
   ======================================== */

// Number
let budget = 2000;

// Number
let expenses = 1240;

// String
let category = "Food";

// Boolean
let isBudgetActive = true;


/* ========================================
   3. BUDGET CALCULATION FUNCTION
   ======================================== */

/*
   This function calculates the amount
   remaining after expenses.
*/

function calculateRemainingBalance(budget, expenses) {

    let remainingBalance = budget - expenses;

    return remainingBalance;
}


/* ========================================
   4. EXPENSE PERCENTAGE FUNCTION
   ======================================== */

/*
   This function calculates the percentage
   of the budget that has been spent.
*/

function calculateExpensePercentage(budget, expenses) {

    let percentage = (expenses / budget) * 100;

    return percentage;
}


/* ========================================
   5. BUDGET STATUS FUNCTION
   ======================================== */

/*
   This function determines whether the
   user is within their budget.
*/

function getBudgetStatus(budget, expenses) {

    let remainingBalance = calculateRemainingBalance(
        budget,
        expenses
    );

    if (remainingBalance > 0) {

        return "You are within your budget.";

    } else if (remainingBalance === 0) {

        return "You have used your entire budget.";

    } else {

        return "You have exceeded your budget.";
    }
}


/* ========================================
   6. COLLECT USER INPUT
   ======================================== */

/*
   prompt() allows the user to enter
   their budget information.
*/

let userBudgetInput = prompt(
    "Enter your monthly budget:"
);


/*
   Convert the input from a string
   into a number.
*/

let userExpenseInput = prompt(
    "Enter your total expenses:"
);


/* ========================================
   7. PROCESS USER INPUT
   ======================================== */

let userBudget = Number(userBudgetInput);

let userExpenses = Number(userExpenseInput);


/* ========================================
   8. VALIDATE USER INPUT
   ======================================== */

if (
    isNaN(userBudget) ||
    isNaN(userExpenses) ||
    userBudget < 0 ||
    userExpenses < 0
) {

    console.log("SpendWise Error");
    console.log("----------------");

    console.log(
        "Please enter valid positive numbers for your budget and expenses."
    );

} else {

    /* ========================================
       9. PERFORM CALCULATIONS
       ======================================== */

    let remainingBalance =
        calculateRemainingBalance(
            userBudget,
            userExpenses
        );


    let expensePercentage =
        calculateExpensePercentage(
            userBudget,
            userExpenses
        );


    let budgetStatus =
        getBudgetStatus(
            userBudget,
            userExpenses
        );


    /* ========================================
       10. DISPLAY RESULTS IN CONSOLE
       ======================================== */

    console.log("================================");
    console.log("       SPENDWISE REPORT");
    console.log("================================");

    console.log(
        "User:",
        userName
    );

    console.log(
        "Currency:",
        currency
    );

    console.log(
        "Monthly Budget:",
        userBudget
    );

    console.log(
        "Total Expenses:",
        userExpenses
    );

    console.log(
        "Remaining Balance:",
        remainingBalance
    );

    console.log(
        "Percentage Spent:",
        expensePercentage.toFixed(2) + "%"
    );

    console.log(
        "Budget Status:",
        budgetStatus
    );

    console.log(
        "Savings Goal:",
        savingsGoal
    );

    console.log(
        "Budget Active:",
        isBudgetActive
    );

    console.log("================================");


    /* ========================================
       11. UPDATE DASHBOARD
       ======================================== */

    document.getElementById(
        "budget-display"
    ).textContent =
        "$" + userBudget.toFixed(2);


    document.getElementById(
        "expense-display"
    ).textContent =
        "$" + userExpenses.toFixed(2);


    document.getElementById(
        "balance-display"
    ).textContent =
        "$" + remainingBalance.toFixed(2);
}