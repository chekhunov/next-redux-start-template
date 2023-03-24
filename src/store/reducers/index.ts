import { combineReducers } from "redux";

import testReducer from "./testReducer";

const rootReducer = combineReducers({
  todo: testReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
