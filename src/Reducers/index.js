const initialState = {
  isLoggedIn: false,
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer;
