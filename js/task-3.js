document.getElementById('name-input').addEventListener('input', function() {
    const inputElement = document.getElementById('name-input');
    const outputElement = document.getElementById('name-output');
    let inputValue = inputElement.value.trim();
    
    if (inputValue === '') {
        outputElement.textContent = 'Anonymous';
    } else {
        outputElement.textContent = inputValue;
    }
});