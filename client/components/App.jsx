import React from 'react'

import Item from './Item'
import HealthBar from './HealthBar'
import AnswerModal from './AnswerModal'
import foodNotFood from '../foodNotFood'

class App extends React.Component {
  state = {
    score: 5,
    response: '',
    isAnswerModalVisible: false,
    currentItem: foodNotFood[0]
  }

  handleModalClose = () => {
    this.setState({
      isAnswerModalVisible: false
    })
  }

  showNext = willEat => {
    this.setState({
      response: getMessage(),
      isAnswerModalVisible: true
    })
  }

  render () {
    return (
      <>
        <HealthBar />
        <Item showNext={this.showNext} />
        <AnswerModal
          message={this.state.response}
          isVisible={this.state.isAnswerModalVisible}
          handleModalClose={this.handleModalClose} />
      </>
    )
  }
}

// TODO: replace this with proper messages
function getMessage(willEat) {
  const maxId = willEat ? 4 : 2
  const messages = [
    "Really?! You would eat that?!",
    "Good choice. I wouldn't eat it either.",
    "Okay, but you could totally eat it.",
    "Yeah, looks yum doesn't it?"
  ]
  const id = Math.floor(Math.random() * maxId)
  return messages[id]
}

export default App
