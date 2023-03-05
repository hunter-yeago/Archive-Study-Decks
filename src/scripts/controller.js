import { model } from "./model";
import { view } from "./view";
import { Observable } from "./pubsub";
import { preBuiltDecks } from "./prebuiltdecks";

//TODO responsive design
//TODO dynamically render ALL HTML
//TODO Double check my Observer Pattern - are they being used correctly? Consistently? Are there things I'm not using with it that should be using it?

export const controller = (function(){

    Observable.subscribe('DataReset', resetDataAndView);
    
    const data = {
        preBuiltDecks: preBuiltDecks,
        defaultTabID: 'studybutton',
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
        data.Update();
        model.checkIfThereIsAlreadyLocallyStoredData();
        model.setCurrentPage(data.defaultTabID);
        view.renderDefaultView(data.defaultTabID);  
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
            updateDataOnCurrentPage();
            view.resetForm(form);
            model.validators.resetInputValidity(validators);
            view.renderAddCardModalBody(newDeck);
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
            updateDataOnCurrentPage();
            
            if (status === 'addmore') {
                view.renderAddCardModalBody(deckCopy);
            } else if (status === 'doneadding') {
                view.hideModal();
                view.resetModal();
            }
        };
    };

    function updateDataOnCurrentPage() {
        const currentPage = model.getCurrentPage();
        if (currentPage === 'studybutton') {
            Observable.publish('NewDeckAdded', data.localDecks)
        } else {
            Observable.publish('UpdateOverviewData', data.Panels);
        }
    }

    function changePage(page) {
        view.renderPage(page);
        model.setCurrentPage(page);
    }

    function resetDataAndView() {
        model.clearLocalStorage();
        data.Update();
        Observable.publish('UpdateOverviewData', data.Panels);
    };

    function startStudySession(deck) {
        view.studyPage.renderStudySession(deck);
    }

    function showNextStudyCard(deck, operation) {

        if (operation === 'shownext') {
            if (deck.currentCard + 1 === deck.cards.length) {
                model.updateCurrentCard(deck, 'reset');
                view.removeMainTagContent();
                view.studyPage.renderStudySessionComplete(deck);
                model.incrementUserData('decksStudied');
                model.incrementUserData('cardsStudied');
                
            } else {
                model.updateCurrentCard(deck, operation);
                view.studyPage.updateStudyCard(deck);
                model.incrementUserData('cardsStudied');
            }
        } 
        else if (operation === 'showprevious') {
            model.updateCurrentCard(deck, operation);
            view.studyPage.updateStudyCard(deck);
            model.decrementUserData('cardsStudied');
        }
        controller.data.updateDecks();
    }

    function deleteDeck(deckName) {
        model.deleteDeckFromLocalStorage(deckName);
    }

    return {
        data,
        changePage,
        deleteDeck,
        startApplication,
        startStudySession,
        showNextStudyCard,
        handleAddCardsForm,
        handleDeckCreationForm,
    }
})();