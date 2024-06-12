import {
  useState,
  ChangeEvent,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'
import {
  Container,
  StyledTicket,
  StyledHeader,
  StyledHeaderContainer,
  StyledMagicButton,
  StyledMagicButtonIcon,
  StyledResultButton
} from './StyledTicket'
import Field from '../Field/Field'
import { post } from '../../api/api'
import { checkArraysMatch, generateRandomArray, getSelectedNumbers } from '../../utils/common'
import { ItemType } from '../../types'
import Result from '../Result/Result'

const FIRST_FIELD_TOTAL_NUMBERS = 19
const FIRST_FIELD_MUST_SELECTED_NUMBERS = 8
const SECOND_FIELD_TOTAL_NUMBERS = 2
const SECOND_FIELD_MUST_SELECTED_NUMBERS = 1

const Ticket = () => {
  const [firstFieldValues, setFirstFieldValues] = useState<ItemType[]>([])
  const [secondFieldValues, setSecondFieldValues] = useState<ItemType[]>([])
  const [isWon, setIsWon] = useState<boolean | null>(null)

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement>,
    setValues: Dispatch<SetStateAction<ItemType[]>>
  ) => {
    setValues((prevState) => prevState.map(checkbox => {
      return checkbox.value === +event.target.value ?
        { ...checkbox, isChecked: !checkbox.isChecked } :
        checkbox
    }
    ))
  }

  const randomFillFields = () => {
    const firstGeneratedArray = generateRandomArray(
      FIRST_FIELD_MUST_SELECTED_NUMBERS, 1, FIRST_FIELD_TOTAL_NUMBERS)
    const secondGenaratedArray = generateRandomArray(
      SECOND_FIELD_MUST_SELECTED_NUMBERS, 1, SECOND_FIELD_TOTAL_NUMBERS)

    setFirstFieldValues((prevState) => prevState.map(checkbox =>
      firstGeneratedArray.includes(checkbox.value) ?
        { ...checkbox, isChecked: true } :
        { ...checkbox, isChecked: false }
    ))

    setSecondFieldValues((prevState) => prevState.map(checkbox =>
      secondGenaratedArray.includes(checkbox.value) ?
        { ...checkbox, isChecked: true } :
        { ...checkbox, isChecked: false }
    ))
  }

  const postTicketData = (
    firstFieldNumbers: (number | undefined)[],
    secondFieldNumbers: (number | undefined)[],
    isWon: boolean | null
  ) => {
    post('/ticket', {
      selectedNumber:
      {
        firstField: firstFieldNumbers,
        secondField: secondFieldNumbers
      },
      isTicketWon: isWon,
    }).catch(() => {
      alert('Не удалось отправить данные на сервер')
    })
  }

  const checkResult = () => {
    const firstGeneratedArray = generateRandomArray(
      FIRST_FIELD_MUST_SELECTED_NUMBERS, 1, FIRST_FIELD_TOTAL_NUMBERS)
    const secondGenaratedArray = generateRandomArray(
      SECOND_FIELD_MUST_SELECTED_NUMBERS, 1, SECOND_FIELD_TOTAL_NUMBERS)


    const firstFieldNumbers = getSelectedNumbers(firstFieldValues)

    if (secondGenaratedArray[0] === +secondFieldValues[0].value) {
      if (checkArraysMatch(firstGeneratedArray, firstFieldNumbers, 3)) {
        setIsWon(true)
        return true
      }

      setIsWon(false)
      return false
    } else if (checkArraysMatch(firstGeneratedArray, firstFieldNumbers, 4)) {
      setIsWon(true)
      return true
    }

    setIsWon(false)
    return false
  }

  const handleResultClick = () => {
    checkResult()

    const firstFieldNumbers = getSelectedNumbers(firstFieldValues)
    const secondFieldNumbers = getSelectedNumbers(secondFieldValues)

    postTicketData(firstFieldNumbers, secondFieldNumbers, isWon)
  }

  useEffect(() => {
    const firstFieldDefaultValues = []
    const secondFieldDefaultValues = []

    for (let index = 1; index <= FIRST_FIELD_TOTAL_NUMBERS; index++) {
      firstFieldDefaultValues.push({
        value: index,
        isChecked: false,
      })
    }

    for (let index = 1; index <= SECOND_FIELD_TOTAL_NUMBERS; index++) {
      secondFieldDefaultValues.push({
        value: index,
        isChecked: false,
      })
    }

    setFirstFieldValues(firstFieldDefaultValues)
    setSecondFieldValues(secondFieldDefaultValues)
  }, [])

  return (
    <Container>
      <StyledTicket>
        <StyledHeaderContainer>
          <StyledHeader>Билет 1</StyledHeader>
          {isWon === null && <StyledMagicButton
            onClick={randomFillFields}>
            <StyledMagicButtonIcon src='assets/svg/magic-wand.svg' />
          </StyledMagicButton>}
        </StyledHeaderContainer>
        {isWon === null ?
          <>
            <Field
              fieldNumber={1}
              selectedNumbers={FIRST_FIELD_MUST_SELECTED_NUMBERS}
              checkedNumbers={firstFieldValues}
              onSetNumbers={(event) => {
                handleFieldChange(event, setFirstFieldValues)
              }}
            />
            <Field
              fieldNumber={2}
              selectedNumbers={SECOND_FIELD_MUST_SELECTED_NUMBERS}
              checkedNumbers={secondFieldValues}
              onSetNumbers={(event) => {
                handleFieldChange(event, setSecondFieldValues)
              }}
            />
            <StyledResultButton
              onClick={handleResultClick}
              disabled={
                firstFieldValues.filter((item) =>
                  item.isChecked === true).length < FIRST_FIELD_MUST_SELECTED_NUMBERS ||
                secondFieldValues.filter((item) =>
                  item.isChecked === true).length < SECOND_FIELD_MUST_SELECTED_NUMBERS
              }>
              Показать результат
            </StyledResultButton>
          </>
          : <Result isWon={isWon} />}
      </StyledTicket>
    </Container >
  )
}

export default Ticket
