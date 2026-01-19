let total = 0;
function addExpense() {
    const title = document.getElementById("title").value;
    const amount = Number(document.getElementById("amount").value);
    if (title === "" || amount === 0) return;
    total += amount;
    document.getElementById("total").innerText = total;
}