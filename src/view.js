import { setAttributes } from "./helpers";
import { addDeckFunction } from "./index";
import { Observable } from "./pubsub";

const main = document.querySelector('main');

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

    Observable.subscribe('addDeckFunction', appendDeckToTable);
}

//Is this the right name?
function appendDeckToTable (deck){
    
    const deckTable = document.getElementById('huntersfirstdecktable');
    const row = document.createElement('tr');
    row.id = `RowID:${Math.random().toString(16).slice(2)}`;

    const tableDataCellArray = generateTableDataCells(deck.name, deck.dueDate, deck.category);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(deck.name);
        document.getElementById(row.id).remove();
    };

    for (let i = 0; i < tableDataCellArray.length; i++) {
        row.appendChild(tableDataCellArray[i]);
    }

    row.appendChild(deleteButton);
    deckTable.appendChild(row);
}

function generateTableDataCells () {

    let arrayOfDataCells = [];

    for (let i = 0; i < arguments.length; i++) {
        const tableDataCell = document.createElement('td');
        tableDataCell.innerText = arguments[i];
        arrayOfDataCells.push(tableDataCell);
    }

    return arrayOfDataCells;

}

function addStoredDeckToTable() {
    for (let i = 0; i < localStorage.length; i++) {

        const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
        appendDeckToTable(deck);
    }
}

function generateModal() {

    const modalDiv = document.createElement('div');
    setAttributes(modalDiv, {
        'id': 'myModal',
        'class': 'modal',
    });
    
    const modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';

    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.className = 'modal-header';

    const exitSpan = document.createElement('span');
    exitSpan.innerHTML = '&times;';
    exitSpan.onclick = function() {
        modalDiv.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modalDiv) {
            modalDiv.style.display = 'none';
        }
    }

    const modalHeader = document.createElement('h5');
    modalHeader.innerText = 'New Deck'

    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const modalForm = document.createElement('form');
    modalForm.className = 'modal-form';
    modalForm.action = '';

    const nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = 'deckname';
    nameInputLabel.innerText = 'Deck Name:'
    
    const nameInput = document.createElement('input');
    setAttributes(nameInput, {
        'name': 'deckname',
        'id': 'deckname',
        'class': 'deckname',
    });

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

    const dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'deckduedate';
    dueDateLabel.innerText = 'Due Date:';

    const dueDateInput = document.createElement('input');
    setAttributes(dueDateInput, {
        'id': 'deckduedate',
        'name': 'deckduedate',
        'class': 'deckduedate',
    });

    const categoryLabel = document.createElement('label');
    categoryLabel.htmlFor = 'deckcategory';
    categoryLabel.innerText = 'Category';
    
    const categoryInput = document.createElement('input');
    setAttributes(categoryInput, {
        'id': 'deckcategory',
        'name': 'deckcategory',
        'class': 'deckcategory',
        'list': 'categorylist',
    });

    const formSubmitButton = document.createElement('input');
    formSubmitButton.addEventListener('click', (event) => {
        event.preventDefault();
        addDeckFunction();
        if (event.target == formSubmitButton) {
            modalDiv.style.display = 'none';
            modalForm.reset();
        }
    });

    setAttributes(formSubmitButton, {
        'type': 'submit',
        'value': 'Add Deck',
        'class': 'submitbutton',
    });
    
    main.appendChild(modalDiv);
    modalContentDiv.append(modalHeaderDiv, modalBody);
    modalHeaderDiv.append(modalHeader, exitSpan);
    modalDiv.appendChild(modalContentDiv);
    modalBody.appendChild(modalForm);
    modalForm.append(
        nameInputLabel, nameInput,
        descriptionLabel, descriptionInput,
        dueDateLabel, dueDateInput,
        categoryLabel, categoryInput,
        formSubmitButton);
};

export function toggleNav() {
    
    const sideNav = document.getElementById('mySidenav');
    sideNav.classList.toggle('active');
}

export function changeTabColor (currentTabID, mobileNavButtonArray) {

    mobileNavButtonArray.forEach((navTab) => {
        if ( navTab.id === currentTabID) {
            navTab.style.borderTop = '1px solid blue';
            document.getElementById(`${navTab.id}h3`).style.color = 'blue';
        }
        else {
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

export function changeCurrentTab(currentTabID) {
    switch (currentTabID) {
        case 'leftoverviewbutton':
            generateHomePage();
            break;
    
        case 'rightstudybutton':
            generateAddDeckPage();
            break;
    
        case 'aboutbutton':
            generateAboutPage();
            break;
    }
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