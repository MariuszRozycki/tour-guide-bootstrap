export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (!state.find((item) => item._id.$oid === action.payload._id.$oid)) {
        return [...state, action.payload];
      }
      return state;
    case "REMOVE_FAVORITE":
      return state.filter((item) => item._id.$oid !== action.payload);
    case "LOAD_FROM_STORAGE":
      return action.payload || [];
    default:
      return state;
  }
};
