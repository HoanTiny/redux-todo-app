import { createSelector } from "reselect";

export const todoListSelector = (state) => {
  return state.todoList;
};

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const statusPriorirySelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  statusPriorirySelector,
  searchTextSelector,
  (todoList, status, priority, searchText) => {
    const searchLowerCase = searchText.toLowerCase();
    console.log(priority, "priority");
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchLowerCase) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchLowerCase);
      }
      return (
        todo.name.toLowerCase().includes(searchLowerCase) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
