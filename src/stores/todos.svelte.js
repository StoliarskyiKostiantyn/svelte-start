import { writable } from "svelte/store";


export const todos = writable([
  { id: 1, text: "Learn Svelte", completed: false },
  { id: 2, text: "Build a Svelte app", completed: false }
]);

export function addTodo(todoName) {
  todos.update((currentTodos) => [...currentTodos, { id: Date.now(), text: todoName, completed: false }]);
  console.log(`Added todo: ${todoName}`);
  todos.subscribe((value) => {
    console.log(`Current todos: ${JSON.stringify(value)}`);
  });
}

export function removeTodo(id) {
  todos.update((currentTodos) =>
    currentTodos.filter((todo) => todo.id !== id)
  );
  todos.subscribe((value) => {
    console.log(`Current todos: ${JSON.stringify(value)}`);
  });
}

export function toggleTodo(id) {
  todos.update((currentTodos) =>
    currentTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
  todos.subscribe((value) => {
    console.log(`Current todos: ${JSON.stringify(value)}`);
  });
}