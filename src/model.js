//Holds the Deck, Card, and Question Objects

//Deck Object
export const Deck = {
    name: 'default name',
    description: 'default description',
    dueDate: 'default dueDate',
    category: 'default category',
    print: function () {
        console.log(`printing from inside Deck`);
    },
};

let frenchDeck = Object.assign(Object.create(Deck), {
    name: 'French',
    description: 'A deck to learn French',
    numberOfQuestions: 10,
    dueDate: 'some time date thing',
    category: 'Languages',
    questionsList: [],
});
export {frenchDeck};


// Question Object
const frenchQuestionOne = {
    question: 'How do you say \'a cat\' in French?',
    answer: 'Un chat'
};

// Card Object
const Card = (question, answer) => {

    return { question, answer};

};


export function addDeck(event) {
    event.preventDefault();
    const myFormData = new FormData(document.querySelector('.modal-form'));
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
};

//Now that I have the new deck object, I need to:
//Add it to the cateogory and the complete deck list
//Update the DOM (Do this through the Controller)

//Pushes deck to Associated Category and to Complete Deck List
function pushDeckToLists() {

}