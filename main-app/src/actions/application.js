export function setApplicationStep(step) {
  return {
    type: "SET_APPLICATION_STEP",
    step
  };
}

export function getApplication(user) {
	//console.log(user.application)
	return {
		type: "GET_APPLICATION",
		application: user.application
	}
}

export function completeApplicationStep(stepName, data) {
	return {
		type: "COMPLETE_APPLICATION_STEP",
		stepName,
		data
	}
}