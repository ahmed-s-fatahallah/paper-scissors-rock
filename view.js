import { DOM } from "./helper";

const startScreen = () => {};

export const gameManager = () => {
  DOM.gameSection.addEventListener("click", (event) => {
    if (event.target.id !== "game-btn") return;
    console.log(event.target);
  });
};
