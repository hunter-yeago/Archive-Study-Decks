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