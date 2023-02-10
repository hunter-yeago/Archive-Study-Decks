import { model } from "./model";
import { view } from "./view";

export const controller = (function(){

    const controllerOverviewCards = model.overviewCards;
    const controllerTemporaryDecks = model.temporaryDecks;
    const defaultTabID = 'overviewbutton';

    const mobileNavButtons = Array.from([
        document.getElementById('overviewbutton'),
        document.getElementById('studybutton'),
        document.getElementById('aboutbutton')
        ]);
    
    function startApplication() {
        view.renderHomePage();
        addMobileNavEventListeners();
        view.changeTabColor(defaultTabID);
    };

    function addMobileNavEventListeners() {
        mobileNavButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                
                const currentTabID = event.target.id;
                view.removeMainTagContent();
                view.changeTabColor(currentTabID, mobileNavButtons);
                controller.changeCurrentTab(currentTabID);
            });
        });
    };

    //find a way to change this from a switch case to something else
    function changeCurrentTab(currentTabID) {
        switch (currentTabID) {
            case 'overviewbutton':
                view.renderHomePage();
                break;
        
            case 'studybutton':
                view.renderAddDeckPage();
                break;
        
            case 'aboutbutton':
                view.renderAboutPage();
                break;
        }
    }

    const addDeckFunction = model.addDeck;

    return {
        changeCurrentTab,
        startApplication,
        addDeckFunction,
        addMobileNavEventListeners,
        controllerOverviewCards,
        controllerTemporaryDecks,
        mobileNavButtons,
    }

})();