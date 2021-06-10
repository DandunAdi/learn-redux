const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return count + action.payload;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
};

export default counterReducer;
