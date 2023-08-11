let score = 0;

export const generateHousePickIndex = (arr) => {
  if (!arr) return;
  const rndIndex = Math.floor(Math.random() * arr.length);

  return rndIndex;
};

export const winCondition = (yourPick, housePick) => {
  if (yourPick.id === housePick.id) return { score, condition: "tie" };
  if (yourPick.id === "paper-btn" && housePick.id === "rock-btn") {
    return { score: ++score, condition: "win" };
  } else if (yourPick.id === "scissors-btn" && housePick.id === "paper-btn") {
    return { score: ++score, condition: "win" };
  } else if (yourPick.id === "rock-btn" && housePick.id === "scissors-btn") {
    return { score: ++score, condition: "win" };
  } else {
    score = 0;
    return { score, condition: "lose" };
  }
};
