'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const attachButton = document.getElementById('attachButton');
    const fileInput = document.getElementById('fileInput');

    attachButton.addEventListener('click', function (event) {
        event.preventDefault();
        fileInput.click();
    });
});
