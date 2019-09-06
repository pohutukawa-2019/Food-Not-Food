import React, { Component } from 'react'

const health = 5

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      health: 5
    } 
    this.handleNext = this.handleNext.bind(this)
  }

componentDidMount() {
  this.getHealth()
}

function clickedNext(this.state.foodNOTfood) {
  getHealth()
}

// getResult() {
//   getHealth
// }

function getHealth(fNotf) {
  if (fNOTf.food) {
    this.state.health = this.state.health + 1
  } else {
    this.state.health = this.state.health - 1
  }
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default GenerateScore



var health = 5

const foodNOTfood = require('../foodNotFood')
////// 1
///////////
// Create New Array. 
// console.log(foodNOTfood)
// EAT GOOD = 2
// DON'T EAT = 1
// EAT BAD = 0

// test array = [1,1,1,1,1,1,1,1,1,1]
// AVERAGING FUNCTION
//generateAverageSCORE(testArray)



//////2
/////
// Base Score is 5

/// If yes true and JSON true, i = score + 1
/// If yes true and JSON false i = score - 1
/// If no false and JSON false, i = score 
/// If no false and JSON true, i = score 

// Manipulate the score through for loop. 

// SECOND OPTION WOULD BE BETTER FOR WORKING OUT A HEALTH BAR?? 
// FINDING THE AVERAGE OF VALUES IN THE ARRAY WOULD TAKE TOO LONG

