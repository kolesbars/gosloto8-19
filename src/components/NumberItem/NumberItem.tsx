import { ChangeEvent } from "react"
import { ItemType } from "../../types"
import { StyledLabelText, StyledNumbersCheckbox, StyledNumbersLebel } from "./StyledNumberItem"

type NumberItemProps = {
  fieldNumber: number,
  item: ItemType,
  onSetNumbers: (event: ChangeEvent<HTMLInputElement>) => void,
  isDisabled: boolean,

}

const NumberItem = ({ fieldNumber, item, onSetNumbers, isDisabled }: NumberItemProps) => {
  return (
    <>
      <StyledNumbersCheckbox
        id={`${fieldNumber}+${item.value}`}
        value={item.value}
        checked={item.isChecked}
        type="checkbox"
        onChange={onSetNumbers}
        disabled={isDisabled} />
      <StyledNumbersLebel htmlFor={`${fieldNumber}+${item.value}`}>
        <StyledLabelText>{item.value}</StyledLabelText>
      </StyledNumbersLebel>
    </>
  )
}

export default NumberItem
