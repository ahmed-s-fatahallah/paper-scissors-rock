import { generateHousePickIndex, winCondition } from "./model";
import {
  renderGameMarkup,
  gameManager,
  showAndHideRules,
} from "./mainGameView";

const init = () => {
  showAndHideRules();
  renderGameMarkup();
  gameManager(generateHousePickIndex, winCondition);
};

init();
