import { dataPanels } from './datapanel';
import { validators } from './validator';
import { createDeck } from './deck';
import { createCard } from './card';

export const model = (function(){

    let currentPage = '';

    function setCurrentPage(page) {
        currentPage = page;
    }

    function getCurrentPage() {
        return currentPage;
    }

    function getLocalStorage() {
        const deckArray = [];

          for (let i = 0; i < localStorage.length; i++) {
                const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
                deckArray.push(deck);
            }
            return deckArray;
    }

    function getDeckFromLocalStorage(deckName) {
        const deck = JSON.parse(localStorage.getItem(deckName));
        return deck;
    }

    function addDeckToLocalStorage(deck) {
        localStorage.setItem(deck.name, JSON.stringify(deck));
    };

    function clearLocalStorage() {
        localStorage.clear();
    }

    function createFormDataObject(form) {
        const myFormData = new FormData(form);
        const formDataObj = Object.fromEntries(myFormData.entries());
        return formDataObj;
    }

    return {
        dataPanels,
        validators,
        createCard,
        createDeck,
        getCurrentPage,
        setCurrentPage,
        getLocalStorage,
        clearLocalStorage,
        createFormDataObject,
        addDeckToLocalStorage,
        getDeckFromLocalStorage,
    };
})();