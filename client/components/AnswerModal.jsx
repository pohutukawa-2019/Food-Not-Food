import React from 'react'

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
    </Modal>
  )
}

export default AnswerModal
