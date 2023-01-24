

export const Observable  = {
    
    events: {
    },
    subscribe: function(evName, fn) {
        this.events[evName] = this.events[evName] || [];
        this.events[evName].push(fn)
        console.log('firing subscribe from inside pubsub');
    },
    unsubscribe: function(evName, fn) {
        if (this.events[evName]) {
            this.events[evName] = this.events[evName].filter(f => f !== fn);
        }
    },
    publish: function(evName, data) {
        console.log(`the list of events is ${this.events}`);
        console.log(`firing publish from inside pubsub`);
        if (this.events[evName]) {
            this.events[evName].forEach(f => {
                console.log(`the function is ${f}`);
                f(data);
            });
        }
    }
};


//Pub Sub as a class
// export class Observable {
    
//     //list of observers
//     constructor() {
//         this.observers = [];
//     }

//     //ability to suscribe add something to observers array
//     subscribe(func) {
//         this.observers.push(func);
//     }

//     //ability to unsubscribe / remove something from the array
//     unsubscribe(func) {
//         this.observers = this.observers.filter(subscriber => subscriber !== func);
//     }

//     //update all subscribed obects / pass them some data
//     notify(data) {
//         this.observers.forEach(observer => observer(data));
//     }
// }