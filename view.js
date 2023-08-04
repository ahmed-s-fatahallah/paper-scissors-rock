import { DOM } from "./helper";

export const showAndHideRules = () => {
  DOM.rulesBtnEl.addEventListener("click", () => {
    DOM.rulesModalEl.showModal();
  });

  DOM.rulesWindowBtnEl.addEventListener("click", () => {
    DOM.rulesModalEl.close();
  });
};

const startScreen = () => {};

export const gameManager = () => {
  DOM.gameSection.addEventListener("click", (event) => {
    if (event.target.id !== "game-btn") return;
    console.log(event.target);
  });
};
