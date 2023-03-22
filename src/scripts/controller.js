import { model } from "./model";
import { view } from "./view";
import { Observable } from "./pubsub";
import { preBuiltDecks } from "./prebuiltdecks";

// TODO CLEAN
//CLEAN
export const controller = (function(){
    Observable.subscribe('DataReset', resetDataAndView);
    const data = {
        preBuiltDecks: preBuiltDecks,
        localDecks: model.getDeckArrayFromLocalStorage(),
        Panels: model.dataPanels,

        Update: function() {
            this.updateDecks();
            this.updatePanels();
        },

        updateDecks: function() {
            this.localDecks = model.getDeckArrayFromLocalStorage();
        },

        updatePanels: function() {
            this.Panels = model.getLocalPanels();
        },
    }
    
    function startApplication() {
        model.checkIfThereIsAlreadyLocallyStoredData();
        data.Update();
        view.renderPage();
    };

    function handleDeckCreationForm() {

        const form = document.getElementById('modal-form');
        const nameElement = document.getElementById('deckname');
        const categoryElement = document.getElementById('deckcategory');
        const dateElement = document.getElementById('deckduedate');

        const nameChecker =  model.validators.nameValidator;
        const categoryChecker = model.validators.categoryValidator;
        const dateChecker = model.validators.dateValidator;

        nameChecker.setData(nameElement, nameElement.value.trim());
        categoryChecker.setData(categoryElement, categoryElement.value.trim());
        dateChecker.setData(dateElement, dateElement.value.trim());

        const validators = [nameChecker, categoryChecker, dateChecker];
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
            model.incrementUserData('decksCreated');
            data.Update();
            view.resetForm(form);
            model.validators.resetInputValidity(validators);
            view.renderAddCardModalBody(newDeck);
            Observable.publish('DecksUpdated', data.localDecks);
        }
    };

    function handleAddCardsForm(newDeck, status) {
        const form = document.getElementById('modal-card-form');
        const questionInput = document.getElementById('questioninput');
        const answerInput = document.getElementById('answerinput');

        const questionChecker = model.validators.questionValidator;
        const answerChecker = model.validators.answerValidator;

        questionChecker.setData(questionInput, questionInput.value.trim());
        answerChecker.setData(answerInput, answerInput.value.trim());

        const validators = [questionChecker, answerChecker];
        validators.forEach((input) => {
            input.checkValidity();
        });

        const invalidInputs = validators.filter(input => input.isValid === false);
        if (invalidInputs.length > 0) {
            invalidInputs.forEach((item) => {
                item.displayWarning();
                return;
            });
         } else {
            const formDataObject = model.createFormDataObject(form);
            const card = model.createCard(formDataObject);
            let deckCopy = model.getDeckFromLocalStorage(newDeck.name);
            deckCopy = model.addCardToDeck(card, deckCopy);
            model.updateDeckInLocalStorage(deckCopy);
            data.Update();
            model.incrementUserData('cardsCreated');
            model.validators.resetInputValidity(validators);
            Observable.publish('DecksUpdated', data.localDecks);
            Observable.publish('UpdateOverviewData', data.Panels);
            
            if (status === 'addmore') {
                view.renderAddCardModalBody(deckCopy);
            } else if (status === 'doneadding') {
                view.hideModal();
                view.resetModal();
            }
        };
    };

    function resetDataAndView() {
        model.clearLocalStorage();
        data.Update();
        Observable.publish('DecksUpdated', data.localDecks);
        Observable.publish('UpdateOverviewData', data.Panels);
    };

    function startStudySession(deck) {
        view.renderStudySession(deck);
    }

    function endStudySessionEarly(deck) {
        model.updateCurrentCard(deck, 'reset');
    }

    function showNextStudyCard(deck, operation) {

        if (operation === 'shownext') {
            if (deck.currentCard + 1 === deck.cards.length) {
                model.updateCurrentCard(deck, 'reset');
                view.removeMainTagContent();
                view.renderStudySessionComplete(deck);
                model.incrementUserData('decksStudied');
                model.incrementUserData('cardsStudied');
            } else {
                model.updateCurrentCard(deck, operation);
                view.updateStudyCard(deck);
                model.incrementUserData('cardsStudied');
            }
        } 
        else if (operation === 'showprevious') {
            model.updateCurrentCard(deck, operation);
            view.updateStudyCard(deck);
            model.decrementUserData('cardsStudied');
        }
        data.Update();
    }

    function deleteDeck(deckName) {
        model.deleteDeckFromLocalStorage(deckName);
    }

    return {
        data,
        deleteDeck,
        endStudySessionEarly,
        startApplication,
        startStudySession,
        showNextStudyCard,
        handleAddCardsForm,
        handleDeckCreationForm,
    }
})();