const INITIAL_STATE = {
    loading: false,
    data: [],
    error: null
};
let _id = "";
let res = "";
export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_USER_REQUEST":
            return { ...state, loading: true };
        case "ADD_USER_SUCCESS":
            _id = action.payload.data.id;
            res = state.data.filter(n => {
                return n.id === _id;
            });

            if (!res.length) {
                return {
                    ...state,
                    loading: false,
                    error: null,
                    data: [...state.data, action.payload.data]
                };
            }
            return {
                ...state,
                loading: false,
                error: "Usuário ja adicionado na Lista"
            };

        case "ADD_USER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case "UPDATE_STATUS_ERROR":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "REMOVE_USER":
            _id = action.payload.id;
            res = state.data.filter(n => {
                return n.id !== _id;
            });
            return {
                data: res
            };
        case "CLEAN_MSG_ERROR":
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}
