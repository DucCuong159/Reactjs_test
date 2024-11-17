const initState = {
  userList: [],
  isShowing: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_USER_LIST":
      return {
        ...state,
        userList: action.payload,
      };
    case "UPDATE_SHOWING_LIST":
      return {
        ...state,
        isShowing: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
