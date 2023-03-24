// import { HYDRATE } from "next-redux-wrapper";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from "~/types/store/actions.types";

import { TodoActions, TodoState } from "~/types/store/test.types";

const initialState: TodoState = {
  pending: false,
  todos: [],
  error: null,
};

const testReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    // case HYDRATE:
    //   if (typeof action.payload.name !== "string") delete action.payload.name;
    //   if (typeof action.payload.age !== "number") delete action.payload.age;
    //   return { ...state, ...action.payload.todos };
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default testReducer;
