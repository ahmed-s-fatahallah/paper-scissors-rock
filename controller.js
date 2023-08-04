import { generateHousePickIndex, winCondition } from "./model";
import { renderGameMarkup, gameManager, showAndHideRules } from "./view";

const init = () => {
  showAndHideRules();
  renderGameMarkup();
  gameManager(generateHousePickIndex, winCondition);
};

init();
