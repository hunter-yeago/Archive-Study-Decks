import LearningIcon from '../images/learning-color.svg';
import StudyLampIcon from '../images/study-lamp-color.svg';
import StudyDeskIcon from '../images/study-desk-color.svg';
import EducationIcon from '../images/education-color.svg';

const DataPanel = {
    imagesrc: null,
    title: null,
    underlinecolor: null,
    statistic: null
};

const dataPanel1 = Object.assign(Object.create(DataPanel), {
    imagesrc: LearningIcon,
    title: 'Decks Created',
    underlinecolor: 'greencardunderline',
    statistic: '18',
});

const dataPanel2 = Object.assign(Object.create(DataPanel), {
    imagesrc: EducationIcon,
    title: 'Card 2 Title',
    underlinecolor: 'bluecardunderline',
    statistic: '73',
});

const dataPanel3 = Object.assign(Object.create(DataPanel), {
    imagesrc: StudyDeskIcon,
    title: 'Card 3 Title',
    underlinecolor: 'brickcardunderline',
    statistic: '9',
});

const dataPanel4 = Object.assign(Object.create(DataPanel), {
    imagesrc: StudyLampIcon,
    title: 'Card 4 Title',
    underlinecolor: 'sunshinecardunderline',
    statistic: '100',
});

export const dataPanels = [dataPanel1, dataPanel2, dataPanel3, dataPanel4];