const lookUpReducer = (
  state = { searchResult: [], searchValue: "" },
  { type, payload }
) => {
  switch (type) {
    case "LOOKUP_STUDENT":
      return { ...state, ...payload };

    case "LOOKUP_SEARCH":
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default lookUpReducer;
