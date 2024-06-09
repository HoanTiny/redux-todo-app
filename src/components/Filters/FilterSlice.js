const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  console.log("action", action, state);
  switch (action.type) {
    case "FILTER":
      return {
        ...state,
        search: action.payload,
      };
    case "STATUS":
      return {
        ...state,
        status: action.payload,
      };

    case "PRIORITY":
      return {
        ...state,
        priority: [...action.payload],
      };

    default:
      return state;
  }
};

export default filtersReducer;
