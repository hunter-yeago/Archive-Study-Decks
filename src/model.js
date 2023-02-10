import { Observable } from "./pubsub";

export const model = (function(){

    const Card = {

        doSomething: function() {
            console.log(`im trying to do something`);
        }
    };

    const card1= Object.assign(Object.create(Card), {
        imagesrc: 'images/learning-color.svg',
        title: 'Decks Created',
        underlinecolor: 'greencardunderline',
        statistic: '18',
    });

    const card2 = Object.assign(Object.create(Card), {
        imagesrc: 'images/education-color.svg',
        title: 'Card 2 Title',
        underlinecolor: 'bluecardunderline',
        statistic: '73',
    });

    const card3 = Object.assign(Object.create(Card), {
        imagesrc: 'images/study-desk-color.svg',
        title: 'Card 3 Title',
        underlinecolor: 'brickcardunderline',
        statistic: '9',
    });

    const card4 = Object.assign(Object.create(Card), {
        imagesrc: 'images/study-lamp-color.svg',
        title: 'Card 4 Title',
        underlinecolor: 'sunshinecardunderline',
        statistic: '100',
    });

    const overviewCards = [card1, card2, card3, card4];

    const Deck = {
        name: 'default name',
        description: 'default description',
        dueDate: 'default dueDate',
        category: 'default category',
        print: function () {
            console.log(`printing from inside Deck`);
        },
    };

    const frenchDeck = Object.assign(Object.create(Deck), {
        name: 'French',
        description: 'A deck to learn French',
        numberOfQuestions: 10,
        dueDate: 'some time date thing',
        category: 'Languages',
        questionsList: [],
    });

    function setStyles() {
        const deck = localStorage.getItem('newdeck');
    };

    function populateStorage(deck) {
        localStorage.setItem(deck.name, JSON.stringify(deck));
        setStyles();
    };

    const temporaryDecks = ['deck1', 'deck2', 'deck3'];

    function addDeck() {
        const myFormData = new FormData(document.querySelector('.modal-form'));
        const formDataObj = Object.fromEntries(myFormData.entries());
    
        const newDeck = Object.assign(Object.create(Deck), {
            name: formDataObj.deckname,
            description: formDataObj.deckdescription,
            dueDate: formDataObj.deckduedate,
            category: formDataObj.deckcategory,
        });
    
        populateStorage(newDeck);
        Observable.publish('addDeckFunction', newDeck);
    };

    return {
        addDeck,
        temporaryDecks,
        overviewCards,
        Card,
    };
})();


// Question Object
// const frenchQuestionOne = {
//     question: 'How do you say \'a cat\' in French?',
//     answer: 'Un chat'
// };



//Now that I have the new deck object, I need to:
//Add it to the cateogory and the complete deck list
//Update the DOM (Do this through the Controller)

//Pushes deck to Associated Category and to Complete Deck List

// let categoryLanguages = [];
// function pushDeckToLists(deck) {
//     categoryLanguages.push(deck);
// }