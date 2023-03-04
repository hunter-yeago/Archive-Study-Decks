import LearningIcon from '../images/learning-color.svg';
import StudyLampIcon from '../images/study-lamp-color.svg';
import StudyDeskIcon from '../images/study-desk-color.svg';
import EducationIcon from '../images/education-color.svg';

export const newUserData = {
    type: 'userdata',
    decksCreated: 0,
    decksStudied: 0,
    cardsCreated: 0,
    cardsStudied: 0,
};

const DataPanel = {
    imagesrc: null,
    title: null,
    underlinecolor: null,
    statistic: null
};

const decksCreatedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: LearningIcon,
    title: 'Decks Created',
    underlinecolor: 'greencardunderline',
    decksCreated: 0,
    statistic: 0,
    type: 'panel',
});

const decksStudiedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: EducationIcon,
    title: 'Decks Studied',
    underlinecolor: 'bluecardunderline',
    statistic: 0,
    decksStudied: 0,
    type: 'panel',
});

const cardsCreatedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: StudyDeskIcon,
    title: 'Cards Created',
    underlinecolor: 'brickcardunderline',
    statistic: 0,
    cardsCreated: 0,
    type: 'panel',
});

const cardsStudiedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: StudyLampIcon,
    title: 'Cards Studied',
    underlinecolor: 'sunshinecardunderline',
    statistic: 0,
    cardsStudied: 0,
    type: 'panel',
});

export const dataPanels = [decksCreatedPanel, decksStudiedPanel, cardsCreatedPanel, cardsStudiedPanel];