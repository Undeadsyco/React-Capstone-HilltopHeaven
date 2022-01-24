const initialState = {
  isLoggedIn: false,
  user: {},
  reviews: []
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
    case 'GET_REVIEWS':
      return {
        ...state,
        reviews: action.data,
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer;
