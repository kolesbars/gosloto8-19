import { ItemType } from '../types'

export const generateRandomArray = (
  length: number,
  min: number,
  max: number,
) => {
  const randomArray = new Set<number>()

  while (randomArray.size < length) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    randomArray.add(randomNumber)
  }

  return Array.from(randomArray)
}

export const checkArraysMatch = (
  firstArray: number[],
  secondArray: (number | undefined)[],
  count: number,
) => {
  let commonCount = 0

  for (let item of firstArray) {
    if (secondArray.includes(item)) {
      commonCount++
    }

    if (commonCount >= count) {
      return true
    }
  }

  return false
}

export const formatNumberInRussian = (number: number) => {
  const lastDigit = number % 10
  const lastTwoDigits = number % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${number} чисел`
  }

  switch (lastDigit) {
    case 1:
      return `${number} число`
    case 2:
    case 3:
    case 4:
      return `${number} числа`
    default:
      return `${number} чисел`
  }
}

export const getSelectedNumbers = (value: ItemType[]) => {
  return value.map((value) => {
    if (value.isChecked) {
      return value.value
    }
  })
}
