import styled, { keyframes, css } from "styled-components";

const flip = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;

export const Title = styled.h1`
  font-family: "Grenze Gotisch", cursive;
  text-align: center;
`;

export const Result = styled.h2`
  font-family: "Grenze Gotisch", cursive;
  font-size: 24px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  padding: 10px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

export const Life = styled.div`
  width: 30px;
  height: 210px;
  position: relative;
  border: 1px solid grey;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 10px;
  box-sizing: border-box;

  &:after {
    display: block;
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    background: green;
    transition: height ease 0.3s;
    width: 100%;
    height: ${({ value }) => `${value}%`};
  }
`;

export const Value = styled.span`
  font-family: "Grenze Gotisch", cursive;
  font-size: 16px;
  font-weight: bold;
`;

export const Dice = styled.div`
  width: 100px;
  height: 100px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 10px;
  box-sizing: border-box;
  transform-origin: center;

  span {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  ${({ active }) => {
    if (active) {
      return css`
        animation-duration: 0.5s;
        animation-fill-mode: both;
        backface-visibility: visible;
        animation-timing-function: ease;
        animation-name: ${flip};
      `;
    }
  }}
`;

export const Button = styled.button`
  font-family: "Grenze Gotisch", cursive;
  cursor: pointer;
  background: none;
  border: 1px solid grey;
  border-radius: 2px;
  font-size: 18px;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  flex: 0;
  font-family: "Grenze Gotisch", cursive;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Column = styled.div`
  flex: ${({ fullWidth }) => (fullWidth ? "1 1 100%" : "1 1 33.331%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
