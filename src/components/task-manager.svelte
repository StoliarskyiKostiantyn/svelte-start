<script>
  import TaskInput from "./task-input.svelte";

  import TaskList from "./task-list.svelte";
  function goHome() {
    location.href = "/";
  }
</script>

<div>
  <div
    class="flex min-h-screen flex-col items-center justify-start bg-background p-4"
  >
    <TaskInput />
    <TaskList />
    <button on:click={goHome}>Go home</button>
  </div>
</div>
