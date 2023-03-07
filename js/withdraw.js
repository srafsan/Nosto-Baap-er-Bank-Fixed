document.getElementById("btn-withdraw").addEventListener("click", function () {
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    const previousBalanceTotal = getTextElementValueById("balance-total");

    // Error Handling for empty or negative number
    if (newWithdrawAmount === "Invalid") {
        alert("Enter proper number");
        return;
    }

    const previousWithdrawTotal = getTextElementValueById("withdraw-total");
    // calculate new withdraw total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Budget exceeds the Balance.");
    } else {
        // set the withdraw and balance
        setTextElementValueById("withdraw-total", newWithdrawTotal);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById("balance-total", newBalanceTotal);
    }
});
