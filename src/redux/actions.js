import { getTasks } from "../http-client";

export const GET_TODO_ITEMS = "GET_TODO_ITEMS";
export const GET_TODO_ITEMS_SUCCESS = "GET_TODO_ITEMS_SUCCESS";
export const GET_TODO_ITEMS_ERROR = "GET_TODO_ITEMS_ERROR";

export const ADD_TODO_ITEM = "ADD_TODO_ITEM";

export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";

export const getTodoItems = () => {
  return (dispatch) => {
    try {
      getTasks().then((tasks) =>
        dispatch({
          type: GET_TODO_ITEMS_SUCCESS,
          payload: {
            tasks,
          },
        })
      );
    } catch (error) {
      dispatch({
        type: GET_TODO_ITEMS_ERROR,
      });
    }
  };
};

export const addTodoItem = (item) => {
  return (dispatch) =>
    dispatch({
      type: ADD_TODO_ITEM,
      payload: {
        item,
      },
    });
};

export const deleteTodoItem = (itemId) => {
  return (dispatch) =>
    dispatch({
      type: DELETE_TODO_ITEM,
      payload: {
        itemId,
      },
    });
};

/**
 *
 * ACTION_NAME
 *
 * function actionFun([params]) {
 *      return (dispatch) => {
 *          >>> logic
 *      }
 * }
 */
