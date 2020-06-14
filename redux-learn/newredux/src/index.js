import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { cube } from './math'

import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import todoApp from './reducer'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './action'

let store = createStore(todoApp)

// 打印初始状态
console.log(store.getState())

store.dispatch(addTodo('gogogo'))
store.dispatch(toggleTodo(0))
store.dispatch(addTodo('testtest'))
store.dispatch(addTodo('ttewrw'))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))

console.log(store.getState())

ReactDOM.render(
  // <Provider store={store}>
  //   <App number={cube(2)} />
  // </Provider>,
  <App number={cube(2)} />,
  document.getElementById('root'))

// import _ from 'lodash'
// import './index.css'
// import './print'
// import printMe from './print'

// function component() {
//   var element = document.createElement('div')
//   element.innerHTML = _.join(['Hello', 'webpack', '!!'], ' ')
//   element.classList.add('header')

//   var btn = document.createElement('button')
//   btn.innerHTML = 'click me and check the consol'
//   btn.onclick = printMe
//   element.appendChild(btn)
//   return element
// }

// document.body.appendChild(component())

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accept the updated printme module!!!')
//     printMe()
//   })
// }
