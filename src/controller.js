import { model } from "./model";
import { view } from "./view";
import {isFuture} from 'date-fns';

//instead of asking how many cards they want to make, just keep showing the add card function until they steop.
//TODO add Reset functionality to Overview Page (delete localStorage and update stats)
export const controller = (function(){

    const controllerOverviewCards = model.overviewCards;
    const controllerTemporaryDecks = model.temporaryDecks;
    const defaultTabID = 'studybutton';

    const data = {
        localDecks: Array.from(model.getLocalStorage()),

        updateData: function() {
            this.localDecks = Array.from(model.getLocalStorage());
        },
    }

    const mobileNavButtons = Array.from([
        document.getElementById('studybutton'),
        // document.getElementById('editbutton'),
        document.getElementById('overviewbutton'),
        ]);
    
    function startApplication() {
        // view.renderBanner();
        view.addBannerButtonFunctionality();
        view.makeNewAddDeckButtonWork();
        view.renderDefaultPage();
        addMobileNavEventListeners();
        view.changeTabColor(defaultTabID);
    };

    //this is a copy
    const deckFormInputObject = {
        isValid: true,
        inputElement: null,

        setValidityClass: function() {
            if (this.isValid) {
                this.inputElement.classList.remove('invalid');
            }
            else {
                this.inputElement.classList.add('invalid');
            }
        },

        displayValidityWarning: function() {
            this.inputElement.setCustomValidity('This field is invalid');
            this.inputElement.reportValidity();
        },

        resetObjectInputValidity: function() {
            this.inputElement.classList.remove('invalid');
        },
    };

    function handleFormInput() {

        //Get deck data and assign to FormData Object
        //Send over to validateForm function in Model
        //if it's wrong, fire off the view showFormError function
        //else, fire the addDeckFunction in Model

        const deckFormInputObject = {
            isValid: true,
            inputElement: null,
    
            setValidityClass: function() {
                if (this.isValid) {
                    this.inputElement.classList.remove('invalid');
                }
                else {
                    this.inputElement.classList.add('invalid');
                }
            },
    
            displayValidityWarning: function() {
                this.inputElement.setCustomValidity('This field is invalid');
                this.inputElement.reportValidity();
            },
    
            resetObjectInputValidity: function() {
                this.inputElement.classList.remove('invalid');
            },
        };
    
        const deckNameObject = Object.assign(Object.create(deckFormInputObject), {
            inputElement: document.getElementById('deckname'),
            inputValue: document.getElementById('deckname').value.trim(),
            nameLength: document.getElementById('deckname').value.trim().length,
            nameLengthIsValid: false,
            nameIsAvailable: false,

            setInputElementValues: function() {
                this.inputElement = document.getElementById('deckname');
                this.inputValue = document.getElementById('deckname').value.trim();
                this.nameLength = ocument.getElementById('deckname').value.trim().length;
            },
    
            checkValidity: function() {
                this.checkLength();
                this.checkIfNameIsAvailable(this.inputValue);
                if (this.nameLengthIsValid && this.nameIsAvailable) {
                    this.isValid = true;
                }
                else {this.isValid = false};
            },
    
            checkLength: function () {
                this.nameLengthIsValid = this.nameLength > 0 ? true : false;
            },
    
            checkIfNameIsAvailable: function(attemptedDeckName) {
                    const existingDeckName = Object.keys(localStorage).find(item => item === attemptedDeckName);
                    this.nameIsAvailable = existingDeckName !== attemptedDeckName ? true: false;
            },
    
            displayValidityWarning: function() {
                if (!this.nameLengthIsValid) {
                    this.inputElement.setCustomValidity('Name must be at least 1 character long');
                    this.inputElement.reportValidity();
                    return;
                }
                else if (!this.nameIsAvailable) {
                    this.inputElement.setCustomValidity('Deck already exists, choose a different name');
                    this.inputElement.reportValidity();
                }
            }
        });
    
        const deckCategoryObject = Object.assign(Object.create(deckFormInputObject), {
            inputElement: document.getElementById('deckcategory'),
            inputValue: document.getElementById('deckcategory').value,
    
            checkValidity: function() {
                this.isValid = this.inputValue !== '' ? true : false;
            },
    
            displayValidityWarning: function() {
                    this.inputElement.setCustomValidity('Please choose a category');
                    this.inputElement.reportValidity();
            },
        });
    
        const deckDateObject = Object.assign(Object.create(deckFormInputObject), {
            inputElement: document.getElementById('deckduedate'),
            inputValue: document.getElementById('deckduedate').value,
    
            checkValidity: function() {
                const userInput = this.convertDateData(this.inputValue);
                this.isValid = isFuture(userInput);
            },
    
            convertDateData: function(dateData) {
                const array = dateData.split('-');
                const year = array[0];
                const month = array[1];
                const day = array[2];
                return new Date(`${year}/${month}/${day}`);
            },
    
            displayValidityWarning: function() {
                    this.inputElement.setCustomValidity('Date must be in the future');
                    this.inputElement.reportValidity();
            },
        });
    
        const objectInputs = [deckNameObject, deckCategoryObject, deckDateObject];
        
        objectInputs.forEach((input) => {
            input.checkValidity();
        });

        if (!objectInputs[0].isValid || !objectInputs[1].isValid || !objectInputs[2].isValid) {
            for (let i = 0; i < objectInputs.length; i++) {
                if (!objectInputs[i].isValid) {
                    objectInputs[i].displayValidityWarning();
                    objectInputs[i].setValidityClass();
                    return;
                }
            }
        }
        else {
            model.addDeckToLocalStorage();
            data.updateData();
            //TODO since this needs to find the displayDeck div, it will throw an error
            //if I try to add a new deck on the Overview Page
            console.log('firing from else statement');
            view.studyPage.updateDeckDisplay(data.localDecks);
            view.hideModal();
            document.getElementById('modal-form').reset();
            //replace the followiong with object function?
            resetInputValidity(objectInputs);
        }
    };

    function resetInputValidity(inputs) {
        inputs.forEach(element => {
            element.resetObjectInputValidity();
        });
    }



    function addMobileNavEventListeners() {
        mobileNavButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                
                const currentTabID = event.target.id;
                view.removeMainTagContent();
                view.changeTabColor(currentTabID, mobileNavButtons);
                view.changePage(currentTabID);
            });
        });
    };

    //find a way to change this from a switch case to something else

    return {
        startApplication,
        handleFormInput,
        addMobileNavEventListeners,
        controllerOverviewCards,
        controllerTemporaryDecks,
        mobileNavButtons,
        data
    }
})();