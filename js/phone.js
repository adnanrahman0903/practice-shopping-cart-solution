function changePhoneQuantity(isIncrease) {
    const btnInputField = document.getElementById('phone-input-field');
    const inputValue = btnInputField.value;
    const phoneQuantity = parseInt(inputValue);

    let newPhoneQuantity;

    if (isIncrease === true) {
        newPhoneQuantity = phoneQuantity + 1;
    }
    else {
        newPhoneQuantity = phoneQuantity - 1;
    }

    btnInputField.value = newPhoneQuantity;
    return newPhoneQuantity;
}

function changePhonePrice(newPhoneQuantity) {
    const phonePrice = document.getElementById('phone-price');
    const quantityOfPhone = newPhoneQuantity * 1219;
    phonePrice.innerText = quantityOfPhone;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneQuantity = changePhoneQuantity(true);
    changePhonePrice(newPhoneQuantity);
    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneQuantity = changePhoneQuantity(false);
    changePhonePrice(newPhoneQuantity);
    calculateSubTotal()
})

