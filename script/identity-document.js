'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const documentType = document.getElementById('document-type');
    const seriesRequired = document.getElementById('series-required');

    documentType.addEventListener('change', function () {
        if (documentType.value === 'passport') {
            seriesRequired.style.display = 'inline';
        } else {
            seriesRequired.style.display = 'none';
        }
    });

    documentType.dispatchEvent(new Event('change'));
});
