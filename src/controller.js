import { overviewCards } from "./model";
import { temporaryDecks } from "./model";
export const controllerOverviewCards = overviewCards;
export const controllerTemporaryDecks = temporaryDecks;

// Got the code from ChatGPT
const controller = {
    updateData: function(data) {
        model.setData(data);
        visualViewport.render(model.getData());
    }
}