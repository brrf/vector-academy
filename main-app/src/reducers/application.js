export default function application(state = {}, action) {
  switch (action.type) {
    case "GET_APPLICATION": {
      //console.log({reducerState: action.application});
      return {
        ...state,
        applicationStatus: {
          applicationStep: false,
          application: action.application
        }
      }
    }
    case "SET_APPLICATION_STEP":
      return {
        ...state,
        applicationStatus: {
         ...state.applicationStatus,
         applicationStep: action.step
        } 
      };
    case "COMPLETE_APPLICATION_STEP":
      return {
        ...state,
        applicationStatus: {
          ...state.applicationStatus,
          application: {
            ...state.applicationStatus.application,
            [action.stepName]: action.data
          }
        }
      };
    default:
      return state;
  }
}
