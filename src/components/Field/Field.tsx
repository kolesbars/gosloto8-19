import { ChangeEvent } from "react"
import { formatNumberInRussian } from "../../utils/common"
import { ItemType } from "../../types"
import NumberItem from "../NumberItem/NumberItem"
import {
  StyledNumbersContainer,
  StyledFieldHeader,
  StyledFieldText,
  StyledFieldTextContainer
} from "./StyledField"

type FieldProps = {
  fieldNumber: number
  selectedNumbers: number
  checkedNumbers: ItemType[]
  onSetNumbers: (event: ChangeEvent<HTMLInputElement>) => void
}

const Field = ({ fieldNumber, selectedNumbers, checkedNumbers, onSetNumbers }: FieldProps) => {
  return (
    <div>
      <StyledFieldTextContainer>
        <StyledFieldHeader>
          Поле {fieldNumber}
        </StyledFieldHeader>
        <StyledFieldText>
          Отметьте {formatNumberInRussian(selectedNumbers)}
        </StyledFieldText>
      </StyledFieldTextContainer>
      <StyledNumbersContainer>
        {
          checkedNumbers.map((item) => {
            return (
              <NumberItem
                key={`${fieldNumber}+${item.value}`}
                fieldNumber={fieldNumber}
                item={item}
                onSetNumbers={onSetNumbers}
                isDisabled={checkedNumbers.filter((item) =>
                  item.isChecked === true).length >= selectedNumbers && !item.isChecked}
              />
            )
          })
        }
      </StyledNumbersContainer>
    </div>
  )
}

export default Field
