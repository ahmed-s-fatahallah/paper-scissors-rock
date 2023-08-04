import { DOM } from "./helper";

let yourPick, housePick;
const gameBtnsMarkup = [
  `<button class="game-container__paper" type="button" id= "paper-btn">
  <img src="./images/icon-paper.svg" alt="paper button" />
  </button>`,
  `<button class="game-container__scissors" type="button" id= "scissors-btn">
  <img src="./images/icon-scissors.svg" alt="scissors button" />
  </button>`,
  `<button class="game-container__rock" type="button" id= "rock-btn">
  <img src="./images/icon-rock.svg" alt="rock button" />
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
    ${gameBtnsMarkup[0]}
    ${gameBtnsMarkup[1]}
    ${gameBtnsMarkup[2]}
  </div>`;

  DOM.mainSectionEl.insertAdjacentHTML("afterbegin", gameMarkup);
};
export const renderSelectionMarkup = () => {
  const selectionMarkup = `
  <div class="selections">
        <div class="selection-container">
          <p class="selection-container__title">you picked</p>
          <div class="selection-container__bg" id= "your-pick">
          </div>
        </div>
        <div class= "results">
        </div>
        <div class="selection-container">
          <p class="selection-container__title">The House Picked</p>
          <div class="selection-container__bg" id= "house-pick">
          </div>
        </div>
      </div> `;

  DOM.mainSectionEl.insertAdjacentHTML("afterbegin", selectionMarkup);
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

    document
      .querySelector(".selections")
      .addEventListener("click", restartGameHandler);
    DOM.mainSectionEl.querySelector("#your-pick").append(yourPick);

    const condition = winCondition(yourPick, housePick);
    setTimeout(() => {
      DOM.scoreCounterEl.innerHTML = condition.score;
      DOM.mainSectionEl.querySelector("#house-pick").append(tempDiv);
      document.querySelector(".results").insertAdjacentHTML(
        "afterbegin",
        `<div class="result-container">
        <h3 class="result-container__title"></h3>
        <button class="result-container__btn">play Again</button>
        </div>`
      );

      const resultTitleEl = document.querySelector(".result-container__title");
      const resultBtn = document.querySelector(".result-container__btn");
      if (condition.condition === "tie") {
        resultTitleEl.textContent = "It is a TIE";
      } else if (condition.condition === "win") {
        resultBtn.style.color = "green";
        resultTitleEl.textContent = "You WIN";
        yourPick.classList.add("win");
      } else if (condition.condition === "lose") {
        resultBtn.style.color = "red";
        resultTitleEl.textContent = "You LOST";
        housePick.classList.add("win");
      }
    }, 1000);
  };
  DOM.mainSectionEl.addEventListener("click", mainSectionEventHandler);

  const restartGameHandler = (event) => {
    if (!event.target.classList.contains("result-container__btn")) return;
    DOM.mainSectionEl.innerHTML = "";
    renderGameMarkup();
    DOM.mainSectionEl.addEventListener("click", mainSectionEventHandler);
  };
};
