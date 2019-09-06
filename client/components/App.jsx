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
      isAnswerModalVisible: true,

    })
  }

  getElementByID = el => {
    this.setState({

    })
  }

  handleClick = () => {
    this.setState({
      isAnswerModalVisible: true
    })
  }

  render () {
    return (
      <>
        <HealthBar />
        <Item currentItem={this.state.currentItem} showNext={this.showNext}/>
        <AnswerModal
          isVisible={this.state.isAnswerModalVisible}
          handleModalClose={this.handleModalClose} />
      </>
    )
  }
}

export default App
