<script>
  import { todos } from "../stores/todos.svelte.js";
  import TodoCard from "./todo-card.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  let len = $derived(todos.length);
  let currentFilter = $state("all");
  let filteredTodos = $derived.by(() => {
    if (currentFilter === "done") {
      return todos.filter((todo) => todo.completed);
    } else if (currentFilter === "todo") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  });
  $inspect("TaskList", { len, currentFilter, filteredTodos });
</script>

<div
  class="flex flex-col items-center justify-center w-full max-w-7xl mx-auto p-4"
>
  <h1 class="text-4xl font-bold mb-6">Task List</h1>
  <p class="text-lg mb-4">You have {len} tasks.</p>
  <div class="flex w-full max-w-5xl items-center justify-end mb-4 gap-4">
    <Button
      disabled={false}
      type="button"
      class=" w-20"
      onclick={() => {
        currentFilter = "all";
      }}>All</Button
    >
    <Button
      disabled={false}
      type="button"
      class="w-20"
      onclick={() => {
        currentFilter = "done";
      }}>Done</Button
    >
    <Button
      disabled={false}
      type="button"
      class="w-20"
      onclick={() => {
        currentFilter = "todo";
      }}>ToDo</Button
    >
  </div>
  {#if len > 0}
    <ul class="list-disc pl-5">
      {#each filteredTodos as todo}
        <TodoCard {todo} />
      {/each}
    </ul>
  {:else}
    <p class="text-lg">No tasks available. Please add a task.</p>
  {/if}
</div>
