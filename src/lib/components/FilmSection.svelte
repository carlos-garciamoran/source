<script lang="ts">
  export let title: string
  export let items: string[]
</script>

<div>
  <h3 class="section-title">{title}</h3>
  <ul class='ml-0.5 list-inside list-[square] font-cormorant font-light text-sm'>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>