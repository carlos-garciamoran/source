<script lang="ts">
  import type { Book } from '$lib/data'

  export let title: string
  export let items: Book[]
</script>

<div>
  <h3 class="section-title">{title}</h3>
  <ul class='ml-0.5 list-inside list-disc space-y-0.5 font-cormorant text-[.9rem]'>
    {#each items as item}
      <li class="font-light">
        <span>{item.title}</span>, <span>{item.author}</span>
      </li>
    {/each}
  </ul>
</div>