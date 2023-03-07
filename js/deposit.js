document.getElementById("btn-deposit").addEventListener("click", function () {
    const newDepositAmount = getInputFieldValueById("deposit-field");
    const previousBalanceTotal = getTextElementValueById("balance-total");

    // Error Handling for empty or negative number
    if (newDepositAmount === "Invalid") {
        alert("Enter proper number");
        return;
    }

    const previousDepositTotal = getTextElementValueById("deposit-total");
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit and balance
    setTextElementValueById("deposit-total", newDepositTotal);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
});
