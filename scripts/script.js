        function showSelectedOptions() {
            const form = document.getElementById('optionsForm');
            const selectedOptionsDiv = document.getElementById('selectedOptions');
            const selectedOptions = [];

            // Loop through checkboxes to find selected options
            for (let i = 0; i < form.elements.length; i++) {
                const element = form.elements[i];

                if (element.type === 'checkbox' && element.checked) {
                    selectedOptions.push(element.name);
                }
            }

            // geenerate prompts
            selectedOptionsDiv.innerHTML = `<p>Selected Options: ${selectedOptions.join(', ')}</p>`;
        }
  
