import React, { useState } from "react";
import monster from "../assets/monster.png";
import player from "../assets/player.png";
import { YOU_WIN, GAME_OVER } from "../constants";

import { rollDices } from "../utils";
import {
  Avatar,
  Button,
  Dice,
  Container,
  Section,
  Label,
  Life,
  Value,
  Column,
  Title,
  Result,
} from "../styles";

function App() {
  const [dices, setDices] = useState([0, 0, 0, 0]);
  const [lifes, setLifes] = useState([100, 100]);
  const [result, setResult] = useState("Click Attack");
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    const { d, l, r } = rollDices(lifes);
    setDices(d);
    setLifes(l);
    setResult(r);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  return (
    <>
      <Title>Battle Simulator</Title>
      <Container>
        <Section>
          <Column>
            <Avatar src={player} active={active} />
          </Column>
          <Column>
            <Life value={lifes[0]} />
            <Value>{lifes[0] > 0 ? lifes[0] : 0}</Value>
          </Column>
          <Column>
            <Dice active={active}>
              <span className={`dice-${dices[0]}`}></span>
            </Dice>
            <Dice active={active}>
              <span className={`dice-${dices[1]}`}></span>
            </Dice>
            <Value>{dices[0] + dices[1]}</Value>
          </Column>
          <Label>Player</Label>
        </Section>
        <Section>
          <Column fullWidth>
            <Result>{result}</Result>
            <Button
              onClick={handleClick}
              disabled={result === YOU_WIN || result === GAME_OVER}
            >
              Attack!
            </Button>
          </Column>
        </Section>
        <Section>
          <Column>
            <Avatar src={monster} active={active} />
          </Column>
          <Column>
            <Life value={lifes[1]} />
            <Value>{lifes[1] > 0 ? lifes[1] : 0}</Value>
          </Column>
          <Column>
            <Dice active={active}>
              <span className={`dice-${dices[2]}`}></span>
            </Dice>
            <Dice active={active}>
              <span className={`dice-${dices[3]}`}></span>
            </Dice>
            <Value>{dices[2] + dices[3]}</Value>
          </Column>
          <Label>Monster</Label>
        </Section>
      </Container>
    </>
  );
}

export default App;
