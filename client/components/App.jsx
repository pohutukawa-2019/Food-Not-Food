import React from 'react'

import Item from './Item'
import HealthBar from './HealthBar'
import AnswerModal from './AnswerModal'
import foodNotFood from '../foodNotFood'
import { getScore, getResponse } from '../processor'

class App extends React.Component {
  state = {
    score: 5,
    response: '',
    isAnswerModalVisible: false,
    currentItemIndex: 0
  }

  handleModalClose = () => {
    this.setState({
      isAnswerModalVisible: false
    })
  }

  showNext = willEat => {
    const { score, currentItemIndex } = this.state
    const currentItem = foodNotFood[currentItemIndex]
    this.setState({
      score: getScore(currentItem, score, willEat),
      response: getResponse(currentItem, willEat),
      currentItemIndex: this.state.currentItemIndex + 1,
      isAnswerModalVisible: true
    })
  }

  render () {
    const {
      response,
      currentItemIndex,
      isAnswerModalVisible } = this.state

    return (
      <>
        <div className="container">
          <div className='header row'>
            <h1>Food? Not Food?</h1>
          </div>
          <div className="background">
            <div className="healthBar">
              <HealthBar score={this.state.score}/>
            </div>
            <div className='row'>
              <Item
                showNext={this.showNext}
                currentItem={foodNotFood[currentItemIndex]} />
            </div>
          </div>
        </div>
        <AnswerModal
          message={response}
          isVisible={isAnswerModalVisible}
          handleModalClose={this.handleModalClose} />
      </>
    )
  }
}

export default App
