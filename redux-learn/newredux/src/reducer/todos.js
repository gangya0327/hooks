import { ADD_TODO, TOGGLE_TODO } from '../action'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      console.log('state', state)
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

export default todos