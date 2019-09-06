// Code to display the image will go here. StartButton.jsx will need to be linked to this component

import React, { Component } from 'react'
import foodNotFood from '../foodNotFood'


export class ShowItem extends Component {

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
              eat: true
            })} } className="buttonEat">EAT</button>
            <button onClick={() => this.setState({
              eat: false
            })} className="buttonDontEat">DON'T EAT</button>
            </div>
          </div>

      
         </div>
         <div className="col-5"></div>
         <div className="col-2 pt-5">
          <button onClick={() => this.props.showNext(true)} className="buttonEat">NEXT</button>
         </div>
         </div>
 
      </React.Fragment>
    )
  }
}

export default ShowItem

