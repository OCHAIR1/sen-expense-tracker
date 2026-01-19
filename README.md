# Student Expense Tracker

## Project Repository Link
https://github.com/OCHAIR1/sen-expense-tracker

---

## Software Development Life Cycle (SDLC)

**SDLC Method Used:** Waterfall Model

### SDLC Stages Applied
1. Requirement Analysis  
2. System Design  
3. Implementation  
4. Testing  
5. Deployment & Maintenance  

The Waterfall model was chosen because the project requirements were clearly defined before development began.

---

## Technologies Used
- HTML  
- CSS  
- JavaScript  

---

## Project Description
This project is a simple web-based application that allows students to record daily expenses and automatically calculate total spending.

---

## How the System Works
The user enters the expense title and amount. When the add button is clicked, the expense is displayed on the screen and the total amount spent is automatically updated.

---

## How to Run the Project
1. Download or clone the repository  
2. Open `index.html` in any web browser  
3. Enter expense details and add them  

---

## Author
Ochuko  
Software Engineering (SEN)

---

==================================================
## SOURCE CODE (For Academic Submission)
==================================================

index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Expense Tracker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h2>Student Expense Tracker</h2>
    <input type="text" id="title" placeholder="Expense Title">
    <input type="number" id="amount" placeholder="Amount (₦)">
    <button onclick="addExpense()">Add Expense</button>
    <ul id="list"></ul>
    <h3>Total: ₦<span id="total">0</span></h3>
</div>
<script src="script.js"></script>
</body>
</html>

style.css
body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
}
.container {
    max-width: 350px;
    background: white;
    padding: 20px;
    margin: 40px auto;
    border-radius: 8px;
}



script.js
let total = 0;
function addExpense() {
    const title = document.getElementById("title").value;
    const amount = Number(document.getElementById("amount").value);
    if (title === "" || amount === 0) return;
    total += amount;
    document.getElementById("total").innerText = total;
}

