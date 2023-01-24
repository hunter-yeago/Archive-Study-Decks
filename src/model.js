import { Observable } from "./pubsub";

//Holds the Deck, Card, and Question Objects

//Deck Object
export const Deck = {
    name: 'default name',
    description: 'default description',
    dueDate: 'default dueDate',
    category: 'default category',
    print: function () {
        console.log(`printing from inside Deck`);
    },
};

let frenchDeck = Object.assign(Object.create(Deck), {
    name: 'French',
    description: 'A deck to learn French',
    numberOfQuestions: 10,
    dueDate: 'some time date thing',
    category: 'Languages',
    questionsList: [],
});
export {frenchDeck};

// Question Object
const frenchQuestionOne = {
    question: 'How do you say \'a cat\' in French?',
    answer: 'Un chat'
};

// Card Object
const Card = (question, answer) => {
    return { question, answer};
};

export function addDeck(event) {
    event.preventDefault();
    const myFormData = new FormData(document.querySelector('.modal-form'));
    const formDataObj = Object.fromEntries(myFormData.entries());

    let newDeck = Object.assign(Object.create(Deck), {
        name: formDataObj.deckname,
        description: formDataObj.deckdescription,
        dueDate: formDataObj.deckduedate,
        category: formDataObj.deckcategory,
    });

    populateStorage(newDeck);
    pushDeckToLists(newDeck);
    Observable.publish('addDeckFunction', newDeck);
};

//Now that I have the new deck object, I need to:
//Add it to the cateogory and the complete deck list
//Update the DOM (Do this through the Controller)

//Pushes deck to Associated Category and to Complete Deck List

let categoryLanguages = [];
function pushDeckToLists(deck) {
    categoryLanguages.push(deck);
}

//Local Storage

//This updates the page
function setStyles() {
    const deck = localStorage.getItem('newdeck');
    document.getElementById('adddeckpapetitle').innerText = deck;
}

//Sets the item in local Storage
function populateStorage(deck) {
    localStorage.setItem('newdeck', deck.name);
    setStyles();
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            //everything except Firefox
            e.code === 22 ||
            //Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            //everything except Firefox
            e.name === 'QuotaExceededError' ||
            //Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            //acknowledge QuotaExceededError only if there's something
            //already stored
            (storage && storage.length !== 0);
    }
}