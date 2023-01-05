
let main = document.querySelector('main');
let mobilemenubutton = document.querySelector('.mobilemenubutton');

//Mobile Menu Button Logic
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if(!isDropdownButton && e.target.closest('[data-dropdown') != null) {
        return;
    }

    let currentDropDown;
    if (isDropdownButton) {
        currentDropDown = document.querySelector('.dropdown-menu');
        currentDropDown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropDown) return;
        dropdown.classList.remove('active');
    })
}, false);

//Finds the dropdown menu and removes Active class
function closeMobileMenu () {
    document.querySelector('.dropdown-menu').classList.remove('active');
}

//End Menu Button Logic


//Create Array of Main's Children and remove them
function removeMainTagContent () {
    
    let mainChildren = Array.from(document.querySelector('.main').children);
    mainChildren.forEach(element => {
        element.remove();
    });
}

//Add generateAddDeckPage logic to mobile menu
let addADeckMenuOption = document.querySelector('.addadeckoption');
addADeckMenuOption.addEventListener('click', () => {
    closeMobileMenu();
    removeMainTagContent();
    generateAddDeckPage();
});

function generateAddDeckPage () {
    let addDeckPageTitle = document.createElement('h1');
    addDeckPageTitle.innerText = 'Add a Deck Here';

    generateModal();
    main.appendChild(addDeckPageTitle);
}

function generateModal() {

    let main = document.querySelector('.main');
    let triggerButton = document.createElement('button');
    triggerButton.id = 'myBtn';
    triggerButton.innerText = 'Add a Deck';
    triggerButton.onclick = function() {
        modalDiv.style.display = 'block';
    }

    main.appendChild(triggerButton);
    
    let modalDiv = document.createElement('div');
    modalDiv.id = 'myModal';
    modalDiv.className = 'modal';
    modalDiv.style.display = 'none';
    
    let modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';

    let modalHeaderDiv = document.createElement('div');
    let modalSpan = document.createElement('span');
    modalSpan.className = 'close';
    modalSpan.innerHTML = '&times;';
    modalSpan.onclick = function() {
        modalDiv.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modalDiv) {
            modalDiv.style.display = 'none';
        }
    }

    let modalHeader = document.createElement('h2');

    let modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    let form = document.createElement('form');

    let nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = 'deckname';
    nameInputLabel.innerText = 'Deck Name:';
    let nameInput = document.createElement('input');
    nameInput.id = 'deckname';

    let descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.innerText = 'Description:';
    let descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description';

    let dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'duedate';
    dueDateLabel.innerText = 'Due Date:';
    let dueDateInput = document.createElement('input');
    dueDateInput.id = 'duedate';

    let numberOfCardsLabel = document.createElement('label');
    numberOfCardsLabel.htmlFor = 'numberofcards';
    numberOfCardsLabel.innerText = 'Number of Cards'
    let numberOfCardsInput = document.createElement('input');
    numberOfCardsInput.id = 'numberofcards';
    numberOfCardsInput.type = 'number';

    let formInput = document.createElement('input');
    formInput.type = 'submit';
    formInput.value = 'Submit';
    
    form.append(
        nameInputLabel, nameInput,
        descriptionLabel, descriptionInput,
        dueDateLabel, dueDateInput,
        numberOfCardsLabel, numberOfCardsInput,
        formInput);
    modalBody.append(form);
    modalDiv.appendChild(modalContentDiv);
    modalHeaderDiv.append(modalSpan, modalHeader);
    modalContentDiv.append(modalHeaderDiv, modalBody);
    main.appendChild(modalDiv);
}


// removeMainTagContent();
// generateModal();
// generateAddDeckPage();