import { model } from "./model";
import { view } from "./view";

//Add functionality
// TODO show remaining characters for each input
// TODO: you can edit the cards while you're studying them
// TODO: Add cards during deck construction
// TODO Calculate days until its due
//TODO add Reset functionality to Overview Page (delete localStorage and update stats)

//Clean Code/Fix Bugs
// TODO View: Seems kind of backwards to call RenderDeckDisplay from renderTopDecks //Shouldn't it be the other way around?
// TODO Show on form that it needs to be within the next month //or something like that //...might just get rid of the duedate thing altogether.

export const controller = (function(){

    const controllerOverviewCards = model.overviewCards;
    const defaultTabID = 'studybutton';
    const mobileNavButtons = Array.from([
        document.getElementById('studybutton'),
        document.getElementById('overviewbutton'),
        ]);

    const data = {
        localDecks: Array.from(model.getLocalStorage()),

        updateData: function() {
            this.localDecks = Array.from(model.getLocalStorage());
        },
    }

    
    function startApplication() {
        // view.renderBanner();
        view.addBannerButtonFunctionality();
        view.makeNewAddDeckButtonWork();
        view.renderDefaultPage();
        addMobileNavEventListeners();
        model.setCurrentPage(defaultTabID);
        view.changeTabColor(defaultTabID);
    };

    function handleFormInput() {

        const nameElement = document.getElementById('deckname');
        const categoryElement = document.getElementById('deckcategory');
        const dateElement = document.getElementById('deckduedate');

        model.nameValidator.setData(nameElement, nameElement.value.trim());
        model.categoryValidator.setData(categoryElement, categoryElement.value.trim());
        model.dateValidator.setData(dateElement, dateElement.value.trim());

        const validators = [model.nameValidator, model.categoryValidator, model.dateValidator];
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
            model.addDeckToLocalStorage();
            data.updateData();

            let currentPage = model.getCurrentPage();
            if (currentPage === 'studybutton') {
                view.studyPage.updateDeckDisplay(data.localDecks);
            }
            view.hideModal();
            view.resetForm();
            resetInputValidity(validators);
        }
    };

    function resetInputValidity(inputs) {
        inputs.forEach(element => {
            element.setValidityClass();
        });
    }

    function addMobileNavEventListeners() {
        mobileNavButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                
                const currentTabID = event.target.id;
                view.removeMainTagContent();
                view.changeTabColor(currentTabID, mobileNavButtons);
                changePage(currentTabID);
            });
        });
    };

    function changePage(page) {
        view.changePage(page);
        model.setCurrentPage(page);
    }

    return {
        startApplication,
        handleFormInput,
        addMobileNavEventListeners,
        controllerOverviewCards,
        mobileNavButtons,
        data
    }
})();