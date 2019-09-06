import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'

function HealthBar (props) {
  return (
    <ProgressBar striped variant="danger" animated now={5} min={0} max={10} />
  )
}

export default HealthBar