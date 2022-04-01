import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  GET_TODO_ITEMS_SUCCESS,
} from "./actions";

const initialState = {
  items: [],
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_ITEMS_SUCCESS:
      return (
        console.log("success", state, action) || {
          ...state,
          items: action.payload.tasks,
        }
      );

    case ADD_TODO_ITEM:
      return {
        ...state,
        items: [action.payload.item, ...state.items],
      };

    case DELETE_TODO_ITEM:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload.itemId),
      };

    default:
      return state;
  }
};

export default RootReducer;
