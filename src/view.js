import { setAttributes } from "./helpers";
import { addDeckFunction } from "./index";

let main = document.querySelector('main');

//End Menu Button Logic

//Create Array of Main's Children and remove them
function removeMainTagContent () {
    
    const mainChildren = Array.from(document.querySelector('.main').children);
    mainChildren.forEach(element => {
        element.remove();
    });
};

export function generateHomePage() {

    //temporary testing for left nav bar

    //get openbutton and add toggleNav function / same for closebutton
    const openNavButton = document.getElementById('opennavbtn');
    const openNavButtonImage = document.getElementById('opennavbuttonimage');

    openNavButton.addEventListener('click', toggleNav);
    // openNavButton.addEventListener('mouseover', () => {
    //     openNavButton.style.opacity = '.5';
    //     openNavButtonImage.style.opacity = '1';
    //     console.log('firing');
    // });
    // openNavButton.addEventListener('mouseout', () => {
    //    openNavButton.style.opacity = '1'; 
    // });

    //Overview Section
    const overviewSection = document.createElement('section');
    overviewSection.className = 'overview'

    const overviewSectionTitle = document.createElement('h1');
    overviewSectionTitle.innerText = 'Overview';
    overviewSectionTitle.id = 'overviewsectiontitle';

    const rowOfCardsDiv = document.createElement('div');
    rowOfCardsDiv.className = 'rowofcards';

    //Temporary PlaceHolder Card Information
    const card1 = {
        imagesrc: 'images/learning-color.svg',
        title: 'Decks Created',
        underlinecolor: 'greencardunderline',
        statistic: '18',
    };

    const card2 = {
        imagesrc: 'images/education-color.svg',
        title: 'Card 2 Title',
        underlinecolor: 'bluecardunderline',
        statistic: '73',
    };

    const card3 = {
        imagesrc: 'images/study-desk-color.svg',
        title: 'Card 3 Title',
        underlinecolor: 'brickcardunderline',
        statistic: '9',
    };

    const card4 = {
        imagesrc: 'images/study-lamp-color.svg',
        title: 'Card 4 Title',
        underlinecolor: 'sunshinecardunderline',
        statistic: '100',
    };

    const overviewCards = [card1, card2, card3, card4];
    overviewCards.forEach((element) => {
        const OuterDiv = document.createElement('div');
        OuterDiv.className = 'overviewcard';

        const innerDiv = document.createElement('div');
        
        const image = document.createElement('img');
        image.src = element.imagesrc;

        const title = document.createElement('h3');
        title.innerText = element.title;
 
        const statisticContainer = document.createElement('p');
        statisticContainer.className = element.underlinecolor;
        statisticContainer.innerText = element.statistic;

        //Constructing InnerDiv
        innerDiv.append(image, title);

        //Constructing OuterDiv
        OuterDiv.append(innerDiv, statisticContainer);

        //Append card to rowOfCardsDiv
        rowOfCardsDiv.appendChild(OuterDiv);
    });

    //Your Decks Section
    const yourDecksSection = document.createElement('section');
    const yourDecksTitle = document.createElement('h1');
    yourDecksTitle.innerText = 'Your Decks';
    yourDecksTitle.id = 'yourdeckstitle';

    const deckDisplayDiv = document.createElement('div');
    deckDisplayDiv.className = 'deckdisplay';

    let deck1 = 'deck1';
    let deck2 = 'deck2';
    let deck3 = 'deck3';
    const decks = [deck1, deck2, deck3];

    decks.forEach((element) => {
        let deckDiv = document.createElement('div');
        deckDiv.className = 'deck';

        const deckImageAndNameDiv = document.createElement('div');
        deckImageAndNameDiv.className = 'deckimageandname';

        const deckImage = document.createElement('img');
        setAttributes(deckImage, {
            'src': 'gridcheckmark.svg',
            'alt': 'click here to see this decks info',
        });

        const deckName = document.createElement('h3');
        deckName.id = element;

        deckImageAndNameDiv.append(deckImage, deckName);

        const deckInfoButton = document.createElement('img');
        setAttributes(deckInfoButton, {
            'src': 'chevron-down.svg',
            'alt': 'click here to see this decks info',
            'class': 'deckinfomenubuttonimage',
        });

        deckDiv.append(deckImageAndNameDiv, deckInfoButton);
        deckDisplayDiv.appendChild(deckDiv);
    });

    //Appending Sections
    yourDecksSection.append(yourDecksTitle, deckDisplayDiv);
    overviewSection.append(overviewSectionTitle, rowOfCardsDiv);

    //Appending the sections to main
    main.append(overviewSection, yourDecksSection);

};

