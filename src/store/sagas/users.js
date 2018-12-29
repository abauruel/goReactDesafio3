import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { addUserSuccess, addUserFailure } from "../actions/users";

export function* addUser(action) {
    try {
        const { data } = yield call(api.get, `/${action.payload.text}`);

        const repositoryData = {
            id: data.id,
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url,
            coordenadas: action.payload.coordenada
        };

        yield put(addUserSuccess(repositoryData));
    } catch (error) {
        yield put(
            addUserFailure(
                error.response.status === 404
                    ? "Não foi possivel localizar usuário informado"
                    : error.response.status
            )
        );
    }
}
