function calculateIncome() {
    const grossIncome = parseFloat(document.getElementById('gross-income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value);
    const ageGroup = document.getElementById('age-group').value;
    const deductions = parseFloat(document.getElementById('deductions').value);

    //income after adding extras and removing deductions
    let overallIncome = grossIncome + extraIncome - deductions;
if(overallIncome>800000){
// Apply tax based on age group
if (ageGroup === '<40') {
    overallIncome *= 0.7; // 30% tax (70% after tax)
} else if (ageGroup === '>=40 & <60') {
    overallIncome *= 0.6; // 40% tax (60% after tax)
} else if (ageGroup === '>=60') {
    overallIncome *= 0.9; // 10% tax (90% after tax)
}
}
    if(overallIncome<=0){
        overallIncome=0;
    }

    // to Display overall income in popup
    const popup = document.getElementById('popup');
    const overallIncomeElement = document.getElementById('overall-income');
    overallIncomeElement.textContent = `₹${overallIncome.toFixed(2)}`;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    
    resetForm();
}

function resetForm() {
    document.getElementById('gross-income').value = '';
    document.getElementById('extra-income').value = '';
    document.getElementById('age-group').value = '';
    document.getElementById('deductions').value = '';
}
function showErrorIcon(element, message) {
    element.style.display = 'inline';
    element.setAttribute('data-tooltip', message);
}

function hideErrorIcon(element) {
    element.style.display = 'none';
}

function validateInput(inputElement, errorIcon) {
    const inputValue = inputElement.value.trim(); // Get input value and trim whitespace

    // Check if input value contains non-numeric characters using regular expression
    if (inputValue !== '' && !/^\d*\.?\d*$/.test(inputValue)) {
        inputElement.classList.add('error'); // Add 'error' class to input to apply red border
        errorIcon.style.display = 'inline'; // Show error icon
    } else {
        inputElement.classList.remove('error'); // Remove 'error' class from input
        errorIcon.style.display = 'none'; // Hide error icon
    }
}

// Add event listeners to input fields for real-time validation
document.addEventListener('DOMContentLoaded', () => {
    const inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(input => {
        const errorIcon = input.nextElementSibling; // Get next sibling (error icon)
        input.addEventListener('input', () => {
            validateInput(input, errorIcon); // Validate input on input event
        });
    });
});