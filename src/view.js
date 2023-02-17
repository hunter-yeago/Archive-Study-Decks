import { setAttributes } from "./helpers";
import { controller } from "./controller";
import { Observable } from "./pubsub";

const main = document.querySelector('main');

//TODO show remaining characters for each input
//TODO Forget green for VALID, only red for INVALID
// as a default, and then update it when decks are added?

// TODO: you can edit the cards while you're studying them

export const view = (function() {

    //TODO View: Seems kind of backwards to call RenderDeckDisplay from renderTopDecks
    //Shouldn't it be the other way around?

    const studyPage = (function(){

        function renderPage() {
            //This is for the slide in menu nav bar
            // const openNavButton = document.getElementById('opennavbtn');
            // openNavButton.addEventListener('click', toggleNav);
            //This is for the slide in menu nav bar
    
            const topDecksSection = renderTopDecks();
            const prebuiltDecksSection = renderPreBuiltDecks();
            const emptySpace = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
            
            main.append(topDecksSection, prebuiltDecksSection, emptySpace);
        };
        
        function renderTopDecks() {
            const section = document.createElement('section');
        
            const title = document.createElement('h1');
            title.innerText = 'Top Decks';
            title.id = 'topdeckstitle';
            
            const deckDisplayDiv = renderDeckDisplay();
            
            section.append(title, deckDisplayDiv);
            
            return section;
        };

        function renderPreBuiltDecks() {

            const section = document.createElement('section');
        
            const title = document.createElement('h1');
            title.innerText = 'Prebuilt Decks';
    
            const prebuiltDecksDiv = document.createElement('div');
            prebuiltDecksDiv.className = 'deckdisplay';
    
            const deck1 = renderDeck();
            const deck2 = renderDeck();
            const deck3 = renderDeck();
    
            const prebuiltDecks = [deck1, deck2, deck3];
            prebuiltDecks.forEach((deck) => {
                prebuiltDecksDiv.appendChild(deck);
            });
    
            section.append(title, prebuiltDecksDiv);
    
            return section;
        };

        function renderDeckDisplay() {

            //TODO temporarily removing deckArray since it's not functional yet
            // will manuall create default decks
            // and then come back to this and add
            //an array as an argument when the functionality is there
            // deckArray.forEach((element) => {        });
    
            const deckDisplayDiv = document.createElement('div');
            deckDisplayDiv.className = 'deckdisplay';
    
            const decks = [];
    
            if (decks.length > 0) {
                decks.forEach((deck) => {
                    deckDisplayDiv.appendChild(deck);
                });
            } else {
                const itsEmptyMessage = document.createElement('p');
                itsEmptyMessage.className = 'itsemptymessage';
                itsEmptyMessage.innerText = `It's empty in here! Go to the Edit Page to create a new deck.`;
                deckDisplayDiv.appendChild(itsEmptyMessage);
            }
    
            return deckDisplayDiv;
        };

        function renderDeck() {

            const name = document.createElement('h3');
            name.innerText = 'The Russian Element';
    
            const dueDateParagraphElement = document.createElement('p');
            dueDateParagraphElement.innerText = 'Due in X days';
    
            const imageAndNameDiv = document.createElement('div');
            imageAndNameDiv.className = 'deckimageandname';
            imageAndNameDiv.append(name, dueDateParagraphElement);
    
            const deckDescriptionParagraph = document.createElement('p');
            deckDescriptionParagraph.innerText = 'A pre-constructed deck for learning French.'
    
            const deckDescriptionDiv = document.createElement('div');
            deckDescriptionDiv.className = 'deckdescriptiondiv';
            deckDescriptionDiv.appendChild(deckDescriptionParagraph);
    
            const deckDiv = document.createElement('div');
            deckDiv.className = 'deck';
            deckDiv.append(imageAndNameDiv, deckDescriptionDiv);
            return deckDiv;
        };
        
        return {
            renderPage,
        }
    })();

    const editPage = (function(){
        function renderPage() {

            renderModal();
    
            const addDeckButton = document.createElement('button');
            addDeckButton.className = 'adddeckbutton';
            addDeckButton.innerText = 'Add a Deck';  
            addDeckButton.onclick = function() {
                document.getElementById('modal').style.display = 'block';
            }
    
            const table = renderDeckPageTable();
    
            const pageDiv = document.createElement('div');
            pageDiv.className = 'addeckpagediv';
            pageDiv.append(addDeckButton, table);
    
            const emptySpaceWithMobileNavHeight = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
            
            main.append(pageDiv, emptySpaceWithMobileNavHeight);
            renderLocalStorageDecks();
    
            //this added a listener every time I clicked it
            // so if you clicked the edit page tab 10 times before creating a deck
            //it would run the appendDeckToTable function 10 times!
            // Observable.subscribe('addDeckFunction', appendDeckToTable);
        };

        function renderDeckPageTable() {
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
        };

        function renderLocalStorageDecks() {
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
        
            //Logic to append name, duedate, and category
            // const dataCells = renderTableCells(deck.name, deck.dueDate, deck.category);
            // for (let i = 0; i < dataCells.length; i++) {
            //     row.appendChild(dataCells[i]);
            // }
    
            const nameDataCell = document.createElement('td');
            nameDataCell.innerText = deck.name;
    
            const studyButton = document.createElement('button');
            studyButton.className = 'studybutton';
            studyButton.id = 'studybutton';
            studyButton.style.backgroundColor = 'green';
            studyButton.innerText = 'Study';
    
            const addCardsButton = document.createElement('button');
            addCardsButton.className = 'addcardsbutton';
            addCardsButton.id = 'addcardsbutton';
            addCardsButton.style.backgroundColor = 'blue';
            addCardsButton.innerText = 'Add Cards';
    
            row.append(nameDataCell, studyButton, addCardsButton, deleteButton);
            table.appendChild(row);
        };

        function renderModal() {

            const modal = document.createElement('div');
            modal.id = 'modal';
            modal.className = 'modal';
            main.appendChild(modal);
    
            const modalHeader = renderModalHeader(modal);
            const modalForm = renderModalForm(modal);
    
            const modalBody = document.createElement('div');
            modalBody.className = 'modal-body';
            modalBody.appendChild(modalForm);
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            modalContent.append(modalHeader, modalBody);
    
            modal.appendChild(modalContent);
        };
    
        function renderModalHeader(modal) {
    
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
    
        function renderModalForm() {
    
            const nameInputLabel = document.createElement('label');
            nameInputLabel.htmlFor = 'deckname';
            nameInputLabel.innerText = 'Deck Name:'
            
            const nameInput = document.createElement('input');
            nameInput.required = true;
            nameInput.minLength = 1;
            setAttributes(nameInput, {
                'id': 'deckname',
                'name': 'deckname',
                'type': 'text',
                'maxLength': '20',
            });
    
            nameInput.oninput = () => {
    
                const object = controller.k;
                object.setInputElementValues();
                object.checkValidity();
                object.setValidityClass();
                
    
                // const length = nameInput.value.trim().length;
                // if (length < 1) {
                //     nameInput.className = 'invalid';
                // }
                // else {
                //     nameInput.className = 'valid';
                // }
            };
    
            const descriptionLabel = document.createElement('label');
            descriptionLabel.htmlFor = 'deckdescription';
            descriptionLabel.innerText = 'Description (Max 50 charachters):';
    
            const descriptionInput = document.createElement('textarea');
            setAttributes(descriptionInput,
                {
                    'id': 'deckdescription',
                    'class': 'deckdescription',
                    'name': 'deckdescription',
                    'rows': '4',
                    'cols': '20',
                    'maxLength': '60',
                });
    
            const dueDateLabel = document.createElement('label');
            dueDateLabel.htmlFor = 'deckduedate';
            dueDateLabel.innerText = 'Due Date:';
    
            const dueDateInput = document.createElement('input');
            dueDateInput.required = true;
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
            categorySelect.required = true;
            setAttributes(categorySelect, {
                'id': 'deckcategory',
                'name': 'deckcategory',
                'class': 'deckcategory',
            });
    
            categorySelect.oninput = () => {
                const length = categorySelect.value.trim().length;
                if (length < 1) {
                    categorySelect.className = 'invalid';
                }
                else {
                    categorySelect.className = 'valid';
                }
            };
            
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
    
            formSubmitButton.addEventListener('click', controller.handleFormInput);
    
            const form = document.createElement('form');
            form.className = 'modal-form';
            form.id = 'modal-form';
            form.append(
                nameInputLabel, nameInput, 
                categoryLabel, categorySelect,
                descriptionLabel, descriptionInput,
                dueDateLabel, dueDateInput,
                formSubmitButton);
            return form;
        };
    
        function hideModal() {
            document.getElementById('modal').style.display = 'none';
        };

        return {
            hideModal,
            renderLocalStorageDecks,
            renderPage,
        }
    })();

    const overviewPage = (function(){

        function renderPage() {
            const overviewSection = renderOverviewSection();
            const emptySpaceWithMobileNavHeight = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
    
            main.append(overviewSection, emptySpaceWithMobileNavHeight);
        };

        function renderOverviewSection() {
            const section = document.createElement('section');
            section.className = 'overview'
    
            const title = document.createElement('h1');
            title.innerText = 'Overview';
            title.id = 'overviewsectiontitle';
    
            const rowOfCardsDiv = renderOverviewCards(controller.controllerOverviewCards);
            section.append(title, rowOfCardsDiv);
    
            return section;
        };
        
        function renderOverviewCards(cards) {

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

        return {
            renderPage,
        }
    })();

    function renderDefaultPage() {
        studyPage.renderPage();
    }

    function changePage(newPageID) {
        switch (newPageID) {
            case 'studybutton':
                studyPage.renderPage();
                break;
        
            case 'editbutton':
                editPage.renderPage();
                break;

            case 'overviewbutton':
                overviewPage.renderPage();
                break;
        }
    };

    function changeTabColor(newPageID) {
        controller.mobileNavButtons.forEach((navTab) => {
            if ( navTab.id === newPageID) {
                navTab.style.borderTop = '1px solid blue';
                document.getElementById(`${navTab.id}h3`).style.color = 'blue';
            }
            else {
                navTab.style.borderTop = 'none';
                document.getElementById(`${navTab.id}h3`).style.color = 'grey';
            }
        })
    };
    
    function removeMainTagContent() {
        const mainChildren = Array.from(main.children);
        mainChildren.forEach(element => {
            element.remove();
        });
};

    function getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight() {
        const mobileNavHeight = document.getElementById('mobilenav').offsetHeight.toString();
        const emptySpaceDiv = document.createElement('div');
        emptySpaceDiv.style.height = `${mobileNavHeight}px`;
        return emptySpaceDiv;
    }

    return {
        renderDefaultPage,
        editPage,
        changeTabColor,
        removeMainTagContent,
        changePage,
        };
})();

    // function renderTableCells() {
    //     let dataCells = [];

    //     for (let i = 0; i < arguments.length; i++) {
    //         const cell = document.createElement('td');
    //         cell.innerText = arguments[i];
    //         dataCells.push(cell);
    //     }

    //     return dataCells;
    // };

//Side-bar Nav

//temporarily adding menu event listeners here
//These are the event listeners for the left slide-in navbar

// document.getElementById('overviewoption').addEventListener('click', () => {    
//     removeMainTagContent();
//     render()
//     toggleNav();
// });


// document.getElementById('adddeckoption').addEventListener('click', () => {
//     removeMainTagContent();
//     Render();
//     toggleNav();
// });

// function toggleNav() {
//     const sideNav = document.getElementById('mySidenav');
//     sideNav.classList.toggle('active');
// };