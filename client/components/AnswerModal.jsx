import React from 'react'

import Modal from 'react-modal'

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function AnswerModal (props) {
  return (
    <Modal
      style={modalStyle}
      isOpen={props.isVisible}
      onRequestClose={props.handleModalClose}>
      <p>{props.message}</p>
      <button
        style={{float: 'right'}}
        onClick={props.handleModalClose}
      >Continue</button>
    </Modal>
  )
}

export default AnswerModal
