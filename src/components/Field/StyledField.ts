import { styled } from 'styled-components';

export const StyledNumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledFieldTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const StyledFieldText = styled.p`
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

export const StyledFieldHeader = styled(StyledFieldText)`
  font-weight: 700;
`;
