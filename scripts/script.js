  document.addEventListener('DOMContentLoaded', function () {
            const ageFieldset = document.getElementById('ageFieldset');
            const expressionsFieldset = document.getElementById('expressionsFieldset');
            const generateButton = document.getElementById('generateButton');

            // Add event listener to age radio buttons
            const ageRadios = document.querySelectorAll('input[name="age"]');
            ageRadios.forEach(function (radio) {
                radio.addEventListener('change', function () {
                    if (this.checked) {
                        // Hide age fieldset, show expressions fieldset, and show generate button
                        ageFieldset.classList.add('hidden');
                        expressionsFieldset.classList.remove('hidden');
                        generateButton.classList.remove('hidden');
                    }
                });
            });

            // Add event listener to generate button
            generateButton.addEventListener('click', function () {
                // Replace this with your actual generate logic
                alert('Generated: ' + document.querySelector('input[name="age"]:checked').value + ', ' + document.querySelector('input[name="expressions"]:checked').value);
            });
        });
