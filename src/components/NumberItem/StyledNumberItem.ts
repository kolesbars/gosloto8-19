import { styled } from 'styled-components';

export const StyledNumbersLebel = styled.label`
  width: 38px;
  height: 38px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 760px) {
    width: 68px;
    height: 68px;
  }

  @media (min-width: 1440px) {
    width: 98px;
    height: 98px;
  }
`;

export const StyledNumbersCheckbox = styled.input`
  display: none;

  &:checked + label {
    width: 34px;
    height: 34px;
    margin: 2px;
    background-color: #ffd205;

    @media (min-width: 760px) {
      width: 60px;
      height: 60px;
      margin: 4px;
    }

    @media (min-width: 1440px) {
      width: 90px;
      height: 90px;
    }
  }

  &:disabled + label {
    width: 34px;
    height: 34px;
    margin: 2px;
    background-color: gray;

    @media (min-width: 760px) {
      width: 60px;
      height: 60px;
      margin: 4px;
    }

    @media (min-width: 1440px) {
      width: 90px;
      height: 90px;
    }
  }
`;

export const StyledLabelText = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-weight: 500;

  @media (min-width: 760px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;
