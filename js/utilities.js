function getTextElementValueById(elementId) {
    const phonePrice = document.getElementById(elementId)
    const phonePriceValue = phonePrice.innerText;
    const phonePriceTotal = parseInt(phonePriceValue);
    return phonePriceTotal;
}

function calculateSubTotal() {
    const phoneTotal = getTextElementValueById('phone-price');
    const caseTotal = getTextElementValueById('case-price');

    const subTotalAmount = phoneTotal + caseTotal;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = subTotalAmount;

    const taxAmount = document.getElementById('tax');
    const taxAmountString = (subTotalAmount * 0.1).toFixed(2);
    const tax = parseFloat(taxAmountString);
    taxAmount.innerText = tax;

    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = tax + subTotalAmount;
}