import { YOU_WIN, GAME_OVER, TIE, HIT, GOT_HIT } from "../constants";
export const rollDice = () => {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const rollDices = (lifes) => {
  const d = [];
  const l = [...lifes];
  let r = "";
  for (let index = 0; index < 4; index++) {
    d.push(rollDice());
  }
  const p1 = d[0] + d[1];
  const p2 = d[2] + d[3];
  if (p1 > p2) {
    l[1] = l[1] - p1 + p2;
    if (l[1] < 1) {
      r = YOU_WIN;
    } else {
      r = `${HIT} ${p1 - p2}!`;
    }
  } else if (p2 > p1) {
    l[0] = l[0] - p2 + p1;
    if (l[0] < 1) {
      r = GAME_OVER;
    } else {
      r = `${GOT_HIT} ${p2 - p1}!`;
    }
  } else {
    r = TIE;
  }

  return { d, l, r };
};
