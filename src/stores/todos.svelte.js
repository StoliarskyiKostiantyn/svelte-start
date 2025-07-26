export const todos = $state([
  { id: 1, text: "Learn Svelte", completed: false },
  { id: 2, text: "Build a Svelte app", completed: false }
]);

export function addTodo(todoName) {
  const newTodo = {
    id: Date.now(), // Unique ID based on current timestamp
    text: todoName,
    completed: false
  };
  console.log(`Added new todo: ${JSON.stringify(newTodo)}`);

  return todos.push(newTodo);
}

export function removeTodo(id) {
  console.log(`Removed todo with id: ${id}`);
  return todos.forEach((todo, index) => {
    if (todo.id === id) {
      todos.splice(index, 1);
    }
  });
}

export function toggleTodo(id) {
  console.log(`Toggled todo with id: ${id}`);
  return todos.forEach((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
  });
}