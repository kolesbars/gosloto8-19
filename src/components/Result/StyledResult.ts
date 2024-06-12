import { styled } from 'styled-components';

export const StyledResultText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  text-align: left;

  @media (min-width: 760px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  margin: auto;

  @media (min-width: 760px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
  }
`;

export const StyledButton = styled.button`
  padding: 13px 21px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 50px;
  margin-top: 23px;
  align-self: center;
  cursor: pointer;

  @media (min-width: 760px) {
    font-size: 18px;
    margin-top: 33px;
    padding: 20px 32px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;
