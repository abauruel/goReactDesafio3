const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_USER_SUCCESS":
            return [...state, action.payload.data];
        default:
            return state;
    }
}
