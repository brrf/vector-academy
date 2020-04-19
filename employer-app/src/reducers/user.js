export default function application(state = {}, action) {
  switch (action.type) {
    case "GET_USER": {
      const {_id, clearance, originalPassword, fname, lname} = action.user;
      return {
        ...state,
        user: {
          id: _id,
          clearance,
          originalPassword,
          fname,
          lname
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
