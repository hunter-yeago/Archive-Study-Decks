//Your ‘todos’ are going to be objects that you’ll want to dynamically create, 
//which means either using factories or constructors/classes to generate them.

// this will be the main entry point for the application

//Notes on how I'm going to use the Observer Pattern:
//The list of Decks can be updated using it.
//In fact, what I can do is to make different categories or tags or whatever, which will help to make better use of the
//subscribe/unsubscribe function

//Seems a bit silly to only have 1 element in the whole thing being in the array of subscribers, so that will help make it
//more of a 'use case'.

//I think it could also be useful when editing decks - deleting or adding questions and updating the DOM.

import { addDeck } from './model';
import {generateHomePage, generateAddDeckPage, removeMainTagContent, toggleNav, changeTabColor, generateAboutPage} from './view';

//Temporarily changing to Add Deck Page so that I don't have to keep
//switching tabs
generateHomePage();
changeTabColor('leftoverviewbutton');
export const addDeckFunction = addDeck;

//temporarily adding menu event listeners here
//These are the event listeners for the left slide-in navbar
document.getElementById('overviewoption').addEventListener('click', () => {    
    removeMainTagContent();
    generateHomePage()
    toggleNav();
});


document.getElementById('adddeckoption').addEventListener('click', () => {
    removeMainTagContent();
    generateAddDeckPage();
    toggleNav();
});


const mobileNavButton = Array.from([
    document.getElementById('leftoverviewbutton'),
    document.getElementById('rightstudybutton'),
    document.getElementById('aboutbutton')
    ]);

    console.log({mobileNavButton});

    mobileNavButton.forEach((button) => {
        button.addEventListener('click', addMobileNavEventListeners);
    });

// These are the event listeners for the bottom nav bar

function addMobileNavEventListeners(e) {
    
    const buttonID = e.target.id;

    removeMainTagContent();
    changeTabColor(buttonID);
    console.log('addmobileeventlistenersfunction');

    switch (buttonID) {
        case 'leftoverviewbutton':
            generateHomePage();
            console.log('firing home');
            break;

        case 'rightstudybutton':
            generateAddDeckPage();
            console.log('firing study');
            break;

        case 'aboutbutton':
            generateAboutPage();
            console.log('firing about');
            break;
    }
}