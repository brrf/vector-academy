export default function positions(state = {}, action) {
  switch (action.type) {
    case "SET_POSITIONS": {
      return {
        ...state,
        positions: action.positions
      }
    }
    default:
      return state;
  }
}
