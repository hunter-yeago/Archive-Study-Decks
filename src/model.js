import { Observable } from "./pubsub";

//Holds the Deck, Card, and Question Objects

const model = {
    data: {},
    setData: function(data) {
        this.data = data;
    },

    getData: function() {
        return this.data;
    }
};


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
// const frenchQuestionOne = {
//     question: 'How do you say \'a cat\' in French?',
//     answer: 'Un chat'
// };

// Card Object
// const Card = (question, answer) => {
//     return { question, answer};
// };

export function addDeck() {
    
    const myFormData = new FormData(document.querySelector('.modal-form'));
    const formDataObj = Object.fromEntries(myFormData.entries());

    const newDeck = Object.assign(Object.create(Deck), {
        name: formDataObj.deckname,
        description: formDataObj.deckdescription,
        dueDate: formDataObj.deckduedate,
        category: formDataObj.deckcategory,
    });

    populateStorage(newDeck);
    // pushDeckToLists(newDeck);
    Observable.publish('addDeckFunction', newDeck);
};

//Now that I have the new deck object, I need to:
//Add it to the cateogory and the complete deck list
//Update the DOM (Do this through the Controller)

//Pushes deck to Associated Category and to Complete Deck List

// let categoryLanguages = [];
// function pushDeckToLists(deck) {
//     categoryLanguages.push(deck);
// }

//Local Storage

//This updates the page
function setStyles() {
    const deck = localStorage.getItem('newdeck');
}

//Sets the item in local Storage
function populateStorage(deck) {
    localStorage.setItem(deck.name, JSON.stringify(deck));
    setStyles();
}

//Temporary PlaceHolder Card Information
const card1 = {
    imagesrc: 'images/learning-color.svg',
    title: 'Decks Created',
    underlinecolor: 'greencardunderline',
    statistic: '18',
};

const card2 = {
    imagesrc: 'images/education-color.svg',
    title: 'Card 2 Title',
    underlinecolor: 'bluecardunderline',
    statistic: '73',
};

const card3 = {
    imagesrc: 'images/study-desk-color.svg',
    title: 'Card 3 Title',
    underlinecolor: 'brickcardunderline',
    statistic: '9',
};

const card4 = {
    imagesrc: 'images/study-lamp-color.svg',
    title: 'Card 4 Title',
    underlinecolor: 'sunshinecardunderline',
    statistic: '100',
};

export const overviewCards = [card1, card2, card3, card4];
export const temporaryDecks = ['deck1', 'deck2', 'deck3'];