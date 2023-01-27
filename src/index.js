
import { addDeck } from './model';
import {generateHomePage, generateAddDeckPage, removeMainTagContent, changeTabColor, generateAboutPage} from './view';

generateHomePage();
changeTabColor('leftoverviewbutton');
export const addDeckFunction = addDeck;

const mobileNavButtonArray = Array.from([
    document.getElementById('leftoverviewbutton'),
    document.getElementById('rightstudybutton'),
    document.getElementById('aboutbutton')
    ]);

    mobileNavButtonArray.forEach((button) => {
        button.addEventListener('click', addMobileNavEventListeners);
    });

// These are the event listeners for the bottom nav bar
function addMobileNavEventListeners(e) {
    
    const buttonID = e.target.id;

    removeMainTagContent();
    changeTabColor(buttonID);

    switch (buttonID) {
        case 'leftoverviewbutton':
            generateHomePage();
            break;

        case 'rightstudybutton':
            generateAddDeckPage();
            break;

        case 'aboutbutton':
            generateAboutPage();
            break;
    }
}
