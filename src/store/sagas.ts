import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess } from "./actions/testAction";
import { FETCH_TODO_REQUEST } from "~/types/store/actions.types";
import { ITodo } from "~/types/store/test.types";

const getTodos = () =>
  axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga() {
  try {
    const response = yield call(getTodos);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
