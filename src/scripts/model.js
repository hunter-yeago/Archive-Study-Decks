import { dataPanels } from './datapanel';
import { validators } from './validator';
import { createDeck } from './deck';
import { createCard } from './card';
import { preBuiltDecks } from './prebuiltdecks';
import { controller } from './controller';

export const model = (function(){

    let currentPage = '';

    function setCurrentPage(page) {
        currentPage = page;
    };

    function getCurrentPage() {
        return currentPage;
    };

    function getLocalStorage() {
        const deckArray = [];

          for (let i = 0; i < localStorage.length; i++) {
                const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
                deckArray.push(deck);
            }
            return deckArray;
    };

    function updateCurrentCard(deck, operation) {

        const deckIsPrebuilt = checkIfDeckIsPreBuilt(deck, controller.data.preBuiltDecks);
        if (deckIsPrebuilt && operation === 'reset') {
            const index = preBuiltDecks.indexOf(deck);
            controller.data.preBuiltDecks[index].currentCard = 0;
            return;
        }

        if (operation === 'reset') { getDeckFromLocalStorage(deck.name).currentCard = 0; } 
        else if (operation === 'shownext') { deck.currentCard++; } 
        else if (operation === 'showprevious') { deck.currentCard--; }
    };

    function checkIfDeckIsPreBuilt(deck, preBuiltDecks) {
        for (let i = 0; i < preBuiltDecks.length; i++) {
            if (preBuiltDecks[i] === deck) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    function getDeckFromLocalStorage(deckName) {
        const deck = JSON.parse(localStorage.getItem(deckName));
        return deck;
    };

    function addDeckToLocalStorage(deck) {
        localStorage.setItem(deck.name, JSON.stringify(deck));
    };

    function clearLocalStorage() {
        localStorage.clear();
    };

    function createFormDataObject(form) {
        const myFormData = new FormData(form);
        const formDataObj = Object.fromEntries(myFormData.entries());
        return formDataObj;
    };

    return {
        dataPanels,
        validators,
        createCard,
        createDeck,
        getCurrentPage,
        setCurrentPage,
        getLocalStorage,
        updateCurrentCard,
        clearLocalStorage,
        createFormDataObject,
        addDeckToLocalStorage,
        getDeckFromLocalStorage,
    };
})();