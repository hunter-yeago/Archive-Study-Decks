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

    function addDeckToLocalStorage() {
        const myFormData = new FormData(document.querySelector('.modal-form'));
        const formDataObj = Object.fromEntries(myFormData.entries());
    
        const newDeck = Object.assign(Object.create(Deck), {
            name: formDataObj.deckname,
            description: formDataObj.deckdescription,
            dueDate: formDataObj.deckduedate,
            category: formDataObj.deckcategory,
        });
    
        populateStorage(newDeck);
        //the view is subscribing to this... so it's coupled. Not good.
        Observable.publish('addDeckFunction', newDeck);
        console.log('firing from the addDeck function in model');
    };

    function getLocalStorage() {
        const deckArray = [];

          for (let i = 0; i < localStorage.length; i++) {
                const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
                deckArray.push(deck);
            }
            return deckArray;
    }

    function validateForm(formData) {
    }

    function createInputObject() {
        let inputObject = Object.create(deckFormInputObject);
        
        return 
    }


    // const deckFormInputObject = {
    //     isValid: false,
    //     inputElement: null,

    //     setValidityClass: function() {
    //         if (this.isValid) {
    //             this.inputElement.classList.remove('invalid');
    //             this.inputElement.classList.add('valid');
    //         }
    //         else {
    //             this.inputElement.classList.remove('valid');
    //             this.inputElement.classList.add('invalid');
    //         }
    //     },

    //     displayValidityWarning: function() {
    //         this.inputElement.setCustomValidity('This field is invalid');
    //         this.inputElement.reportValidity();
    //     },

    //     resetObjectInputValidity: function() {
    //         this.inputElement.classList.remove('valid');
    //         this.inputElement.classList.remove('invalid');
    //     },
    // };

    // const deckNameObject = Object.assign(Object.create(deckFormInputObject), {
    //     inputElement: document.getElementById('deckname'),
    //     nameLength: document.getElementById('deckname').value.trim().length,
    //     nameLengthIsValid: false,
    //     nameIsAvailable: false,

    //     checkValidity: function() {
    //         this.checkLength();
    //         this.checkIfNameIsAvailable();
    //         if (this.nameLengthIsValid && this.nameAlreadyTaken) {
    //             this.isValid = true;
    //         }
    //         else {this.isValid = false};
    //     },

    //     checkLength: function () {
    //         this.isValid = this.nameLength > 0 ? true : false;
    //     },

    //     checkIfNameIsAvailable: function(name) {
    //         const foundName = localStorage.getItem(name);
    //         if (foundName != null) {
    //             this.nameIsAvailable = true;
    //         }
    //         else {this.nameIsAvailable = false};
    //     },

    //     displayValidityWarning: function() {
    //         if (!this.nameLengthIsValid) {
    //             this.inputElement.setCustomValidity('Name must be at least 1 character long');
    //             this.inputElement.reportValidity();
    //         }
    //         else if (!this.nameIsAvailable) {
    //             this.inputElement.setCustomValidity('Deck name already exists');
    //             this.inputElement.reportValidity();
    //         }
    //     }
    // });

    // const deckCategoryObject = Object.assign(Object.create(deckFormInputObject), {
    //     inputElement: document.getElementById('deckcategory'),
    //     inputValue: document.getElementById('deckcategory').value,

    //     checkValidity: function() {
    //         this.isValid = this.inputValue === '' ? false : true;
    //     },

    //     displayValidityWarning: function() {
    //         if(!this.isValid) {
    //             this.inputElement.setCustomValidity('Must choose a category');
    //             this.inputElement.reportValidity();
    //         }
    //     },
    // });

    // const deckDateObject = Object.assign(Object.create(deckFormInputObject), {
    //     inputElement: document.getElementById('deckduedate'),
    //     inputValue: document.getElementById('deckduedate').value,

    //     checkValidity: function() {
    //         const userInput = this.convertDateData(inputValue);
    //         this.isValid = isFuture(userInput);
    //     },

    //     convertDateData: function(dateData) {
    //         const array = this.dateData.split('-');
    //         const year = array[0];
    //         const month = array[1];
    //         const day = array[2];
    //         return new Date(`${year}/${month}/${day}`);
    //     },

    //     displayValidityWarning: function() {
    //         if(!this.isValid) {
    //             this.inputElement.setCustomValidity('Date must be in the future');
    //             this.inputElement.reportValidity();
    //         }
    //     },
    // });

    // const objectInputs = [deckNameObject, deckCategoryObject, deckDateObject];

    return {
        addDeckToLocalStorage,
        getLocalStorage,
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