import {RECEIVE_TRONALDDUMP} from '../actions'

function subreddits (state = [], action) {
  console.log(action.tronaldDump)
  switch (action.type) {
    case RECEIVE_TRONALDDUMP:
      return action.tronaldDump

    default:
      return state
  }
}

export default subreddits
