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

import {printQuestion} from './card.js';
import './view.js';
import './adddeck.js';

class Observable {
    
    //list of observers
    constructor() {
        this.observers = [];
    }

    //ability to suscribe add something to observers array
    subscribe(func) {
        this.observers.push(func);
    }

    //ability to unsubscribe / remove something from the array
    unsubscribe(func) {
        this.observers = this.observers.filter(subscriber => subscriber !== func);
    }

    //update all subscribed obects / pass them some data
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

printQuestion();