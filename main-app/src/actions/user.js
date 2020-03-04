export function getUser(user) {
  return {
    type: "GET_USER",
    user
  };
}