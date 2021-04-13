const initialState = {
  isLogin: false,
  users: [],
  jobSeekers: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGOUT":
      return { ...state, isLogin: false };
    case "SET_LOGIN":
      return { ...state, isLogin: true };
    case "FETCH_USER":
      return { ...state, users: action.payload };
    case "FETCH_JOBSEEKER":
      return { ...state, jobSeekers: action.payload };
    default:
      return state;
  }
}
