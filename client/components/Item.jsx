import React, { Component } from 'react'
import foodNotFood from '../foodNotFood'

class Item extends Component {
  state = {
   willEat: false
  }

  render() {
    const { showNext } = this.props
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-5"> 
              <img className="img-fluid pt-5"
                src={this.props.currentItem.img} alt=""/>
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
                onClick={() => showNext(this.state.willEat)}
                className="buttonEat">NEXT</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Item

