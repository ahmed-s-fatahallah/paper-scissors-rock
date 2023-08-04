import { DOM } from "./helper";

export const renderSelectionMarkup = () => {
  const selectionMarkup = `
    <div class="selections">
          <div class="selection-container">
            <p class="selection-container__title">You picked</p>
            <div class="selection-container__bg" id= "your-pick">
            </div>
          </div>
          <div class= "results">
          </div>
          <div class="selection-container">
            <p class="selection-container__title">House Picked</p>
            <div class="selection-container__bg" id= "house-pick">
            </div>
          </div>
        </div> `;

  DOM.mainSectionEl.insertAdjacentHTML("afterbegin", selectionMarkup);
};

export const checkWinCondition = (
  winCondition,
  yourPick,
  housePick,
  renderGameMarkup,
  mainSectionEventHandler
) => {
  const restartGameHandler = (event) => {
    if (!event.target.classList.contains("result-container__btn")) return;
    DOM.mainSectionEl.innerHTML = "";
    renderGameMarkup();
    DOM.mainSectionEl.addEventListener("click", mainSectionEventHandler);
  };
  document
    .querySelector(".selections")
    .addEventListener("click", restartGameHandler);
  DOM.mainSectionEl.querySelector("#your-pick").append(yourPick);

  const condition = winCondition(yourPick, housePick);

  setTimeout(() => {
    DOM.scoreCounterEl.innerHTML = condition.score;
    DOM.mainSectionEl.querySelector("#house-pick").append(housePick);
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
