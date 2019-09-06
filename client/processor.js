export function getScore (currentItem, currentScore, willEat) {
  if (!willEat) return currentScore

  return currentItem.food ? currentScore + 1 : currentScore - 1
}

export function getResponse (currentItem, willEat) {
  const { food } = currentItem
  const messages = [
    "Really?! You would eat that?!",
    "Good choice. I wouldn't eat it either.",
    "Okay, but you could totally eat it.",
    "Yeah, looks yum doesn't it?"
  ]
  if (willEat) {
    return food ? messages[3] : messages[0]
  } else {
    return food ? messages[2] : messages[1]
  }
}
