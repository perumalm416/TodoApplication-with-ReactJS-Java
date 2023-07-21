const initialState = {
  updateTodoInfo: null,
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tODO_UPDATE_START": {
      return {
        updateTodoInfo: action.payload,
      };
    }
    case "TODO_UPDATE_DONE": {
      return {
        updateTodoInfo: null,
      };
    }

    default: {
      return state;
    }
  }
};
