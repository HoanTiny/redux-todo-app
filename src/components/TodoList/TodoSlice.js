const initState = [
  {
    id: 1,
    name: "Đi học",
    completed: true,
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
];

const todoListReducer = (state = initState, action) => {
  console.log("action", action, state);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO_STATUS":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
