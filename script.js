function calculateIncome() {
    const grossIncome = parseFloat(document.getElementById('gross-income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value);
    const ageGroup = document.getElementById('age-group').value;
    const deductions = parseFloat(document.getElementById('deductions').value);

    // Calculate overall income after tax deductions
    let overallIncome = grossIncome + extraIncome - deductions;

    // Apply tax based on age group
    if (ageGroup === '<40') {
        // No tax for age under 40
    } else if (ageGroup === '>=40 & <60') {
        // Apply tax rate for age between 40 and 60
        overallIncome *= 0.7; // 30% tax (70% after tax)
    } else if (ageGroup === '>=60') {
        // Apply tax rate for age over 60
        overallIncome *= 0.9; // 10% tax (90% after tax)
    }

    // Display overall income in popup
    const popup = document.getElementById('popup');
    const overallIncomeElement = document.getElementById('overall-income');
    overallIncomeElement.textContent = `₹${overallIncome.toFixed(2)} `;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    
    // Reset form fields
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