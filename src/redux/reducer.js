const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Đi học",
      completed: false,
      priority: "High",
    },
    {
      id: 2,
      name: "Đi chơi",
      completed: false,
      priority: "Medium",
    },
    {
      id: 3,
      name: "Đi ngủ",
      completed: false,
      priority: "Low",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log("action", action, state);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
