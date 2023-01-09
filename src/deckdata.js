
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

// const frenchQuestionOne = {
//     question: 'How do you say \'a cat\' in French?',
//     answer: 'Un chat'
// };

