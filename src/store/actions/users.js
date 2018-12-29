export const addUserRequest = (text, coordenada) => ({
    type: "ADD_USER_REQUEST",
    payload: { text, coordenada }
});

export const addUserSuccess = data => ({
    type: "ADD_USER_SUCCESS",
    payload: { data }
});

export const addUserFailure = error => ({
    type: "ADD_USER_FAILURE",
    payload: { error }
});

export const updateStatusError = () => ({
    type: "UPDATE_STATUS_ERROR"
});