function generateAddDeckPage () {
    let addDeckPageTitle = document.createElement('h1');
    addDeckPageTitle.innerText = 'Add a Deck Here';
    addDeckPageTitle.id = 'adddeckpapetitle';

    generateModal();
    main.appendChild(addDeckPageTitle);
};

function generateModal() {

    const main = document.querySelector('.main');
    const triggerButton = document.createElement('button');
    triggerButton.id = 'myBtn';
    triggerButton.innerText = 'Add a Deck';
    triggerButton.onclick = function() {
        modalDiv.style.display = 'block';
    }

    main.appendChild(triggerButton);
    
    //Start Creating Modal
    let modalDiv = document.createElement('div');
    modalDiv.id = 'myModal';
    modalDiv.className = 'modal';
    modalDiv.style.display = 'none';
    
    //Modal Content
    let modalContentDiv = document.createElement('div');
    modalContentDiv.className = 'modal-content';

    //Modal Header
    let modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.className = 'modal-header';

    //Modal Span / X to Close
    let modalSpan = document.createElement('span');
    modalSpan.innerHTML = '&times;';
    modalSpan.onclick = function() {
        modalDiv.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modalDiv) {
            modalDiv.style.display = 'none';
        }
    }

    //Header
    let modalHeader = document.createElement('h5');
    modalHeader.innerText = 'New Deck'

    //Body
    let modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    //Form
    const form = document.createElement('form');
    form.className = 'modal-form';
    form.action = '';

    //Name Input
    let nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = 'deckname';
    nameInputLabel.innerText = 'Deck Name:'
    let nameInput = document.createElement('input');
    setAttributes(nameInput, {
        'name': 'deckname',
        'id': 'deckname',
        'class': 'deckname',
    });

    //Description Input
    let descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'deckdescription';
    descriptionLabel.innerText = 'Description:';
    let descriptionInput = document.createElement('textarea');
    setAttributes(descriptionInput,
        {
            'id': 'deckdescription',
            'class': 'deckdescription',
            'name': 'deckdescription',
            'rows': '4',
            'cols': '20',
            'maxLength': '150',
        });

    //Due Date Input
    let dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'deckduedate';
    dueDateLabel.innerText = 'Due Date:';
    let dueDateInput = document.createElement('input');
    setAttributes(dueDateInput, {
        'id': 'deckduedate',
        'name': 'deckduedate',
        'class': 'deckduedate',
    });

    //# of Cards Input
    let categoryLabel = document.createElement('label');
    categoryLabel.htmlFor = 'deckcategory';
    categoryLabel.innerText = 'Category';
    
    let category = document.createElement('input');
    setAttributes(category, {
        'id': 'deckcategory',
        'name': 'deckcategory',
        'class': 'deckcategory',
        'list': 'categorylist',
    });

    let categoryDataList = document.createElement('datalist');
    categoryDataList.id = 'categorylist';

    let optionLanguage = document.createElement('option');
    optionLanguage.value = 'Languages';

    let optionWebDevelopment = document.createElement('option');
    optionWebDevelopment.value = 'Web Development';

    let optionMusic = document.createElement('option');
    optionMusic.value = 'Music';

    categoryDataList.append(optionLanguage, optionWebDevelopment, optionMusic);

    //Submit button
    let formSubmitButton = document.createElement('input');
    formSubmitButton.addEventListener('click', addDeckFunction);
    setAttributes(formSubmitButton, {
        'type': 'submit',
        'value': 'Add Deck',
        'class': 'submitbutton',
    });
    formSubmitButton.onclick = function(event) {
        if (event.target == this) {
            modalDiv.style.display = 'none';
        }
    }
    
    //Append the Modal to the MainPage Div
    main.appendChild(modalDiv);
    //Append HeaderDiv + BodyDiv to ContentDiv
    modalContentDiv.append(modalHeaderDiv, modalBody);
    //Append h5 + Span to HeaderDiv
    modalHeaderDiv.append(modalHeader, modalSpan);
    //Append ContentDiv to Modal
    modalDiv.appendChild(modalContentDiv);
    //Append Form to BodyDiv
    modalBody.appendChild(form);
    //Append Items to Form
    form.append(
        nameInputLabel, nameInput,
        descriptionLabel, descriptionInput,
        dueDateLabel, dueDateInput,
        categoryLabel, category, categoryDataList,
        formSubmitButton);
};

function toggleNav() {
    
    let sideNav = document.getElementById('mySidenav');
    sideNav.classList.toggle('active');
}

// function closeNav() {
//     document.getElementById('mySidenav').style.width = '0';
// }