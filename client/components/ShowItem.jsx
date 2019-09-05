// Code to display the image will go here. StartButton.jsx will need to be linked to this component

import React, { Component } from 'react'

export class ShowItem extends Component {

  ////// 1
///////////
// Create New Array. 

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







  render() {
    return (
      <React.Fragment>

        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary active">
        <input type="radio" name="options" id="food" autocomplete="off" checked> FOOD
            </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="notFood" autocomplete="off"> NOT FOOD
            </label>
        </div>
      
      </React.Fragment>
    )
  }
}

export default ShowItem

