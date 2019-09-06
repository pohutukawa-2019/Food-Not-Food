import React from 'react'

export default function (props) {
  return (
    <div className="container">
      <div className="row" style={{justifyContent: 'center'}}>
        <button onClick={props.restart}>Play again?</button>
      </div>
    </div>
  )
}
