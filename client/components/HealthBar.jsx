import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'

function HealthBar (props) {
  return (
    <ProgressBar striped variant="danger" animated now={props.score} min={0} max={10} />
  )
}

export default HealthBar