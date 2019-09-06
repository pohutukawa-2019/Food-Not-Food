import React from 'react'

import Item from './Item'
import HealthBar from './HealthBar'
import AnswerModal from './AnswerModal'
import foodNotFood from '../foodNotFood'
import {getScore, getReponse} from '../processor'

class App extends React.Component {
  state = {
    score: 3,
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
      <div className="container">
      <div className='header row'>
      <h1>Food? Not Food?</h1>
      </div>
      <div className="healthBar">
        <HealthBar 
        score={this.state.score}/>
        </div>
        <div className='row'>
        <Item />
        <AnswerModal
          isVisible={this.state.isAnswerModalVisible}
          handleModalClose={this.handleModalClose} />
          </div>
          </div>
      </>
    )
  }
}

export default App
