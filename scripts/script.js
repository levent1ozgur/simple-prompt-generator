document.addEventListener("DOMContentLoaded", function () {
  const generatePortrait = document.querySelector('.custom-btn.copy');

  generatePortrait.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    // Get all the selected checkboxes
    const selectedCheckboxes = document.querySelectorAll('input[type="radio"]:checked');

    // If no checkboxes are selected, display a message and return
    if (selectedCheckboxes.length === 0) {
      alert('Please select at least one prompt.');
      return;
    }

    // Create an array to store the values of the selected radios
    const selectedValues = [];

    // Loop through the selected checkboxes and push their values to the array
    selectedCheckboxes.forEach(function (radio) {
      selectedValues.push(radio.value);
    });

    // Construct the string with the selected values separated by commas
    const commandString = selectedValues.join(', ');

    // Create a temporary textarea to copy text to the clipboard
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = commandString;
    document.body.appendChild(tempTextarea);

    // Select the text in the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Show a success message
    alert('The generated prompt has been copied to the clipboard.');
  });
});
