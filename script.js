
const changeTextButton = document.getElementById('changeTextButton');
const addRemoveButton = document.getElementById('addRemoveButton');
const firstParagraph = document.getElementById('firstParagraph');
const mainContent = document.querySelector('main');

changeTextButton.addEventListener('click', function() {
    firstParagraph.textContent = "Text has been changed!";
    firstParagraph.style.color = "#27ae60";
    firstParagraph.style.fontWeight = "bold";
});

addRemoveButton.addEventListener('click', function() {
    const existingElement = document.getElementById('newElement');
    if (existingElement) {
        existingElement.remove();
        addRemoveButton.textContent = "Add Element";
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'newElement';
        newElement.textContent = "A new element has been added!";
        mainContent.appendChild(newElement);
        addRemoveButton.textContent = "Remove Element";
    }
});