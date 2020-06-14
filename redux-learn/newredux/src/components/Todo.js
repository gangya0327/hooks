// import React, { Component } from 'react'

// export class Todo extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <li>
//         {this.props.value}
//       </li>
//     )
//   }
// }

// export default Todo

import React from 'react'

function Todo({ onClick, completed, text }) {
  return (
    <li onClick={onClick} style={{ textDecoration: completed ? 'through' : 'none' }}>{text}</li>
  )
}

export default Todo
