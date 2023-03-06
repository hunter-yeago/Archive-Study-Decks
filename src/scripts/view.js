import { setAttributes } from "./helpers";
import { controller } from "./controller";
import {Observable} from './pubsub';
import StudyIcon from '../images/studying.png';
import OverviewIcon from '../images/edit.png';

export const view = (function() {
    const main = document.getElementById('main');

    const studyPage = (function(){
        Observable.subscribe('NewDeckAdded', localDecks => {
            updateDeckDisplay(localDecks)
        });

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
            const title = renderSectionTitle('Your Decks');
            const deckDisplayDiv = renderDeckDisplay(controller.data.localDecks);
            const section = document.createElement('section');
            section.append(title, deckDisplayDiv);
            return section;
        };

        function renderPreBuiltDecks() {            
            
            const title = renderSectionTitle('Prebuilt Decks');
            const prebuiltDecksDiv = document.createElement('div');
            prebuiltDecksDiv.className = 'deckdisplay';
            controller.data.preBuiltDecks.forEach((deck) => {
                deck = renderDeck(deck);
                prebuiltDecksDiv.appendChild(deck);
            });
    
            const section = document.createElement('section');
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

        function renderStudyCardSide(cardSide, deck) {

            const numberOfCardsFront = document.createElement('p');
            numberOfCardsFront.innerText = `${deck.currentCard + 1} / ${deck.cards.length}`;
            numberOfCardsFront.className = 'numberofcards';
            numberOfCardsFront.id = `${cardSide}sectionnumberofcards`.toLowerCase();

            const header = document.createElement('h4');
            header.innerText = `${cardSide}:`;

            const text = document.createElement('p')
            text.id = `${cardSide}text`.toLowerCase();
            if (cardSide === 'Question') {
                text.innerText = deck.cards[deck.currentCard].question;
            } else {
                text.innerText = deck.cards[deck.currentCard].answer;
            }

            const innerDiv = document.createElement('div');
            innerDiv.append(header, text);

            const section = document.createElement('div');
            section.id = `${cardSide}section`.toLowerCase();
            section.className = `${cardSide}section`.toLowerCase();
            section.append(numberOfCardsFront, innerDiv);
            return section;

        };

        function updateStudyCard(deck) {
            const numberOfCardsFront = document.getElementById('questionsectionnumberofcards');
            numberOfCardsFront.innerText = `${deck.currentCard + 1} / ${deck.cards.length}`;

            const questionText = document.getElementById('questiontext');
            questionText.innerText = deck.cards[deck.currentCard].question;

            
              
            const answerText = document.getElementById('answertext');
            // answerText.innerText = deck.cards[deck.currentCard].answer;

            //Before, you would see the next answer too soon if you were on the backside
            //of the card and clicked next, with this delay, you no longer will
            //accidentally see the answer to the next card
            setTimeout(() => {
                answerText.innerText = deck.cards[deck.currentCard].answer;
              }, 100);

            const numberOfCardsBack = document.getElementById('answersectionnumberofcards');
            numberOfCardsBack.innerText = `${deck.currentCard + 1} / ${deck.cards.length}`;

            const previousButton = document.getElementById('previousbutton');
            if (deck.currentCard > 0) {
                previousButton.classList.remove('inactive')
            } else {
                previousButton.classList.add('inactive');
            }

            if (deck.currentCard + 1 === deck.cards.length) {
                document.getElementById('nextcardbutton').innerText = 'Finish Session';
            }
        }

        function renderFlipCard(questionSection, answerSection) {

            const flipCard = document.createElement('div');
            flipCard.className = 'flip-card';
            flipCard.addEventListener('click', () => {
                flipCardInner.classList.toggle('activated');
            });

            const flipCardInner = document.createElement('div');
            flipCardInner.className = 'flip-card-inner';
            flipCardInner.id = 'flip-card-inner';

            const flipCardFront = document.createElement('div');
            flipCardFront.className = 'flip-card-front';

            const flipCardBack = document.createElement('div');
            flipCardBack.className = 'flip-card-back';

            flipCard.appendChild(flipCardInner);
            flipCardInner.append(flipCardFront, flipCardBack);
            flipCardFront.appendChild(questionSection);
            flipCardBack.appendChild(answerSection);
            return flipCard;
        };

        function renderStudySession(deck) {

            const studyDiv = document.createElement('div');
            studyDiv.className = 'studydiv';

            const studyCardDiv = document.createElement('div');
            studyCardDiv.id = 'studycarddiv';
            studyCardDiv.className = 'studycarddiv';

            const deckNameHeader = renderSectionTitle(deck.name);
            deckNameHeader.className = 'decknameheader';

            const questionSection = renderStudyCardSide('Question', deck);
            const answerSection = renderStudyCardSide('Answer', deck);

            const previousButton = document.createElement('button');
            previousButton.id = 'previousbutton';
            previousButton.innerText = 'Last Card';
            previousButton.addEventListener('click', () => {
                controller.showNextStudyCard(deck, 'showprevious');
                const flipCardInner = document.getElementById('flip-card-inner');
                flipCardInner.classList.remove('activated');
            });
            previousButton.classList.add('inactive');

            const nextButton = document.createElement('button');
            nextButton.innerText = 'Next Card';
            nextButton.id = 'nextcardbutton';
            nextButton.addEventListener('click', () => {
                controller.showNextStudyCard(deck, 'shownext');
                const flipCardInner = document.getElementById('flip-card-inner');
                flipCardInner.classList.remove('activated');
            });

            const buttonsSpan = document.createElement('span');
            buttonsSpan.className = 'buttonsspan';
            buttonsSpan.append(previousButton, nextButton);

            const flipCard = renderFlipCard(questionSection, answerSection);

            studyCardDiv.append(flipCard, buttonsSpan);
            studyDiv.append(deckNameHeader, studyCardDiv)
            main.append(studyDiv);
        };

        function renderStudySessionComplete(deck) {
            const congratsDiv = document.createElement('div');
            congratsDiv.className = 'congratsdiv';

            const celebrationText = document.createElement('p');
            celebrationText.innerText = `Congratulations, you studied ${deck.cards.length} cards! Click the button below to return to your decks page`;

            const returnToDecksPageButton = document.createElement('button');
            returnToDecksPageButton.innerText = 'Return to Decks Page';
            returnToDecksPageButton.addEventListener('click', () => {
                view.removeMainTagContent();
                renderPage();
            });

            congratsDiv.append(celebrationText, returnToDecksPageButton);
            main.appendChild(congratsDiv);
        }

        function removeDecksFromPage() {
            const deckDisplayDiv = document.getElementById('deckdisplay');
            const children = Array.from(deckDisplayDiv.children);
            children.forEach((child) => {
                child.remove();
            });
        };

        function updateDeckDisplay(localDecks) {
            const deckDisplayDiv = document.getElementById('deckdisplay');
            removeDecksFromPage();

            localDecks.forEach((deck) => {
                const element = renderDeck(deck);
                deckDisplayDiv.appendChild(element);
            });
        };

        function renderDeck(deck) {

            const name = document.createElement('h3');
            name.innerText = deck.name;
    
            const dueDateParagraphElement = document.createElement('p');
            dueDateParagraphElement.innerText = `Due: ${deck.dueDate}`;
    
            const deckDescriptionParagraph = document.createElement('p');
            deckDescriptionParagraph.innerText = deck.description;

            const studyButton = document.createElement('button');
            studyButton.innerText = 'Study';
            studyButton.onclick = () => {
                removeMainTagContent();
                controller.startStudySession(deck);
            };

            const imageAndNameDiv = document.createElement('div');
            imageAndNameDiv.className = 'deckimageandname';
            imageAndNameDiv.append(name, studyButton);
    
            const deckDescriptionDiv = document.createElement('div');
            deckDescriptionDiv.className = 'deckdescriptiondiv';
            deckDescriptionDiv.append(deckDescriptionParagraph, dueDateParagraphElement);
    
            const deckDiv = document.createElement('div');
            deckDiv.className = 'deck';
            deckDiv.append(imageAndNameDiv, deckDescriptionDiv);
            return deckDiv;
        };
        
        return {
            renderPage,
            updateDeckDisplay,
            renderStudySession,
            updateStudyCard,
            renderStudyCardSide,
            renderStudySessionComplete,
        };
    })();

    const overviewPage = (function(){

        Observable.subscribe('UpdateOverviewData', cardData => {
            updateOverviewCards(cardData);
            updateDeleteDeckOptions();
        }
        );

        function renderPage() {
            renderModal();
            const overviewSection = renderOverviewSection();
            const settingsSection = renderSettingsSection();
            const emptySpaceWithMobileNavHeight = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
    
            main.append(overviewSection, settingsSection, emptySpaceWithMobileNavHeight);
        };

        function renderOverviewSection() {
            const title = renderSectionTitle('Overview');
            const rowOfCardsDiv = renderOverviewCards(controller.data.Panels);
            
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
                statistic.id = card.underlinecolor;
                statistic.className = card.underlinecolor;
                statistic.innerText = card.statistic;
        
                cardInnerDiv.append(image, title);
                cardOuterDiv.append(cardInnerDiv, statistic);
        
                rowOfCardsDiv.appendChild(cardOuterDiv);
            });
    
            return rowOfCardsDiv;
        };

        function renderSettingsSection() {
            const section = document.createElement('section');
            section.className = 'settingssection';
    
            const title = renderSectionTitle('Settings');
            
            const deleteDeckSection = renderDeleteDeckOptions();
            const resetButton = renderResetButton();

            section.append(title, deleteDeckSection, resetButton);
            return section;
        };

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
                const deckName = dropdownSelect.value;
                controller.deleteDeck(deckName);
                controller.data.Update();
                document.getElementById(deckName + 'id').remove();
            };

            const deleteDeckDiv = document.createElement('div');
            deleteDeckDiv.className = 'deletedeckdiv';
            deleteDeckDiv.append(dropdownSelect, deleteButton);

            const div = document.createElement('div');
            div.className = 'deckdeleteoptions';
            div.append(dropdownLabel, deleteDeckDiv);
            return div;
        };

        function updateOverviewCards(cards) {
            cards.forEach((card) => {
                const overviewCard = document.getElementById(card.underlinecolor);
                overviewCard.innerText = card.statistic;
            });

        };

        function updateDeleteDeckOptions() {
            const dropdownSelect = document.getElementById('dropdownselect');
            const decks = Array.from(dropdownSelect.children);
            const localDecks = controller.data.localDecks;

            decks.forEach((item) => {
                if (item.value != '') { item.remove(); }
            });
            
            localDecks.forEach((item) => {
                const option = document.createElement('option');
                option.id = item.name + 'id';
                option.value = item.name;
                option.innerText = item.name;
                dropdownSelect.appendChild(option);
            });
        };

        function renderResetButton() {
            const button = document.createElement('button');
            button.innerText = 'Delete all saved data';
            button.className = 'resetbutton';
            button.ariaLabel = 'Click here to delete all saved data';
            button.onclick = () => {
                showResetDataConfirmationWindow();
            };
            return button;
        };

        function showResetDataConfirmationWindow() {
            if (confirm('Are you sure you want to reset your data? You cannot undo this action!')) {
                Observable.publish('DataReset');    
            } else { return; }
        };

        return {
            renderPage,
        };
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
        exitSpan.onclick = () => {
            modal.style.display = 'none';
        }
        window.onclick = (event) => {
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
        nameInputLabel.innerText = `Max 20 Characters`;
        
        const nameInput = document.createElement('input');
        nameInput.required = true;
        nameInput.minLength = 1;
        setAttributes(nameInput, {
            'id': 'deckname',
            'class': 'deckname',
            'name': 'deckname',
            'type': 'text',
            'maxLength': '20',
            'minLength': '1',
        });

        const descriptionLabel = document.createElement('label');
        descriptionLabel.htmlFor = 'deckdescription';
        descriptionLabel.innerText = `Description Max 60 Characters`;

        const descriptionInput = document.createElement('textarea');
        setAttributes(descriptionInput,
            {
                'id': 'deckdescription',
                'class': 'deckdescription',
                'name': 'deckdescription',
                'rows': '8',
                'cols': '20',
                'maxLength': '60',
                'min-height': '3rem',
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
        addCardsButton.onclick = (event) => {
            event.preventDefault();
            renderAddCardModalBody();
        };

        formSubmitButton.addEventListener('click', controller.handleDeckCreationForm);

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

    function setModalAutofocus() {
        setTimeout(function() {
            const modalbody = document.getElementById('modal-body');
            const firstText = modalbody.getElementsByTagName('input')[0] || modalbody.getElementsByTagName('textarea')[0];
            firstText.focus();
          }, 1);
    }

    function renderAddCardModalBody(newDeck) {
        removeModalContent();
        renderModalAddCardInput(newDeck);
        renderModalAddCardInputHeader();
        setModalAutofocus();
    }

    function resetModal() {
        document.getElementById('modal').remove();
        renderModal();
    };

    function renderModalAddCardInput(newDeck) {

        const modalBody = document.getElementById('modal-body');

        const cardCountH3 = document.createElement('h3');
        cardCountH3.innerText = `Card: ${newDeck.cardCount + 1}`;
        cardCountH3.className = 'cardcounth3';

        const deckName = document.createElement('h3');
        deckName.innerText = newDeck.name;

        const newCardTitleDiv = document.createElement('div');
        newCardTitleDiv.className = 'newcardtitlediv';
        newCardTitleDiv.append(cardCountH3, deckName);

        const questionLabel = document.createElement('label');
        questionLabel.htmlFor = 'questioninput';
        questionLabel.innerText = 'Question:';
        
        const questionInput = document.createElement('textarea');
        questionInput.name = 'questioninput';
        questionInput.id = 'questioninput';
        questionInput.minLength = 1;
        questionInput.maxLength = 300;

        const questionDiv = document.createElement('div');
        questionDiv.className = 'questiondiv';
        questionDiv.append(questionLabel, questionInput);

        const answerLabel = document.createElement('label');
        answerLabel.htmlFor = 'answerinput';
        answerLabel.innerText = 'Answer:'
        
        const answerInput = document.createElement('textarea');
        answerInput.name = 'answerinput';
        answerInput.id = 'answerinput';
        answerInput.minLength = 1;
        answerInput.maxLength = 300;

        const answerDiv = document.createElement('div');
        answerDiv.className = 'answerdiv';
        answerDiv.append(answerLabel, answerInput);

        const modalCardForm = document.createElement('form');
        modalCardForm.id = 'modal-card-form';
        modalCardForm.append(questionDiv, answerDiv);

        const userOptionsDiv = document.createElement('div');
        userOptionsDiv.className = 'useroptionsdiv';

        const addNextCardButton = document.createElement('button');
        addNextCardButton.innerText = 'Add next card';
        addNextCardButton.addEventListener('click', () => {
            controller.handleAddCardsForm(newDeck, 'addmore')
        });

        const finishAddingCardsButton = document.createElement('button');
        finishAddingCardsButton.innerText = 'Add and Finish';
        finishAddingCardsButton.addEventListener('click', () => {
            controller.handleAddCardsForm(newDeck, 'doneadding')
        });

        userOptionsDiv.append(addNextCardButton, finishAddingCardsButton);
        modalBody.append(newCardTitleDiv, modalCardForm, userOptionsDiv);
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

    function resetForm(form) {
        form.reset();
    }

    function renderPage(newPageID) {
        removeMainTagContent();
        switch (newPageID) {
            case 'studypage':
                studyPage.renderPage();
                break;

            case 'overviewpage':
                overviewPage.renderPage();
                break;
        }
    };

    function changeTabColor(newPageID) {
        view.mobileNavButtons.forEach((navTab) => {
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



    function renderSectionTitle(titleName) {
        const h1 = document.createElement('h1');
        h1.innerText = titleName;
        h1.id = titleName.slice().toLowerCase() + 'title';
        return h1;
    };

    function addBannerButtonFunctionality() {
        const menu = document.getElementById('menu');
        menu.onclick = () => {
            menu.classList.remove('show');
        };

        const bannerButton = document.getElementById('bannerbutton');
        bannerButton.onclick = () => {
            menu.classList.toggle('show');
        };


        document.onclick = () => {
            if (!bannerButton.contains(event.target)) {
                menu.classList.remove('show');
            }
        }
    };

    function makeNewAddDeckButtonWork() {
        const buttttton = document.getElementById('thebutttton');
        buttttton.onclick = () => {
            setModalAutofocus();
            document.getElementById('modal').style.display = 'block';
        }
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
    };

    function renderMobileNavigation () {
        const footer = document.createElement('footer');
        footer.id = 'footer';

        const nav = document.createElement('nav');
        nav.className = 'mobilenav';
        nav.id = 'mobilenav';
        
        const studyImage = document.createElement('img');
        studyImage.src = StudyIcon;
        studyImage.alt = 'Click here to access the study section';

        const studyH3 = document.createElement('h3');
        studyH3.id = 'studypageh3'
        studyH3.innerText = 'Study';

        const studyButton = document.createElement('button');
        studyButton.id = 'studypage';
        studyButton.append(studyImage, studyH3)
        
        const overviewImage = document.createElement('img');
        overviewImage.src = OverviewIcon;
        overviewImage.alt = 'Click here to access the study section';

        const overviewH3 = document.createElement('h3');
        overviewH3.id = 'overviewpageh3'
        overviewH3.innerText = 'Overview';

        const overviewButton = document.createElement('button');
        overviewButton.id = 'overviewpage';
        overviewButton.append(overviewImage, overviewH3)

        nav.append(studyButton, overviewButton);
        footer.appendChild(nav);

        const body = document.getElementsByTagName('body')[0];
        body.appendChild(footer);
    };

    function updateMobileNavButtons() {
        view.mobileNavButtons = Array.from([
            document.getElementById('studypage'),
            document.getElementById('overviewpage'),
            ]);
    };

    function addMobileNavEventListeners() {
        view.mobileNavButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
            const currentTabID = event.target.id;
            removeMainTagContent();
            changeTabColor(currentTabID);
            controller.changePage(currentTabID);
            });
        });
    };

    function renderDefaultView(pageID) {
        renderBanner();
        addBannerButtonFunctionality();
        makeNewAddDeckButtonWork();
        renderMobileNavigation();
        updateMobileNavButtons();
        addMobileNavEventListeners();
        renderPage(pageID)
        changeTabColor(pageID);
    };

    function renderBanner() {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', 'M12 6V18M6 12H18');

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.appendChild(path);

        const bannerButton = document.createElement('button');
        bannerButton.id = 'bannerbutton';
        bannerButton.className = 'bannerbutton';
        bannerButton.appendChild(svg);

        const title = document.createElement('h3');
        title.innerText = 'Study Decks';

        const button = document.createElement('button');
        button.id = 'thebutttton';
        button.textContent = 'Add a Deck';
 
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonbuffer');
        buttonDiv.appendChild(button);

        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        menuDiv.id = 'menu';
        menuDiv.appendChild(buttonDiv);

        const containerDiv = document.createElement('div');
        containerDiv.id = 'containerdiv';
        containerDiv.className = 'containerdiv';
        containerDiv.append(bannerButton, menuDiv);

        const innerHeaderDiv = document.createElement('div');
        innerHeaderDiv.className = 'innerheaderdiv';
        innerHeaderDiv.append(title, containerDiv);

        const mainHeader = document.createElement('header');
        mainHeader.id = 'mainheader';
        mainHeader.appendChild(innerHeaderDiv);

        const body = document.getElementsByTagName("body")[0];
        body.insertBefore(mainHeader, body.firstChild);
        
    }

    return {
        studyPage,
        resetModal,
        hideModal,
        resetForm,
        renderPage,
        renderDefaultView,
        removeMainTagContent,
        renderAddCardModalBody,
        };
})();

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