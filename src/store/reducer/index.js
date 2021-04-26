const initialState = {
  isLogin: false,
  isCompany: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGOUT":
      return { ...state, isLogin: false };
    case "SET_LOGIN":
      return { ...state, isLogin: true };
    case "SET_COMPANY":
      return { ...state, isCompany: action.payload };
    default:
      return state;
  }
}
