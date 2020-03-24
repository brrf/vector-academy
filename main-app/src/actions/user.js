export function getUser(user) {
  return {
    type: "GET_USER",
    user
  };
}

export function updateUserStatus(status) {
	return {
		type: "UPDATE_USER_STATUS",
		status
	}
}