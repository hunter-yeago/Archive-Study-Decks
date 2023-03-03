import { model } from "./model";
import { view } from "./view";
import { Observable } from "./pubsub";
import { preBuiltDecks } from "./prebuiltdecks";

//TODO responsive design
//TODO dynamically render ALL HTML
//TODO bug: when i delete a deck individually and then switch to the study screen, it's still there.
//TODO Double check my Observer Pattern - are they being used correctly? Consistently? Are there things I'm not using with it that should be using it?
//TODO Update stats
    //Probably going to require creating a userData object of some sort in localStorage, and then updating all of my
    //functions that access localStorage already with decks and make sure they only choose items that have some sort of 'type=deck' situation

export const controller = (function(){

    Observable.subscribe('DataReset', resetDataAndView);
    
    const data = {
        preBuiltDecks: preBuiltDecks,
        defaultTabID: 'studybutton',
        localDecks: Array.from(model.getLocalStorage()),
        Panels: model.dataPanels,

        updateDecks: function() {
            this.localDecks = Array.from(model.getLocalStorage());
        },
    }
    
    function startApplication() {
        view.renderDefaultView(data.defaultTabID);
        model.setCurrentPage(data.defaultTabID);
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
            data.updateDecks();
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
            const newCard = model.createCard(formDataObject);
            const deckCopy = model.getDeckFromLocalStorage(newDeck.name);
            deckCopy.cards.push(newCard);
            deckCopy.cardCount = deckCopy.cardCount + 1;

            const deckData = JSON.stringify(deckCopy);
            localStorage.setItem(deckCopy.name, deckData);

            data.updateDecks();
            model.validators.resetInputValidity(validators);
            
            if (status === 'addmore') {
                view.renderAddCardModalBody(deckCopy);
            } else if (status === 'doneadding') {
                view.hideModal();
                view.resetModal();
            }
            
            const currentPage = model.getCurrentPage();
            if (currentPage === 'studybutton') {
                view.studyPage.updateDeckDisplay(data.localDecks);
            }
        };
    }

    function changePage(page) {
        view.renderPage(page);
        model.setCurrentPage(page);
    }

    function resetDataAndView() {
        model.clearLocalStorage();
        data.updateDecks();
        Observable.publish('UpdateOverviewData');
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
            } else {
                model.updateCurrentCard(deck, operation);
                view.studyPage.updateStudyCard(deck);
            }
        } 
        else if (operation === 'showprevious') {
            model.updateCurrentCard(deck, operation);
            view.studyPage.updateStudyCard(deck);
        }
        controller.data.updateDecks();
    }

    return {
        data,
        changePage,
        startApplication,
        startStudySession,
        showNextStudyCard,
        handleAddCardsForm,
        handleDeckCreationForm,
    }
})();