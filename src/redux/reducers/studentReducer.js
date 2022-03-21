const studentReducer = (state = [], { type, payload }) => {
    switch (type) {
      case "GET_STUDENTS":
        return payload;
      default:
        return state;
    }
  };
  export default studentReducer;
  