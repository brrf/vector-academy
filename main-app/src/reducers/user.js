export default function application(state = {}, action) {
  switch (action.type) {
    case "GET_USER": {
      return {
        ...state,
        user: {
          id: action.user._id,
          status: action.user.status
        }
      }
    }
    case "UPDATE_USER_STATUS": {
      return {
        ...state,
        user: {
          ...state.user,
          status: action.status
        }
      }
    }
    default:
      return state;
  }
}
