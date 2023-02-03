
import { addDeck } from './model';
import {mobileNavButtonArray, generateHomePage, changeTabColor} from './view';

const defaultTabID = 'leftoverviewbutton';
export const addDeckFunction = addDeck;

generateHomePage();
changeTabColor(defaultTabID, mobileNavButtonArray);