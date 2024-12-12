export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (!state.find((item) => item._id === action.payload._id)) {
        return [...state, action.payload];
      }
      return state;
    case "REMOVE_FAVORITE":
      return state.filter((item) => item._id !== action.payload);
    case "LOAD_FROM_STORAGE":
      return action.payload || [];
    default:
      return state;
  }
};
