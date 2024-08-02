'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="payment-option"]');
    const organizationBlock = document.querySelector('.form__block__number');
    const detailsBlock = document.querySelector('.form__details-info');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'option1') {
                organizationBlock.classList.add('active');
                detailsBlock.classList.remove('active');
            } else if (this.value === 'option2') {
                detailsBlock.classList.add('active');
                organizationBlock.classList.remove('active');
            }
        });
    });
});
