export const addUserRequest = text => ({
    type: "ADD_USER",
    payload: { text }
});

export const addUserSuccess = data => ({
    type: "ADD_USER_SUCCESS",
    payload: { data }
});
