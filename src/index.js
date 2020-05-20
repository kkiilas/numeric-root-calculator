import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

const PORT = process.env.PORT || 3000
App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})