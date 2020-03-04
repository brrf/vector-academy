export default function application(state = {}, action) {
  switch (action.type) {
    case "GET_USER": {
      return {
        ...state,
        user: {
          id: action.user._id
        }
      }
    }
    default:
      return state;
  }
}
