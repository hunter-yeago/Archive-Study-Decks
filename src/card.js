

//This is where the factory functions and basic things for how the cards operate will go

const Card = (question, answer) => {

    return { question, answer};

};

let love = 'love';
let hurt = 'hurt';

const c1 = Card(`What is ${love}`, `Baby don't ${hurt} me`);

export function printQuestion() {
    console.log(`${c1.question} ... ${c1.answer}`);
}
