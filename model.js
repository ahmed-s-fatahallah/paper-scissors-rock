let score = 0;

export const generateHousePickIndex = (arr) => {
  if (!arr) return;
  const rndIndex = Math.floor(Math.random() * arr.length);

  return rndIndex;
};
