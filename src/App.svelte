<script>
  import Router from "svelte-spa-router";
  import Header from "./components/header.svelte";
  import { ModeWatcher } from "mode-watcher";
  import TaskManager from "./components/task-manager.svelte";
  import GiftCard from "./components/gift-card.svelte";
  import Home from "./components/home.svelte";
</script>

<main>
  <div
    class="flex min-h-screen flex-col items-center justify-start bg-background p-4"
  >
    <ModeWatcher />
    <Header />
    <Router
      routes={{
        "/": Home,
        "/task-manager": TaskManager,
        "/gift-card": GiftCard,
      }}
    />
  </div>
</main>
