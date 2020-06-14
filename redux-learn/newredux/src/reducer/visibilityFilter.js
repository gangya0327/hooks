import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../action'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  console.log('state', state)
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter