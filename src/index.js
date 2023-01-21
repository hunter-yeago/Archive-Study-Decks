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
import './view';
import {generateHomePage, generateAddDeckPage} from './view';

generateHomePage();
export const addDeckFunction = addDeck;

//temporarily adding menu event listeners here
document.getElementById('overviewoption').addEventListener('click', generateHomePage);
document.getElementById('adddeckoption').addEventListener('click', generateAddDeckPage);