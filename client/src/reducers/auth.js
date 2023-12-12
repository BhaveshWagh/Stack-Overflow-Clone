const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      // we can store in 3 ways store as a cookie, session & localStorage
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };

    default:
      return state;
  }
};

export default authReducer;
