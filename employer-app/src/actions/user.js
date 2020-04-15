export function getUser(user) {
  return {
    type: "GET_USER",
    user
  };
};

export function updateUser (field, data) {
	return {
		type: "UPDATE_USER",
		field,
		data
	};
};