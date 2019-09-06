import React from 'react'

import Item from './Item'
import AnswerModal from './AnswerModal'
import foodNotFood from '../foodNotFood'


class App extends React.Component {
  state = {
    score: 5,
    isAnswerModalVisible: false,
    currentItem: foodNotFood[0]
  }

  handleModalClose = () => {
    this.setState({
      isAnswerModalVisible: false
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
        <Item />
        <AnswerModal
          isVisible={this.state.isAnswerModalVisible}
          handleModalClose={this.handleModalClose} />
      </>
    )
  }
}

export default App
