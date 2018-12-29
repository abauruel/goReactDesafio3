import { toast } from "react-toastify";
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

export const removeUser = id => ({
    type: "REMOVE_USER",
    payload: { id }
});

export const cleanMsgError = () => ({
    type: "CLEAN_MSG_ERROR"
});
