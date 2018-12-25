import reducers from "./reducers";

import sagas from "./sagas";
import { compose, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
const createApropriateStore =
    process.env.NODE_ENV === "development"
        ? console.tron.createStore
        : createStore;
const store = createApropriateStore(
    reducers,
    compose(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);
export default store;
