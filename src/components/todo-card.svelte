<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import { removeTodo, toggleTodo } from "../stores/todos.svelte";
  export let toDo;
</script>

<div
  class="mb-4"
  in:fly={{ y: 40, duration: 300 }}
  out:fade={{ duration: 200 }}
>
  <Card.Root
    class="w-5xl flex flex-row items-center justify-start gap-4 p-4 bg-card shadow-md rounded-lg"
  >
    <Checkbox
      class=""
      checked={toDo.completed}
      onCheckedChange={() => toggleTodo(toDo.id)}
    />
    <Card.Header class="w-1/2 mr-auto">
      <Card.Title class="">
        <span class="strike-anim" class:completed={toDo.completed}>
          {toDo.text}
        </span>
      </Card.Title>
    </Card.Header>
    <Card.Footer class="flex-col gap-2">
      <Button
        disabled={false}
        type="button"
        class="w-full"
        onclick={() => removeTodo(toDo.id)}>Delete TODO</Button
      >
    </Card.Footer>
  </Card.Root>
</div>
