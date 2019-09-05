import React from 'react'

import Item from './Item'
import foodNotFood from '../foodNotFood'

export default class App extends React.Component {

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
