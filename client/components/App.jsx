import React from 'react'
// import { Route } from 'react-router-dom'
import foodNotFood from '../foodNotFood'
import Item from './Item'
// import Results from './Results'

export default class App extends React.Component {

  state = {
      score: 5,
      currentItem: foodNotFood[0]
  }

  render () {
    return (
      <React.Fragment>
        <div className="SOME-NICE-CSS">
          <Item /> 
        </div>
      </React.Fragment>
    )
  }
}

// export default App