import {isFuture} from 'date-fns';
import LearningIcon from '../images/learning-color.svg';
import StudyLampIcon from '../images/study-lamp-color.svg';
import StudyDeskIcon from '../images/study-desk-color.svg';
import EducationIcon from '../images/education-color.svg';

export const model = (function(){

    const Card = {

        doSomething: function() {
            console.log(`im trying to do something`);
        }
    };

    const card1= Object.assign(Object.create(Card), {
        imagesrc: LearningIcon,
        title: 'Decks Created',
        underlinecolor: 'greencardunderline',
        statistic: '18',
    });

    const card2 = Object.assign(Object.create(Card), {
        imagesrc: EducationIcon,
        title: 'Card 2 Title',
        underlinecolor: 'bluecardunderline',
        statistic: '73',
    });

    const card3 = Object.assign(Object.create(Card), {
        imagesrc: StudyDeskIcon,
        title: 'Card 3 Title',
        underlinecolor: 'brickcardunderline',
        statistic: '9',
    });

    const card4 = Object.assign(Object.create(Card), {
        imagesrc: StudyLampIcon,
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
    
    let currentPage = '';

    function setCurrentPage(page) {
        currentPage = page;
    }

    function getCurrentPage() {
        return currentPage;
    }

    function setStyles() {
        const deck = localStorage.getItem('newdeck');
    };

    function populateStorage(deck) {
        localStorage.setItem(deck.name, JSON.stringify(deck));
        setStyles();
    };

    function addDeckToLocalStorage() {
        const myFormData = new FormData(document.querySelector('.modal-form'));
        const formDataObj = Object.fromEntries(myFormData.entries());
        formDataObj.deckduedate = makeDateReadable(formDataObj.deckduedate);
    
        const newDeck = Object.assign(Object.create(Deck), {
            name: formDataObj.deckname,
            category: formDataObj.deckcategory,
            description: formDataObj.deckdescription,
            dueDate: formDataObj.deckduedate,
        });
    
        populateStorage(newDeck);
    };

    function makeDateReadable(dateData) {
        const array = dateData.split('-');
        const year = array[0];
        const month = convertMonthNumberToMonthName(array[1]);
        const day = convertDayNumberToNthDayOfMonth(array[2]);
        return `${month} ${day}, ${year}`;
    };

    function convertMonthNumberToMonthName(number) {
        number = parseInt(number, 10);
        console.log(number);
        const months = {
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December',
        }
        return months[number];
    };

    function convertDayNumberToNthDayOfMonth(number) {
        const nthDay = {
            1: 'st',
            2: 'nd',
            3: 'rd',
            4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th',
            9: 'th', 10: 'th', 11: 'th', 12: 'th', 13: 'th',
            14: 'th', 15: 'th', 16: 'th', 17: 'th', 18: 'th',
            19: 'th', 20: 'th',
            21: 'st',
            22: 'nd',
            23: 'rd',
            24: 'th', 25: 'th', 26: 'th', 27: 'th', 28: 'th',
            29: 'th', 30: 'th',
            31: 'st',
        };
        return `${number}${nthDay[number]}`;
    };

    function getLocalStorage() {
        const deckArray = [];

          for (let i = 0; i < localStorage.length; i++) {
                const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
                deckArray.push(deck);
            }
            return deckArray;
    }

    function clearLocalStorage() {
        localStorage.clear();
    }

    const Validator = {
        data: null,
        element: null,
        isValid: false,

        setData: function(element, data) {
            this.element = element;
            this.data = data;
        },

        setValidityClass: function() {
                if (this.isValid) {
                    this.element.classList.remove('invalid');
                }
                else {
                    this.element.classList.add('invalid');
                }
        },

        displayWarning: function() {
            this.element.setCustomValidity('This field is invalid');
            this.element.reportValidity();
        },
    };

    const nameValidator = Object.assign(Object.create(Validator), {
        nameLengthIsValid: false,
        nameIsAvailable: false,

        checkValidity: function() {
            this.checkLength();
            this.checkNameAvailability(this.inputValue);
            if (this.nameLengthIsValid && this.nameIsAvailable) {
                this.isValid = true;
            }
            else {this.isValid = false};
        },

        checkLength: function () {
            this.nameLengthIsValid = this.data.length > 0 ? true : false;
        },

        checkNameAvailability: function() {
                const existingDeckName = Object.keys(localStorage).find(item => item === this.data);
                this.nameIsAvailable = existingDeckName !== this.data ? true: false;
        },

        displayWarning: function() {
            if (!this.nameLengthIsValid) {
                this.element.setCustomValidity('Name must be at least 1 character long');
                this.element.reportValidity();
                return;
            }
            else if (!this.nameIsAvailable) {
                this.element.setCustomValidity('Deck already exists, choose a different name');
                this.element.reportValidity();
            }
        }
    });

    const categoryValidator = Object.assign(Object.create(Validator), {

        checkValidity: function() {
            this.isValid = this.data !== '' ? true : false;
        },

        displayWarning: function() {
                this.element.setCustomValidity('Please choose a category');
                this.element.reportValidity();
        },
    });

    const dateValidator = Object.assign(Object.create(Validator), {

        checkValidity: function() {
            const userInput = this.convertDataToDateObject(this.data);
            this.isValid = isFuture(userInput);
        },

        convertDataToDateObject: function(dateData) {
            const array = dateData.split('-');
            const year = array[0];
            const month = array[1];
            const day = array[2];
            return new Date(`${year}/${month}/${day}`);
        },

        makeDateReadable: function(dateData) {
            const array = dateData.split('-');
            const year = array[0];
            const month = this.convertMonthNumberToMonthName(array[1]);
            const day = convertDayNumberToNthDayOfMonth(array[2]);
            return `${month} ${day}, ${year}`;
        },

        convertMonthNumberToMonthName: function(number) {
            const months = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'   
            }
            return months[number];
        },

        convertDayNumberToNthDayOfMonth: function(number) {
            const nthDay = {
                1: 'st',
                2: 'nd',
                3: 'rd',
                4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th',
                9: 'th', 10: 'th', 11: 'th', 12: 'th', 13: 'th',
                14: 'th', 15: 'th', 16: 'th', 17: 'th', 18: 'th',
                19: 'th', 20: 'th',
                21: 'st',
                22: 'nd',
                23: 'rd',
                24: 'th', 25: 'th', 26: 'th', 27: 'th', 28: 'th',
                29: 'th', 30: 'th',
                31: 'st',
            };
            return `${number}${nthDay[number]}`;
        },

        displayWarning: function() {
                this.element.setCustomValidity('Date must be in the future');
                this.element.reportValidity();
        },
    });

    return {
        addDeckToLocalStorage,
        getLocalStorage,
        overviewCards,
        nameValidator,
        categoryValidator,
        dateValidator,
        getCurrentPage,
        setCurrentPage,
        clearLocalStorage,
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