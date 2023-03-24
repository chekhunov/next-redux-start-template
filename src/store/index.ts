import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { createWrapper } from "next-redux-wrapper";
import { rootSaga } from "./rootSaga";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const makeStore = (context) => {
  const Store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(rootSaga);
  return Store
}

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
