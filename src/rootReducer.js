const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload.todo] };

    case "DELETE_TODO":
      const tempTodo = state.todos.filter(todo => todo.id !== action.payload.id);
      return { ...state, todos: tempTodo };

    default:
      return state;
  }
}

export default rootReducer;