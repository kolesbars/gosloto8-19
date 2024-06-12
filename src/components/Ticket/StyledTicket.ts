import { styled } from 'styled-components'

export const Container = styled.div`
  width: 98vw;
  height: 98vh;
  background: linear-gradient(#4568dc, #b06ab3);
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`
export const StyledTicket = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  margin: 17px 12px;
  width: 296px;
  height: 450px;
  padding: 11px;

  @media (min-width: 760px) {
    width: 496px;
    height: 550px;
  }

  @media (min-width: 1440px) {
    width: 700px;
    height: 750px;
  }
`
export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledHeader = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: left;

  @media (min-width: 760px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`

export const StyledMagicButton = styled.button`
  background: none;
  border: none;
`

export const StyledMagicButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 760px) {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 1440px) {
    width: 30px;
    height: 30px;
  }
`

export const StyledResultButton = styled.button`
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
    margin-top: 43px;
    padding: 30px 42px;
  }
`
