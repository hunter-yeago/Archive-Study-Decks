
import { addDeck } from './model';
import {changeCurrentTab,generateHomePage, generateAddDeckPage, removeMainTagContent, changeTabColor, generateAboutPage} from './view';

generateHomePage();

export const mobileNavButtonArray = Array.from([
    document.getElementById('leftoverviewbutton'),
    document.getElementById('rightstudybutton'),
    document.getElementById('aboutbutton')
    ]);
mobileNavButtonArray.forEach((button) => {
    button.addEventListener('click', addMobileNavEventListeners);
});

const defaultTabID = 'leftoverviewbutton';

changeTabColor(defaultTabID, mobileNavButtonArray);
export const addDeckFunction = addDeck;

function addMobileNavEventListeners(event) {
    const currentTabID = event.target.id;
    removeMainTagContent();
    changeTabColor(currentTabID, mobileNavButtonArray);
    changeCurrentTab(currentTabID);
}



