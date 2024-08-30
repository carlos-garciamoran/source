<script lang="ts">
  import { projects } from '$lib/data'
  import ProjectCard from '$lib/components/ProjectCard.svelte'
</script>

<svelte:head>
  <title>Projects</title>
  <meta name="description" content="Software | Design" />
</svelte:head>

<div id="projects" class="size-full p-3.5">
  <div class="grid flex-1 grid-cols-1 justify-center gap-2 transition-all duration-200 md:grid-cols-2 xl:grid-cols-3 xl:gap-1.5">
    {#each projects as project (project.name)}
      <ProjectCard {project} />
    {/each}
  </div>
</div>