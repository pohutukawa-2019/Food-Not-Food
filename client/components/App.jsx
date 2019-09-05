import React from 'react'

// import { Route } from 'react-router-dom'
import foodNotFood from '../foodNotFood'
import Item from './Item'
// import Results from './Results'
import AnswerModal from './AnswerModal'

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

// export default App
