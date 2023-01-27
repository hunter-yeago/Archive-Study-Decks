import { setAttributes } from "./helpers";
import { addDeckFunction } from "./index";
import { addDeck } from "./model";
import { Observable } from "./pubsub";

const main = document.querySelector('main');

//End Menu Button Logic

//Create Array of Main's Children and remove them
export function removeMainTagContent () {
    
    const mainChildren = Array.from(document.querySelector('.main').children);
    mainChildren.forEach(element => {
        element.remove();
    });
};

export function generateHomePage() {

    //get openbutton and add toggleNav function / same for closebutton
    const openNavButton = document.getElementById('opennavbtn');

    openNavButton.addEventListener('click', toggleNav);

    //Overview Section
    const overviewSection = document.createElement('section');
    overviewSection.className = 'overview'

    //Overview Section Title
    const overviewSectionTitle = document.createElement('h1');
    overviewSectionTitle.innerText = 'Overview';
    overviewSectionTitle.id = 'overviewsectiontitle';

    //Row of Cards Div
    const rowOfCardsDiv = document.createElement('div');
    rowOfCardsDiv.className = 'rowofcards';

    //Temporary PlaceHolder Card Information
    const card1 = {
        imagesrc: 'images/learning-color.svg',
        title: 'Decks Created',
        underlinecolor: 'greencardunderline',
        statistic: '18',
    };

    const card2 = {
        imagesrc: 'images/education-color.svg',
        title: 'Card 2 Title',
        underlinecolor: 'bluecardunderline',
        statistic: '73',
    };

    const card3 = {
        imagesrc: 'images/study-desk-color.svg',
        title: 'Card 3 Title',
        underlinecolor: 'brickcardunderline',
        statistic: '9',
    };

    const card4 = {
        imagesrc: 'images/study-lamp-color.svg',
        title: 'Card 4 Title',
        underlinecolor: 'sunshinecardunderline',
        statistic: '100',
    };

    //Array of Cards
    const overviewCards = [card1, card2, card3, card4];
    overviewCards.forEach((element) => {
        const OuterDiv = document.createElement('div');
        OuterDiv.className = 'overviewcard';

        const innerDiv = document.createElement('div');
        
        const image = document.createElement('img');
        image.src = element.imagesrc;

        const title = document.createElement('h3');
        title.innerText = element.title;
 
        const statisticContainer = document.createElement('p');
        statisticContainer.className = element.underlinecolor;
        statisticContainer.innerText = element.statistic;

        //Constructing InnerDiv
        innerDiv.append(image, title);

        //Constructing OuterDiv
        OuterDiv.append(innerDiv, statisticContainer);

        //Append card to rowOfCardsDiv
        rowOfCardsDiv.appendChild(OuterDiv);
    });

    //Your Decks Section
    const yourDecksSection = document.createElement('section');
    const yourDecksTitle = document.createElement('h1');
    yourDecksTitle.innerText = 'Top Decks';
    yourDecksTitle.id = 'yourdeckstitle';

    const deckDisplayDiv = document.createElement('div');
    deckDisplayDiv.className = 'deckdisplay';

    const decks = ['deck1', 'deck2', 'deck3'];

    decks.forEach((element) => {
        const deckDiv = document.createElement('div');
        deckDiv.className = 'deck';

        const deckImageAndNameDiv = document.createElement('div');
        deckImageAndNameDiv.className = 'deckimageandname';

        const deckImage = document.createElement('img');
        setAttributes(deckImage, {
            'src': 'gridcheckmark.svg',
            'alt': 'click here to see this decks info',
        });

        const deckName = document.createElement('h3');
        deckName.id = element;

        deckImageAndNameDiv.append(deckImage, deckName);

        const deckInfoButton = document.createElement('img');
        setAttributes(deckInfoButton, {
            'src': 'chevron-down.svg',
            'alt': 'click here to see this decks info',
            'class': 'deckinfomenubuttonimage',
        });

        deckDiv.append(deckImageAndNameDiv, deckInfoButton);
        deckDisplayDiv.appendChild(deckDiv);
    });

    //Appending Sections
    yourDecksSection.append(yourDecksTitle, deckDisplayDiv);
    overviewSection.append(overviewSectionTitle, rowOfCardsDiv);

    //Appending the sections to main
    main.append(overviewSection, yourDecksSection);
};

//This fires each time bottom mobile Nav button is clicked
export function generateMenuButtonEventListeners(id) {

    removeMainTagContent();
    toggleNav();

    switch (id) {
        case 'overviewoption':
             generateHomePage();
            break;
        case 'adddeckoption':
            generateAddDeckPage();
    }
}

