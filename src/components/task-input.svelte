<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { addTodo } from "../stores/todos.svelte";
  let taskName: string = "";
  const handleSubmit = () => {
    if (taskName.trim() !== "") {
      addTodo(taskName);
      taskName = ""; // Clear the input after adding the task
    }
  };
</script>

<form
  class="flex w-full items-center space-x-2 text-6xl justify-center"
  on:submit|preventDefault={handleSubmit}
>
  <Input
    class=" w-7xl h-14"
    type="string"
    placeholder="Input task name"
    bind:value={taskName}
  />
  <Button class="h-14 w-3xs" disabled={false} type="submit">Add task</Button>
</form>
