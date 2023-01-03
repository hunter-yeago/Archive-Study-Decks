//Your ‘todos’ are going to be objects that you’ll want to dynamically create, 
//which means either using factories or constructors/classes to generate them.

// this will be the main entry point for the application

import {gogo} from './card.js';

const deckDataObject = {
    name: 'Michael Scott',
    company: 'Dundler Mufflin'
}

class Observable {
    
    //list of observers
    constructor() {
        this.observers = [];
    }

    //ability to suscribe add something to observers array
    subscribe(f) {
        this.observers.push(f);
    }

    //ability to unsubscribe / remove something from the array
    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    //update all subscribed obects / pass them some data
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

gogo();