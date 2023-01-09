
import { Deck } from "./deckdata";


export function addDeck(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());

    let newDeck = Object.assign(Object.create(Deck), {
        name: formDataObj.deckname,
        description: formDataObj.deckdescription,
        dueDate: formDataObj.deckduedate,
        category: formDataObj.deckcategory,
    });
    
    console.log(` The deck name is ${newDeck.name}`);
    console.log(` The deck description is ${newDeck.description}`);
    console.log(` The deck Due Date is ${newDeck.dueDate}`);
    console.log(` The deck Category is ${newDeck.category}`);
}