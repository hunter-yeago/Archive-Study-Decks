import { setAttributes } from "./helpers";
import { controller } from "./controller";

const main = document.querySelector('main');

export const view = (function() {

    const studyPage = (function(){

        function renderPage() {
            //This is for the slide in menu nav bar
            // const openNavButton = document.getElementById('opennavbtn');
            // openNavButton.addEventListener('click', toggleNav);
            //This is for the slide in menu nav bar

            renderModal();

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
            
            const deckDisplayDiv = renderDeckDisplay(controller.data.localDecks);
            
            section.append(title, deckDisplayDiv);
            
            return section;
        };

        function renderPreBuiltDecks() {

            const section = document.createElement('section');
        
            const title = document.createElement('h1');
            title.innerText = 'Prebuilt Decks';
    
            const prebuiltDecksDiv = document.createElement('div');
            prebuiltDecksDiv.className = 'deckdisplay';
    
            //TODO Reimplement pre-built decks

            // const deck1 = renderDeck();
            // const deck2 = renderDeck();
            // const deck3 = renderDeck();
    
            // const prebuiltDecks = [deck1, deck2, deck3];
            // prebuiltDecks.forEach((deck) => {
            //     prebuiltDecksDiv.appendChild(deck);
            // });
    
            section.append(title, prebuiltDecksDiv);
    
            return section;
        };

        function renderDeckDisplay(localDecks) {
    
            const deckDisplayDiv = document.createElement('div');
            deckDisplayDiv.className = 'deckdisplay';
            deckDisplayDiv.id = 'deckdisplay';

            if (localDecks.length > 0) {
                localDecks.forEach((deck) => {
                    const element = renderDeck(deck);
                    deckDisplayDiv.appendChild(element);
                });
            } else {
                const itsEmptyMessage = document.createElement('p');
                itsEmptyMessage.className = 'itsemptymessage';
                itsEmptyMessage.innerText = `It's empty in here! Go to the Edit Page to create a new deck.`;
                deckDisplayDiv.appendChild(itsEmptyMessage);
            }
    
            return deckDisplayDiv;
        };

        function removeDecksFromPage() {
            const deckDisplayDiv = document.getElementById('deckdisplay');
            const children = Array.from(deckDisplayDiv.children);
            children.forEach((child) => {
                child.remove();
            });
        }

        //TODO lots of repeating myself between the function above and this one, but, yeah
        function updateDeckDisplay(localDecks) {
            const deckDisplayDiv = document.getElementById('deckdisplay');
            removeDecksFromPage();

            localDecks.forEach((deck) => {
                const element = renderDeck(deck);
                deckDisplayDiv.appendChild(element);
            });
        }

        function renderDeck(deck) {

            const name = document.createElement('h3');
            name.innerText = deck.name;
    
            const dueDateParagraphElement = document.createElement('p');
            dueDateParagraphElement.innerText = deck.dueDate;
    
            const imageAndNameDiv = document.createElement('div');
            imageAndNameDiv.className = 'deckimageandname';
            imageAndNameDiv.append(name, dueDateParagraphElement);
    
            const deckDescriptionParagraph = document.createElement('p');
            deckDescriptionParagraph.innerText = deck.description;
    
            const deckDescriptionDiv = document.createElement('div');
            deckDescriptionDiv.className = 'deckdescriptiondiv';
            deckDescriptionDiv.appendChild(deckDescriptionParagraph);

            const deckID = `RowID:${Math.random().toString(16).slice(2)}`;
        
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.onclick = () => {
                localStorage.removeItem(deck.name);
                document.getElementById(deckID).remove();
            };

            deckDescriptionDiv.appendChild(deleteButton);
    
            const deckDiv = document.createElement('div');
            deckDiv.className = 'deck';
            deckDiv.id = deckID;
            deckDiv.append(imageAndNameDiv, deckDescriptionDiv);
            return deckDiv;
        };
        
        return {
            renderPage,
            updateDeckDisplay,
        }
    })();

    const overviewPage = (function(){

        function renderPage() {
            const overviewSection = renderOverviewSection();
            const emptySpaceWithMobileNavHeight = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();

            renderModal();
    
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
            'minLength': '1',
        });

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

        // categorySelect.oninput = () => {
        //     const length = categorySelect.value.trim().length;
        //     if (length < 1) {
        //         categorySelect.className = 'invalid';
        //     }
        //     else {
        //         categorySelect.className = 'valid';
        //     }
        // };
        
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

    function resetForm() {
        document.getElementById('modal-form').reset();
    }


    function renderDefaultPage() {
        studyPage.renderPage();
    }

    function changePage(newPageID) {
        switch (newPageID) {
            case 'studybutton':
                studyPage.renderPage();
                break;
        
            // case 'editbutton':
            //     editPage.renderPage();
            //     break;

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

    function renderBanner() {

        const path = document.createElement('path');
        path.setAttribute('d', 'M12 6V18M6 12H18');
        path.setAttribute('stroke', 'currentColor');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('height', '40px');
        svg.setAttribute('width', '40px');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.appendChild(path);

        const addDeckButton = document.createElement('button');
        addDeckButton.id = 'bannerbutton';
        addDeckButton.appendChild(svg);

        const title = document.createElement('h3');
        title.innerText = 'Study Decks';

        const innerHeaderDiv = document.createElement('div');
        innerHeaderDiv.className = 'innerheaderdiv';
        innerHeaderDiv.append(title, addDeckButton);

        const mainHeader = document.getElementById('mainheader');
        mainHeader.appendChild(innerHeaderDiv);

    }

    //TODO - problem - menu does not hide when user taps 
    //elsewhere on the page
    function addBannerButtonFunctionality() {
        const bannerButton = document.getElementById('bannerbutton');
        const menu = document.getElementById('menu');
        menu.onclick = function() {
            if (menu.style.display === 'block') {
                menu.style.display = 'none'
            } else {
                menu.style.display = 'block';
            }
        };

        bannerButton.onclick = function() {
            if (menu.style.display === 'block') {
                menu.style.display = 'none'
            } else {
                menu.style.display = 'block';
            }
        };
    }

    function makeNewAddDeckButtonWork() {
        const buttttton = document.getElementById('thebutttton');
        buttttton.onclick = function() {
            document.getElementById('modal').style.display = 'block';
        }
    }
    
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
        makeNewAddDeckButtonWork,
        addBannerButtonFunctionality,
        renderDefaultPage,
        studyPage,
        changeTabColor,
        removeMainTagContent,
        changePage,
        hideModal,
        resetForm,
        renderModal,
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