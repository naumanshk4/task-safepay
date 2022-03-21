const studentReducer = (state = [], { type, payload }) => {
    switch (type) {
      case "UPDATE_STUDENT":
        return payload;
      default:
        return state;
    }
  };
  export default studentReducer;
  