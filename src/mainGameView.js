import { DOM } from "./helper";
import { checkWinCondition, renderSelectionMarkup } from "./selectionView";
import paperIcon from "./assets/images/icon-paper.svg";
import rockIcon from "./assets/images/icon-rock.svg";
import scissorsIcon from "./assets/images/icon-scissors.svg";

let yourPick, housePick;
const gameBtnsMarkup = [
  `<button class="game-container__paper" type="button" id= "paper-btn">
  <img src="${paperIcon}" alt="paper button" />
  </button>`,
  `<button class="game-container__scissors" type="button" id= "scissors-btn">
  <img src="${scissorsIcon}" alt="scissors button" />
  </button>`,
  `<button class="game-container__rock" type="button" id= "rock-btn">
  <img src="${rockIcon}" alt="rock button" />
  </button>`,
];

export const showAndHideRules = () => {
  DOM.rulesBtnEl.addEventListener("click", () => {
    DOM.rulesModalEl.showModal();
  });

  DOM.rulesWindowBtnEl.addEventListener("click", () => {
    DOM.rulesModalEl.close();
  });
};

export const renderGameMarkup = () => {
  const gameMarkup = `
  <div class="game-container">
    ${String(gameBtnsMarkup).replaceAll(",", "")}
  </div>`;

  DOM.mainSectionEl.insertAdjacentHTML("afterbegin", gameMarkup);
};

export const gameManager = (rndIndex, winCondition) => {
  const mainSectionEventHandler = (event) => {
    if (
      event.target.id !== "paper-btn" &&
      event.target.id !== "rock-btn" &&
      event.target.id !== "scissors-btn"
    )
      return;

    DOM.mainSectionEl.removeEventListener("click", mainSectionEventHandler);
    const rndChoice = rndIndex(gameBtnsMarkup);

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = gameBtnsMarkup[rndChoice];

    yourPick = event.target;
    housePick = tempDiv.firstElementChild;

    DOM.mainSectionEl.innerHTML = "";
    renderSelectionMarkup();
    checkWinCondition(
      winCondition,
      yourPick,
      housePick,
      renderGameMarkup,
      mainSectionEventHandler
    );
  };
  DOM.mainSectionEl.addEventListener("click", mainSectionEventHandler);
};
