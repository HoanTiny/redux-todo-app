export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: "TOGGLE_TODO_STATUS",
    payload: todoId,
  };
};

export const setfiltersChange = (text) => {
  return {
    type: "FILTER",
    payload: text,
  };
};

export const setStatusChange = (text) => {
  return {
    type: "STATUS",
    payload: text,
  };
};

export const setPrioriryChange = (data) => {
  return {
    type: "PRIORITY",
    payload: [...data],
  };
};
