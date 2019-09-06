import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import App from './components/App'

// https://reactcommunity.org/react-modal/accessibility/#app-element
// Accessibility best practice for react-modal
Modal.setAppElement('#app')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
