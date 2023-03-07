// Get Input Values using ID
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;

    inputField.value = "";

    const inputFieldValue = parseFloat(inputFieldValueString);

    if (isNaN(inputFieldValue) || inputFieldValue < 0) {
        return "Invalid";
    } else {
        return inputFieldValue;
    }
}

// Get Text Values using ID
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId).innerText;
    const textElementValue = parseFloat(textElement);

    return textElementValue;
}

// Set the obtained value using ID
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
