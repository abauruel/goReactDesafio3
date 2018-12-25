export const addUserRequest = (text, coordenada) => ({
    type: "ADD_USER_REQUEST",
    payload: { text, coordenada }
});

export const addUserSuccess = data => ({
    type: "ADD_USER_SUCCESS",
    payload: { data }
});