export function generateAddDeckPage () {
    
    //If I don't have this here, then when I try add the onclick
    //function to the triggerButton below, then it returns null
    //(since the modal is created with this function)
    generateModal();

    const main = document.querySelector('.main');

    const addDeckPageDiv = document.createElement('div');
    addDeckPageDiv.className = 'addeckpagediv';
    main.appendChild(addDeckPageDiv);

    const triggerButton = document.createElement('button');
    setAttributes(triggerButton, {
        'id': 'myBtn',
        'class': 'adddeckbutton',
    });
    triggerButton.innerText = 'Add a Deck';  
    triggerButton.onclick = function() {
        document.getElementById('myModal').style.display = 'block';
    }

    //Create Page Title
    const addDeckPageTitle = document.createElement('h1');
    addDeckPageTitle.innerText = 'Decks';
    addDeckPageTitle.className = 'deckpagetitle';
    addDeckPageTitle.id = 'adddeckpapetitle';

    //Create Table
    const deckTable = document.createElement('table');
    deckTable.className = 'decktable';
    deckTable.id = 'huntersfirstdecktable';
    
    //Table Row (Header)
    const tableHeaderRow = document.createElement('tr');
    deckTable.appendChild(tableHeaderRow);

    //Create table header for each category
    for (let i = 0; i <= 3; i++) {
        //Table Header
        const tableHeader = document.createElement('th');
        tableHeaderRow.appendChild(tableHeader);
        tableHeader.innerText = 'Header';
    }
    addDeckPageDiv.appendChild(addDeckPageTitle);
    addDeckPageDiv.appendChild(triggerButton);
    addDeckPageDiv.appendChild(deckTable);
    addStoredDeckToTable();

    Observable.subscribe('addDeckFunction', addDataToTable);
}

    function addDataToTable (deck) {

    // Creates a unique ID# for delete button to target
    const num = Math.random().toString(16).slice(2);
    
    const deckTable = document.getElementById('huntersfirstdecktable');
    const row = document.createElement('tr');
    row.id = `RowID:${num}`;

    //Deck Name Data Cell
    const deckName = document.createElement('td');
    deckName.innerText = deck.name;
    
    //Due Date Data Cell
    const dueDate = document.createElement('td');
    dueDate.innerText = deck.dueDate;
    
    //Category Data Cell
    const category = document.createElement('td');
    category.innerText = deck.category;

    //Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    // 1. remove Item from localStorage
    // 2. remove row from DOM
    deleteBtn.onclick = () => {
        localStorage.removeItem(deck.name);
        document.getElementById(row.id).remove();
    };

    row.append(deckName, dueDate, category, deleteBtn);
    deckTable.appendChild(row);
}

function addStoredDeckToTable() {
    //If there's something in localStorage, add it to the table

    for (let i = 0; i < localStorage.length; i++) {

        const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
        addDataToTable(deck)
    }
}

function generateModal() {

    //Start Creating Modal
    const modalDiv = document.createElement('div');
    modalDiv.id = 'myModal';
    modalDiv.className = 'modal';
    modalDiv.style.display = 'none';
    
    //Modal Content
    const modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';

    //Modal Header
    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.className = 'modal-header';

    //Modal Span / X to Close
    const modalSpan = document.createElement('span');
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
    const modalHeader = document.createElement('h5');
    modalHeader.innerText = 'New Deck'

    //Body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    //Form
    const form = document.createElement('form');
    form.className = 'modal-form';
    form.action = '';

    //Name Input
    const nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = 'deckname';
    nameInputLabel.innerText = 'Deck Name:'
    const nameInput = document.createElement('input');
    
    setAttributes(nameInput, {
        'name': 'deckname',
        'id': 'deckname',
        'class': 'deckname',
    });

    //Description Input
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'deckdescription';
    descriptionLabel.innerText = 'Description:';
    const descriptionInput = document.createElement('textarea');
    setAttributes(descriptionInput,
        {
            'id': 'deckdescription',
            'class': 'deckdescription',
            'name': 'deckdescription',
            'rows': '4',
            'cols': '20',
            'maxLength': '150',
        });

    //Due Date Input
    const dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'deckduedate';
    dueDateLabel.innerText = 'Due Date:';
    const dueDateInput = document.createElement('input');
    setAttributes(dueDateInput, {
        'id': 'deckduedate',
        'name': 'deckduedate',
        'class': 'deckduedate',
    });

    //# of Cards Input
    const categoryLabel = document.createElement('label');
    categoryLabel.htmlFor = 'deckcategory';
    categoryLabel.innerText = 'Category';
    
    const category = document.createElement('input');
    setAttributes(category, {
        'id': 'deckcategory',
        'name': 'deckcategory',
        'class': 'deckcategory',
        'list': 'categorylist',
    });

    //Submit button
    const formSubmitButton = document.createElement('input');
    formSubmitButton.addEventListener('click', (event) => {
        
        // 1. Add Deck Function 
        // 2. Hide Modal. 
        // 3. Reset Form.
        event.preventDefault();
        addDeckFunction();
        if (event.target == formSubmitButton) {
            modalDiv.style.display = 'none';
            form.reset();
        }
    });

    setAttributes(formSubmitButton, {
        'type': 'submit',
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
        categoryLabel, category,
        formSubmitButton);
};

export function toggleNav() {
    
    const sideNav = document.getElementById('mySidenav');
    sideNav.classList.toggle('active');
}

//This is janky as funk but at least it works as a prototype
// Better to use a function to say 'current tab elements = blue, all others = gray'""

export function changeTabColor (id) {

    //Repeating yourself: You do the same thing in index.js
    const tabArray = Array.from([document.getElementById('leftoverviewbutton'), 
                      document.getElementById('rightstudybutton'), 
                      document.getElementById('aboutbutton')
                     ]);

            // if current tab, switch to blue, otherwise one
            tabArray.forEach((navTab) => {
                if (id === navTab.id) {
                    navTab.style.borderTop = '1px solid blue';
                    document.getElementById(`${navTab.id}h3`).style.color = 'blue';
                    console.log('firing if');
                }
                else {
                    console.log('firing else');
                    navTab.style.borderTop = 'none';
                    document.getElementById(`${navTab.id}h3`).style.color = 'grey';
                }
            })
}

export function generateAboutPage() {
    let aboutPageTitle = document.createElement('h1');
    aboutPageTitle.innerText = 'About Page';
    main.appendChild(aboutPageTitle);
}




//temporarily adding menu event listeners here
//These are the event listeners for the left slide-in navbar

// document.getElementById('overviewoption').addEventListener('click', () => {    
//     removeMainTagContent();
//     generateHomePage()
//     toggleNav();
// });


// document.getElementById('adddeckoption').addEventListener('click', () => {
//     removeMainTagContent();
//     generateAddDeckPage();
//     toggleNav();
// });