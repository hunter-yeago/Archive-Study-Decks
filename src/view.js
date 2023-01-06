import { setAttributes } from "./helpers";
let main = document.querySelector('main');

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
    
    //Start Creating Modal
    let modalDiv = document.createElement('div');
    modalDiv.id = 'myModal';
    modalDiv.className = 'modal';
    modalDiv.style.display = 'none';
    
    //Modal Content
    let modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';

    //Modal Header
    let modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.className = 'modal-header';

    //Modal Span / X to Close
    let modalSpan = document.createElement('span');
    modalSpan.innerHTML = '&times;';
    modalSpan.onclick = function() {
        modalDiv.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modalDiv) {
            modalDiv.style.display = 'none';
        }
    }

    //Header
    let modalHeader = document.createElement('h5');
    modalHeader.innerText = 'New Deck'

    //Body
    let modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    //Form
    let form = document.createElement('form');

    //Name Input
    let nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = 'deckname';
    nameInputLabel.innerText = 'Deck Name:'
    let nameInput = document.createElement('input');
    nameInput.id = 'deckname';

    //Description Input
    let descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.innerText = 'Description:';
    let descriptionInput = document.createElement('textarea');
    setAttributes(descriptionInput,
        {
            'id': 'description',
            'rows': '4',
            'cols': '20',
            'maxLength': '150'
        });

    //Due Date Input
    let dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'duedate';
    dueDateLabel.innerText = 'Due Date:';
    let dueDateInput = document.createElement('input');
    dueDateInput.id = 'duedate';

    //# of Cards Input
    let categoryLabel = document.createElement('label');
    categoryLabel.htmlFor = 'category';
    categoryLabel.innerText = 'Category'
    
    let category = document.createElement('input');
    category.id = 'category';
    category.className = 'test';
    category.setAttribute('list', 'categorylist');

    let categoryDataList = document.createElement('datalist');
    categoryDataList.id = 'categorylist';

    let optionLanguage = document.createElement('option');
    optionLanguage.value = 'Languages';

    let optionWebDevelopment = document.createElement('option');
    optionWebDevelopment.value = 'Web Development';

    let optionMusic = document.createElement('option');
    optionMusic.value = 'Music';

    categoryDataList.append(optionLanguage, optionWebDevelopment, optionMusic);

    //Submit button
    let formSubmitButton = document.createElement('input');
    setAttributes(formSubmitButton, {
        "type": 'submit',
        'value': 'Add Deck',
        'class': 'submitbutton',
    });
    
    //Append the Modal to the MainPage Div
    main.appendChild(modalDiv);
    //Append HeaderDiv + BodyDiv to ContentDiv
    modalContentDiv.append(modalHeaderDiv, modalBody);
    //Append h5 + Span to HeaderDiv
    modalHeaderDiv.append(modalHeader, modalSpan);
    //Append ContentDiv to Modal
    modalDiv.appendChild(modalContentDiv);
    //Append Form to BodyDiv
    modalBody.appendChild(form);
    //Append Items to Form
    form.append(
        nameInputLabel, nameInput,
        descriptionLabel, descriptionInput,
        dueDateLabel, dueDateInput,
        categoryLabel, category, categoryDataList,
        formSubmitButton);
}