// import ReactDOM from 'react-dom'
// import react from 'react'
// import App from './app'

// ReactDOM.render(<App />, document.getElementById('root'))

import _ from 'lodash'
import './index.css'
import './print'
import printMe from './print'

function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack', '!!'], ' ')
  element.classList.add('header')

  var btn = document.createElement('button')
  btn.innerHTML = 'click me and check the consol'
  btn.onclick = printMe
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accept the updated printme module!!!')
    printMe()
  })
}
