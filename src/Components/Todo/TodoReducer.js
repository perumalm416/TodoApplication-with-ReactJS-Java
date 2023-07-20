const initialState = {
  updateTodoInfo: null,
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tODO_FORM_UPDATE": {
      return {
        updateTodoInfo: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
