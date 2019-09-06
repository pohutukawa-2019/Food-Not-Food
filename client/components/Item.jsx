// Code to display the image will go here. StartButton.jsx will need to be linked to this component

import React, { Component } from 'react'
import foodNotFood from '../foodNotFood'


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
  state = {
   willEat: true
  }

  render() {

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-5"> 
              <img className="img-fluid pt-5" src={this.props.currentItem.img} alt=""/>
            </div>
            <div className="col-2">
              <div className="btn-group pt-5">
                <button onClick={() => {      
                  this.setState({
                    willEat: true
                })}} className="buttonEat">EAT</button>
                <button onClick={() => {
                  this.setState({
                    willEat: false
                })}} className="buttonDontEat">DON'T EAT</button>
              </div>
            </div>
            <div className="col-2">
              <button
                onClick={() => this.props.showNext(this.state.willEat)}
                className="buttonEat">NEXT</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ShowItem

