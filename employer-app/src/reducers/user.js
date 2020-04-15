export default function application(state = {}, action) {
  switch (action.type) {
    case "GET_USER": {
      return {
        ...state,
        user: {
          id: action.user._id,
          clearance: action.user.clearance,
          originalPassword: action.user.originalPassword
        }
      }
    }
    case "UPDATE_USER": {
      const field = action.field
      return {
        ...state,
        user: {
          ...state.user,
          [field]: action.data
        }
      }
    }
    default:
      return state;
  }
}
