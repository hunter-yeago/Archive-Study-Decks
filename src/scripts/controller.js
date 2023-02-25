import { model } from "./model";
import { view } from "./view";
import { Observable } from "./pubsub";

//Add functionality
// TODO show remaining characters for each input
// TODO: you can edit the cards while you're studying them
// TODO: Add cards during deck construction
//TODO add Reset functionality to Overview Page (delete localStorage and update stats)

//Clean Code/Fix Bugs
// TODO View: Seems kind of backwards to call RenderDeckDisplay from renderTopDecks //Shouldn't it be the other way around?

export const controller = (function(){

    Observable.subscribe('DataReset', resetDataAndView);
    Observable.subscribe('AddCards', studyDeck);

    const defaultTabID = 'studybutton';
    const mobileNavButtons = Array.from([
        document.getElementById('studybutton'),
        document.getElementById('overviewbutton'),
        ]);

    const data = {
        localDecks: Array.from(model.getLocalStorage()),
        Panels: model.dataPanels,

        updateLocalDecks: function() {
            this.localDecks = Array.from(model.getLocalStorage());
        },
    }

    function updateMobileNavButtons() {
        controller.mobileNavButtons = Array.from([
            document.getElementById('studybutton'),
            document.getElementById('overviewbutton'),
            ]);
    }

    function resetDataAndView() {
        model.clearLocalStorage();
        data.updateLocalDecks();
        Observable.publish('UpdateOverviewData', data.localDecks);
    };
    
    function startApplication() {
        view.renderMobileNavigation();
        updateMobileNavButtons();
        view.renderBanner();
        view.changePage(defaultTabID);
        view.changeTabColor(defaultTabID);
        model.setCurrentPage(defaultTabID);
        addMobileNavEventListeners();
    };

    function handleDeckCreationForm() {

        const nameElement = document.getElementById('deckname');
        const categoryElement = document.getElementById('deckcategory');
        const dateElement = document.getElementById('deckduedate');
        const form = document.getElementById('modal-form');

        model.nameValidator.setData(nameElement, nameElement.value.trim());
        model.categoryValidator.setData(categoryElement, categoryElement.value.trim());
        model.dateValidator.setData(dateElement, dateElement.value.trim());

        const validators = [model.nameValidator, model.categoryValidator, model.dateValidator];
        validators.forEach((input) => {
            input.checkValidity();
            input.setValidityClass();
        });
        

        const invalidInputs = validators.filter(input => input.isValid === false);
        if (invalidInputs.length > 0) {
            invalidInputs.forEach((invalidInput) => {
                invalidInput.displayWarning();
                return;
            });
        } else {
            const formDataObject = model.createFormDataObject(form);
            const newDeck = model.createDeck(formDataObject);
            model.addDeckToLocalStorage(newDeck);
            data.updateLocalDecks();
            view.resetForm(form);
            resetInputValidity(validators);
            view.renderAddCardModalBody(newDeck);
        }
    };

    function handleAddCardsForm(newDeck, status) {
        const questionInput = document.getElementById('questioninput');
        const answerInput = document.getElementById('answerinput');
        const form = document.getElementById('modal-card-form');

        model.cardQuestionValidator.setData(questionInput, questionInput.value.trim());
        model.cardAnswerValidator.setData(answerInput, answerInput.value.trim());

        const validators = [model.cardQuestionValidator, model.cardAnswerValidator];
        validators.forEach((input) => {
            input.checkValidity();
            //TODO commenting this out because it runs at the start each time
            //meaning that it will make the border red before the user
            //has had a chance to put anything in
            // input.setValidityClass();
        });

        const invalidInputs = validators.filter(input => input.isValid === false);
        if (invalidInputs.length > 0) {
            invalidInputs.forEach((item) => {
                item.displayWarning();
                return;
            });
         } else {
            const formDataObject = model.createFormDataObject(form);
            const newCard = model.createCard(formDataObject);
            const theDeck = model.getDeckFromLocalStorage(newDeck.name);
            theDeck.cards.push(newCard);
            theDeck.cardCount = theDeck.cardCount + 1;
            const modifiedandstringifiedforstorage = JSON.stringify(theDeck);
            localStorage.setItem(newDeck.name, modifiedandstringifiedforstorage);
            data.updateLocalDecks();
            resetInputValidity(validators);
            if (status === 'addmore') {
                view.renderAddCardModalBody(theDeck);
            } else if (status === 'doneadding') {
                view.hideModal();
                view.resetForm(form);
                console.log('firing');
            }
            const currentPage = model.getCurrentPage();
            if (currentPage === 'studybutton') {
                view.studyPage.updateDeckDisplay(data.localDecks);
            }
        };
    }

    function resetInputValidity(inputs) {
        inputs.forEach(element => {
            element.setValidityClass();
        });
    }

    function addMobileNavEventListeners() {
        controller.mobileNavButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                
                const currentTabID = event.target.id;
                view.removeMainTagContent();
                view.changeTabColor(currentTabID, mobileNavButtons);
                changePage(currentTabID);
            });
        });
    };

    function changePage(page) {
        view.changePage(page);
        model.setCurrentPage(page);
    }

    function studyDeck() {
        view.renderAddCardModalBody();
    }

    return {
        handleAddCardsForm,
        startApplication,
        handleDeckCreationForm,
        addMobileNavEventListeners,
        mobileNavButtons,
        data
    }
})();