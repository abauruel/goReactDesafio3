const INITIAL_STATE = [{ name: "" }];

export default function Users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_USER":
            return [...state, { text: action.payload.text }];
        default:
            return state;
    }
}
