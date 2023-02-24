import { setAttributes } from "./helpers";
import { controller } from "./controller";
import {Observable} from './pubsub';

const main = document.querySelector('main');

export const view = (function() {

    const studyPage = (function(){

        function renderPage() {
            //This is for the slide in menu nav bar
            // const openNavButton = document.getElementById('opennavbtn');
            // openNavButton.addEventListener('click', toggleNav);
            //This is for the slide in menu nav bar

            renderModal();

            const topDecksSection = renderYourDecks();
            const prebuiltDecksSection = renderPreBuiltDecks();
            const emptySpace = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
            
            main.append(topDecksSection, prebuiltDecksSection, emptySpace);
        };
        
        function renderYourDecks() {
            const section = document.createElement('section');
            const title = renderSectionTitle('Your Decks');

            controller.data.updateData();
            
            const deckDisplayDiv = renderDeckDisplay(controller.data.localDecks);
            
            section.append(title, deckDisplayDiv);
            
            return section;
        };

        function renderPreBuiltDecks() {

            const section = document.createElement('section');
        
            const title = renderSectionTitle('Prebuilt Decks');
    
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
                itsEmptyMessage.innerText = `It's empty in here! Click the blue button above to create a new deck.`;
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
            dueDateParagraphElement.innerText = `Due: ${deck.dueDate}`;
    
            const imageAndNameDiv = document.createElement('div');
            imageAndNameDiv.className = 'deckimageandname';
            imageAndNameDiv.append(name);
    
            const deckDescriptionParagraph = document.createElement('p');
            deckDescriptionParagraph.innerText = deck.description;

            const studyButton = document.createElement('button');
            studyButton.innerText = 'Study';
            studyButton.id = 'studybutton';
            studyButton.className = 'studybutton';
            studyButton.onclick = function() {
                // Observable.publish('Study', deck.name);
            };
    
            const deckDescriptionDiv = document.createElement('div');
            deckDescriptionDiv.className = 'deckdescriptiondiv';
            deckDescriptionDiv.append(deckDescriptionParagraph, dueDateParagraphElement, studyButton);
    
            const deckDiv = document.createElement('div');
            deckDiv.className = 'deck';
            deckDiv.append(imageAndNameDiv, deckDescriptionDiv);
            return deckDiv;
        };
        
        return {
            renderPage,
            updateDeckDisplay,
        }
    })();

    const overviewPage = (function(){

        Observable.subscribe('UpdateOverviewData', updateDeleteDeckOptions);

        function renderPage() {
            renderModal();
            const overviewSection = renderOverviewSection();
            const settingsSection = renderSettingsSection();
            const emptySpaceWithMobileNavHeight = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
    
            main.append(overviewSection, settingsSection, emptySpaceWithMobileNavHeight);
        };

        function renderOverviewSection() {
            const title = renderSectionTitle('Overview');
            const rowOfCardsDiv = renderOverviewCards(controller.data.controllerOverviewCards);
            
            const section = document.createElement('section');
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

        function updateOverviewCards() {
            
        }

        function renderSettingsSection() {
            const section = document.createElement('section');
            section.className = 'settingssection';
    
            const title = renderSectionTitle('Settings');
            
            const deleteDeckSection = renderDeleteDeckOptions();
            const resetButton = renderResetButton();

            section.append(title, deleteDeckSection, resetButton);
            return section;
        }

        function renderDeleteDeckOptions() {

            const decks = Array.from(controller.data.localDecks);
            
            const dropdownLabel = document.createElement('label');
            dropdownLabel.htmlFor = 'decks';
            dropdownLabel.innerText = 'Choose a deck you would like to delete';

            const dropdownSelect = document.createElement('select');
            dropdownSelect.name = 'decks';
            dropdownSelect.id = 'dropdownselect';

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.innerText = '___________';
            dropdownSelect.appendChild(defaultOption);

            decks.forEach((item) => {
                const option = document.createElement('option');
                option.id = item.name + 'id';
                option.value = item.name;
                option.innerText = item.name;
                dropdownSelect.appendChild(option);
            });

            const deleteButton = document.createElement('button');
            deleteButton.className = 'deckdeletebutton';
            deleteButton.innerHTML = 'Delete';
            
            deleteButton.onclick = () => {
                const deck = dropdownSelect.value;
                localStorage.removeItem(deck);
                document.getElementById(deck + 'id').remove();
            };
            //update the page somehow?

            const horizontalDiv = document.createElement('div');
            horizontalDiv.className = 'horizontaldiv';
            horizontalDiv.append(dropdownSelect, deleteButton);

            const div = document.createElement('div');
            div.className = 'deckdeleteoptions';
            div.append(dropdownLabel, horizontalDiv);
            return div;
        }

        function updateDeleteDeckOptions() {
            const dropdownSelect = document.getElementById('dropdownselect');
            const decks = Array.from(dropdownSelect.children);
            const data = controller.data.localDecks;

            decks.forEach((item) => {
                if (item.value != '') { item.remove(); }
            });
            
            data.forEach((item) => {
                const option = document.createElement('option');
                option.id = item.name + 'id';
                option.value = item.name;
                option.innerText = item.name;
                dropdownSelect.appendChild(option);
            });
        }

        function renderResetButton() {
            const button = document.createElement('button');
            button.innerText = 'Delete all saved data';
            button.className = 'resetbutton';
            button.ariaLabel = 'Click here to delete all saved data';
            button.onclick = function() {
                // localStorage.clear();
                showResetDataConfirmationWindow();
            };
            return button;
        }

        function showResetDataConfirmationWindow() {
            if (confirm('Are you sure you want to reset your data? You cannot undo this action!')) {
                // localStorage.clear();
                Observable.publish('DataReset');
                
            } else { return; }
        }

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
        modalBody.id = 'modal-body';
        modalBody.appendChild(modalForm);
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.id = 'modal-content';
        modalContent.append(modalHeader, modalBody);

        modal.appendChild(modalContent);
    };

    function renderModalHeader(modal) {

        const modalHeader = document.createElement('h5');
        modalHeader.innerText = 'Step 1: Create Deck'
        modalHeader.id = 'modalheaderh5';

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
        formSubmitButton.innerText = 'Create Deck';
        formSubmitButton.type = 'button';
        formSubmitButton.className = 'submitbutton';

        const addCardsButton = document.createElement('button');
        addCardsButton.innerText = 'Add Cards';
        addCardsButton.type = 'button';
        addCardsButton.onclick = function(event) {
            event.preventDefault();
            Observable.publish('AddCards', 'testdata');
        };

        formSubmitButton.addEventListener('click', controller.handleFormInput);

        const form = document.createElement('form');
        form.className = 'modal-form';
        form.id = 'modal-form';
        form.append(
            nameInputLabel, nameInput, 
            categoryLabel, categorySelect,
            descriptionLabel, descriptionInput,
            dueDateLabel, dueDateInput,
            addCardsButton, formSubmitButton);
        return form;
    };

    function setModalAutofocus() {
        setTimeout(function() {
            const modalbody = document.getElementById('modal-body');
            const firstText = modalbody.getElementsByTagName('input')[0] || modalbody.getElementsByTagName('textarea')[0];
            firstText.focus();
          }, 1);
    }

    function renderAddCardModalBody() {
        removeModalContent();
        renderModalAddCardInput();
        renderModalAddCardInputHeader();
        setModalAutofocus();
    }

    function renderModalAddCardInput() {

        const modalBody = document.getElementById('modal-body');

        const cardCountH3 = document.createElement('h3');
        cardCountH3.innerText = 'Card 1';
        cardCountH3.className = 'cardcounth3';

        const questionLabel = document.createElement('label');
        questionLabel.htmlFor = 'questioninput';
        questionLabel.innerText = 'Question:';
        const questionInput = document.createElement('textarea');
        questionInput.name = 'questioninput';
        questionInput.minLength = 1;
        questionInput.maxLength = 50;

        const questionDiv = document.createElement('div');
        questionDiv.className = 'questiondiv';
        questionDiv.append(questionLabel, questionInput);

        const answerLabel = document.createElement('label');
        answerLabel.htmlFor = 'answerinput';
        answerLabel.innerText = 'Answer:'
        const answerInput = document.createElement('textarea');
        answerInput.name = 'answerinput';
        answerInput.minLength = 1;
        answerInput.maxLength = 50;

        const answerDiv = document.createElement('div');
        answerDiv.className = 'answerdiv';
        answerDiv.append(answerLabel, answerInput);

        const userOptionsDiv = document.createElement('div');
        userOptionsDiv.className = 'useroptionsdiv';

        const addNextCardButton = document.createElement('button');
        addNextCardButton.innerText = 'Add Next Card';
        const finishAddingCardsButton = document.createElement('button');
        finishAddingCardsButton.innerText = 'Done Adding Cards';

        userOptionsDiv.append(addNextCardButton, finishAddingCardsButton);

        modalBody.append(cardCountH3, questionDiv, answerDiv, userOptionsDiv);
    }

    function renderModalAddCardInputHeader() {
        const title = document.getElementById('modalheaderh5');
        title.innerText = 'Step 2: Add Cards';
    }

    function removeModalContent() {
        const modalBody = document.getElementById('modal-body');
        const children = Array.from(modalBody.children);
        children.forEach((child) => {
            child.remove();
        });
    }

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
        removeMainTagContent();
        switch (newPageID) {
            case 'studybutton':
                studyPage.renderPage();
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

    // function renderBanner() {

    //     const path = document.createElement('path');
    //     path.setAttribute('d', 'M12 6V18M6 12H18');
    //     path.setAttribute('stroke', 'currentColor');
    //     path.setAttribute('stroke-width', '2');
    //     path.setAttribute('stroke-linecap', 'round');
    //     path.setAttribute('stroke-linejoin', 'round');

    //     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //     svg.setAttribute('height', '40px');
    //     svg.setAttribute('width', '40px');
    //     svg.setAttribute('viewBox', '0 0 24 24');
    //     svg.appendChild(path);

    //     const addDeckButton = document.createElement('button');
    //     addDeckButton.id = 'bannerbutton';
    //     addDeckButton.appendChild(svg);

    //     const title = document.createElement('h3');
    //     title.innerText = 'Study Decks';

    //     const innerHeaderDiv = document.createElement('div');
    //     innerHeaderDiv.className = 'innerheaderdiv';
    //     innerHeaderDiv.append(title, addDeckButton);

    //     const mainHeader = document.getElementById('mainheader');
    //     mainHeader.appendChild(innerHeaderDiv);

    // }

    function renderBanner() {
        addBannerButtonFunctionality();
        makeNewAddDeckButtonWork();
    };

    function renderSectionTitle(titleName) {
        const h1 = document.createElement('h1');
        h1.innerText = titleName;
        h1.id = titleName.slice().toLowerCase() + 'title';
        // title.id = 'topdeckstitle';
        return h1;

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
            setModalAutofocus();
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
        renderDefaultPage,
        studyPage,
        changeTabColor,
        removeMainTagContent,
        changePage,
        hideModal,
        resetForm,
        renderModal,
        renderBanner,
        renderAddCardModalBody,
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