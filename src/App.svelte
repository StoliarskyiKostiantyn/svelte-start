<script>
  import Header from "./components/header.svelte";
  import TaskInput from "./components/task-input.svelte";
  import { ModeWatcher } from "mode-watcher";
  import TaskList from "./components/task-list.svelte";
</script>

<main>
  <div
    class="flex min-h-screen flex-col items-center justify-start bg-background p-4"
  >
    <ModeWatcher />
    <Header />
    <TaskInput />
    <TaskList />
  </div>
</main>
