function changeCaseQuantity(isIncrease) {
    const btnInputField = document.getElementById('case-input-field');
    const inputValue = btnInputField.value;
    const caseQuantity = parseInt(inputValue);

    let newCaseQuantity;

    if (isIncrease === true) {
        newCaseQuantity = caseQuantity + 1;
    }
    else {
        newCaseQuantity = caseQuantity - 1;
    }

    btnInputField.value = newCaseQuantity;
    return newCaseQuantity;
}

function changeCasePrice(newCaseQuantity) {
    const casePrice = document.getElementById('case-price');
    const quantityOfCase = newCaseQuantity * 59;
    casePrice.innerText = quantityOfCase;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseQuantity = changeCaseQuantity(true);
    changeCasePrice(newCaseQuantity);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseQuantity = changeCaseQuantity(false);
    changeCasePrice(newCaseQuantity);
    calculateSubTotal();
})