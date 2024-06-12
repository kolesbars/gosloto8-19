import { StyledButton, StyledImg, StyledResultText } from "./StyledResult"
import { useState } from "react"

type ResultProps = {
  isWon: boolean
}

const Result = ({ isWon }: ResultProps) => {
  const [isShowLaurels, setIsShowLaurels] = useState(false)

  const handleGetLaurels = () => {
    setIsShowLaurels(true)
  }

  const handleReturnClick = () => {
    location.reload()
  }

  return (
    <>
      {isWon ?
        <>
          <StyledResultText>Ого, вы выиграли! Поздравляем!</StyledResultText>
          {isShowLaurels ?
            <StyledImg src="assets/png/nothing.png" /> :
            <StyledButton onClick={handleGetLaurels}>Забрать причитающиеся лавры</StyledButton>}
        </> :
        <>
          <StyledResultText>Упс, не повезло. Попробуй еще раз!</StyledResultText>
          <StyledButton onClick={handleReturnClick}>Еще раз</StyledButton>
        </>
      }
    </>
  )
}

export default Result
