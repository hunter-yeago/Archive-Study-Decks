import { setAttributes } from "./helpers";
import { addDeckFunction } from "./controller";
import { Observable } from "./pubsub";
import { controllerOverviewCards, controllerTemporaryDecks } from "./controller";
import {isFuture} from 'date-fns';

const main = document.querySelector('main');

export const view = (function() {
    
    const mobileNavButtons = Array.from([
        document.getElementById('overviewbutton'),
        document.getElementById('studybutton'),
        document.getElementById('aboutbutton')
        ]);
        
    function addMobileNavEventListeners() {
        mobileNavButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                
                const currentTabID = event.target.id;
                removeMainTagContent();
                changeTabColor(currentTabID, mobileNavButtons);
                changeCurrentTab(currentTabID);
            });
        });
    };

    function renderDefaultView() {
        const defaultTabID = 'overviewbutton';
        renderHomePage();
        addMobileNavEventListeners();
        changeTabColor(defaultTabID);
    }

    function renderHomePage() {
        //This is for the slide in menu nav bar
        // const openNavButton = document.getElementById('opennavbtn');
        // openNavButton.addEventListener('click', toggleNav);
        //This is for the slide in menu nav bar
    
        const overviewSection = createHomePageOverviewSection();
        const topDecksSection = createHomePageTopDecksSection();
        
        main.append(overviewSection, topDecksSection);
    };

    function createHomePageOverviewSection() {
        const section = document.createElement('section');
        section.className = 'overview'

        const title = document.createElement('h1');
        title.innerText = 'Overview';
        title.id = 'overviewsectiontitle';

        const rowOfCardsDiv = createOverviewCards(controllerOverviewCards);
        section.append(title, rowOfCardsDiv);

        return section;
    };

    function createHomePageTopDecksSection() {
        const section = document.createElement('section');
    
        const title = document.createElement('h1');
        title.innerText = 'Top Decks';
        title.id = 'topdeckstitle';
        
        const deckDisplayDiv = createDeckDisplay(controllerTemporaryDecks);
        
        section.append(title, deckDisplayDiv);
        
        return section;
    };

    function createDeckDisplay(deckArray) {

        const rows = [];
        deckArray.forEach((element) => {
            const deckDiv = document.createElement('div');
            deckDiv.className = 'deck';
    
            const imageAndNameDiv = document.createElement('div');
            imageAndNameDiv.className = 'deckimageandname';
    
            const image = document.createElement('img');
            setAttributes(image, {
                'src': 'gridcheckmark.svg',
                'alt': 'click here to see this decks info',
            });
    
            const name = document.createElement('h3');
            name.id = element;
    
            imageAndNameDiv.append(image, name);
    
            const infoButton = document.createElement('img');
            setAttributes(infoButton, {
                'src': 'chevron-down.svg',
                'alt': 'click here to see this decks info',
                'class': 'deckinfomenubuttonimage',
            });
    
            deckDiv.append(imageAndNameDiv, infoButton);
            rows.push(deckDiv);
        });
    
        const deckDisplayDiv = document.createElement('div');
        deckDisplayDiv.className = 'deckdisplay';
    
        rows.forEach((deckRow) => {
            deckDisplayDiv.appendChild(deckRow);
        });
    
        return deckDisplayDiv;
    };

    function createOverviewCards(cards) {

        const rowOfCardsDiv = document.createElement('div');
        rowOfCardsDiv.className = 'rowofcards';
        rowOfCardsDiv.id = 'rowofcards';
    
        cards.forEach((card) => {
            
            const cardOuterDiv = document.createElement('div');
            cardOuterDiv.className = 'overviewcard';
    
            const cardInnerDiv = document.createElement('div');
            
            const image = document.createElement('img');
            image.src = card.imagesrc;
    
            const title = document.createElement('h3');
            title.innerText = card.title;
     
            const statistic = document.createElement('p');
            statistic.className = card.underlinecolor;
            statistic.innerText = card.statistic;
    
            cardInnerDiv.append(image, title);
            cardOuterDiv.append(cardInnerDiv, statistic);
    
            rowOfCardsDiv.appendChild(cardOuterDiv);
        });
        return rowOfCardsDiv;
    };

    function renderAddDeckPage() {

        createModal();

        const title = document.createElement('h1');
        title.innerText = 'Decks';
        title.className = 'deckpagetitle';

        const addDeckButton = document.createElement('button');
        addDeckButton.className = 'adddeckbutton';
        addDeckButton.innerText = 'Add a Deck';  
        addDeckButton.onclick = function() {
            document.getElementById('modal').style.display = 'block';
        }

        const table = createDeckPageTable();

        const pageDiv = document.createElement('div');
        pageDiv.className = 'addeckpagediv';
        pageDiv.append(title, addDeckButton, table);
        
        main.appendChild(pageDiv);
        appendStoredDecksToTable();

        Observable.subscribe('addDeckFunction', appendDeckToTable);
    };

    function createModal() {

        const modal = document.createElement('div');
        modal.id = 'modal';
        modal.className = 'modal';
        main.appendChild(modal);

        const modalHeader = createModalHeader(modal);
        const modalForm = createModalForm(modal);

        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.appendChild(modalForm);
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.append(modalHeader, modalBody);

        modal.appendChild(modalContent);
    };

    function createModalHeader(modal) {

        const modalHeader = document.createElement('h5');
        modalHeader.innerText = 'New Deck'

        const exitSpan = document.createElement('span');
        exitSpan.innerHTML = '&times;';
        exitSpan.onclick = function() {
            modal.style.display = 'none';
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        const modalHeaderDiv = document.createElement('div');
        modalHeaderDiv.className = 'modal-header';
        modalHeaderDiv.append(modalHeader, exitSpan);
        return modalHeaderDiv;
    };

    function createModalForm(modal) {

        const nameInputLabel = document.createElement('label');
        nameInputLabel.htmlFor = 'deckname';
        nameInputLabel.innerText = 'Deck Name:'
        
        const nameInput = document.createElement('input');
        nameInput.required = true;
        setAttributes(nameInput, {
            'id': 'deckname',
            'name': 'deckname',
            'type': 'text',
        });
        nameInput.oninput = () => {
            const length = nameInput.value.trim().length;
            if (length < 1) {
                nameInput.className = 'invalid';
            }
            else {
                nameInput.className = 'valid';
            }
        };

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
            'type': 'date',
        });

        const categoryLabel = document.createElement('label');
        categoryLabel.htmlFor = 'deckcategory';
        categoryLabel.innerText = 'Category';
        
        const categorySelect = document.createElement('select');
        setAttributes(categorySelect, {
            'id': 'deckcategory',
            'name': 'deckcategory',
            'class': 'deckcategory',
        });
        
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.innerText = 'Please choose a Category';
        
        const languageOption = document.createElement('option');
        languageOption.value = 'Language';
        languageOption.innerText = 'Language';
        
        const mathOption = document.createElement('option');
        mathOption.value = 'Math';
        mathOption.innerText = 'Math';

        categorySelect.append(defaultOption, languageOption, mathOption);

        const inputs = [nameInput, descriptionInput, dueDateInput, categorySelect];
        const formSubmitButton = document.createElement('button');
        formSubmitButton.innerText = 'Add Deck';
        formSubmitButton.type = 'button';
        formSubmitButton.className = 'submitbutton';

        formSubmitButton.addEventListener('click', () => {

            //get converted Date
            const convertedDate = convertDateData(dueDateInput.value);
            console.log(convertedDate);
            const truth = validateUserDate(convertedDate);
            console.log(truth);

            if (!validateNameInput()) {
                nameInput.setCustomValidity('This field cannot be empty');
                nameInput.reportValidity();
                nameInput.classList.add('invalid');
            }
            else {
                addDeckFunction();
                modal.style.display = 'none';
                form.reset();
                resetInputValidity(inputs);
            }
        });

        const form = document.createElement('form');
        form.className = 'modal-form';
        form.append(
            nameInputLabel, nameInput,
            descriptionLabel, descriptionInput,
            dueDateLabel, dueDateInput,
            categoryLabel, categorySelect,
            formSubmitButton);
        return form;
    };

    function convertDateData(userInputDate) {
        const array = userInputDate.split('-');
        const year = array[0];
        const month = array[1];
        const day = array[2];
        return new Date(`${year}/${month}/${day}`);
    }

    function validateUserDate(userDate) {
        return isFuture(userDate);
    }

    function validateNameInput() {
        const nameInput = document.getElementById('deckname');
        const length = nameInput.value.trim().length;

        if (length < 1) {
            return false;
        }
        else {return true;}
    }

    function validateDateInput() {
        let x = document.getElementById('deckduedate');
        inputDate = x.value;
    }

 

    function resetInputValidity(inputs) {
        inputs.forEach(element => {
            element.classList.remove('valid');
        });
    }

    function appendStoredDecksToTable() {
        for (let i = 0; i < localStorage.length; i++) {
            const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
            appendDeckToTable(deck);
        }
    };

    function appendDeckToTable(deck) {

        const table = document.getElementById('decktable');
        const row = document.createElement('tr');
        row.id = `RowID:${Math.random().toString(16).slice(2)}`;
    
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => {
            localStorage.removeItem(deck.name);
            document.getElementById(row.id).remove();
        };
    
        const dataCells = createTableCells(deck.name, deck.dueDate, deck.category);
        for (let i = 0; i < dataCells.length; i++) {
            row.appendChild(dataCells[i]);
        }
    
        row.appendChild(deleteButton);
        table.appendChild(row);
    };

    function createTableCells() {
        let dataCells = [];

        for (let i = 0; i < arguments.length; i++) {
            const cell = document.createElement('td');
            cell.innerText = arguments[i];
            dataCells.push(cell);
        }

        return dataCells;
    };

    function createDeckPageTable() {
        const table = document.createElement('table');
        table.className = 'decktable';
        table.id = 'decktable';
        
        const tableHeaderRow = document.createElement('tr');
        table.appendChild(tableHeaderRow);

        for (let i = 0; i <= 3; i++) {
            const tableHeader = document.createElement('th');
            tableHeaderRow.appendChild(tableHeader);
            tableHeader.innerText = 'Header';
        }

        return table;
    }

    function changeTabColor(currentTabID) {
        mobileNavButtons.forEach((navTab) => {
            if ( navTab.id === currentTabID) {
                navTab.style.borderTop = '1px solid blue';
                document.getElementById(`${navTab.id}h3`).style.color = 'blue';
            }
            else {
                navTab.style.borderTop = 'none';
                document.getElementById(`${navTab.id}h3`).style.color = 'grey';
            }
        })
    };

    function renderAboutPage() {
        const aboutPageTitle = document.createElement('h1');
        aboutPageTitle.innerText = 'About Page';
        main.appendChild(aboutPageTitle);
    }
    
    function changeCurrentTab(currentTabID) {
        switch (currentTabID) {
            case 'overviewbutton':
                renderHomePage();
                break;
        
            case 'studybutton':
                renderAddDeckPage();
                break;
        
            case 'aboutbutton':
                renderAboutPage();
                break;
        }
    }

    function removeMainTagContent() {
    
        const mainChildren = Array.from(main.children);
        mainChildren.forEach(element => {
            element.remove();
        });
};

    return {
        renderDefaultView,
        };
})();

//Side-bar Nav

//temporarily adding menu event listeners here
//These are the event listeners for the left slide-in navbar

// document.getElementById('overviewoption').addEventListener('click', () => {    
//     removeMainTagContent();
//     renderHomePage()
//     toggleNav();
// });


// document.getElementById('adddeckoption').addEventListener('click', () => {
//     removeMainTagContent();
//     renderAddDeckPage();
//     toggleNav();
// });

// function toggleNav() {
//     const sideNav = document.getElementById('mySidenav');
//     sideNav.classList.toggle('active');
// };
