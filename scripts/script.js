document.addEventListener('DOMContentLoaded', function () {
    const fieldsets = document.querySelectorAll('fieldset');
    const generateButton = document.getElementById('generateButton');

    // add event listeners to all radio buttons in all fieldsets
    fieldsets.forEach(function (fieldset) {
        const radios = fieldset.querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.addEventListener('change', function () {
                if (this.checked) {
                    // hide the current fieldset
                    fieldset.classList.add('hidden');

                    // show the next fieldset (if any)
                    const nextFieldset = getNextFieldset(fieldset);
                    if (nextFieldset) {
                        nextFieldset.classList.remove('hidden');
                    }

                    // show the generate button if it's the last fieldset
                    if (!nextFieldset) {
                        generateButton.classList.remove('hidden');
                    }
                }
            });
        });
    });

    // add event listener to generate button
    generateButton.addEventListener('click', function () {
        const selectedValues = getSelectedValues();
        let generatedMessage = 'Generated:';

        for (const fieldsetId in selectedValues) {
            generatedMessage += ` ${formatValue(selectedValues[fieldsetId])},`;
        }

        // remove the trailing comma and display the message
        alert(generatedMessage.slice(0, -1));
    });

    // function to get the next visible fieldset
    function getNextFieldset(currentFieldset) {
        for (let i = 0; i < fieldsets.length - 1; i++) {
            if (fieldsets[i] === currentFieldset) {
                return fieldsets[i + 1];
            }
        }
        return null;
    }

    // function to get the selected values from all fieldsets
    function getSelectedValues() {
        const selectedValues = {};
        fieldsets.forEach(function (fieldset) {
            const checkedRadio = fieldset.querySelector('input[type="radio"]:checked');
            if (checkedRadio) {
                selectedValues[fieldset.id] = checkedRadio.value;
            }
        });
        return selectedValues;
    }

    // function to format values (replace underscores with spaces)
    function formatValue(value) {
        return value.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
    }
});
