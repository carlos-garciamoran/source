<script lang="ts">
  // import { ExternalLink } from 'lucide-svelte'
  import type { Project } from '$lib/data'

  export let project: Project
  const { name, tags, description, url } = project
  const isExternal = url !== '#'

  $: cardClass = `border group flex animate-mutate-border cursor-default flex-col justify-center rounded-md bg-gradient-to-b bg-transparent from-neutral-200 to-neutral-50 p-6 transition delay-75 duration-200 ease-in-out sm:h-52 sm:p-8 lg:p-10 xl:h-[calc((100dvh-48px-68px-32px-6px)/3)] xl:px-12 2xl:px-14 dark:from-[hsl(0,0%,5%)] dark:to-[hsl(0,0%,3%)] ${getHoverClass(name)}`;

  function getHoverClass(name: string) {
    const hoverClasses = {
      'nativecn-ui': 'hover:to-slate-300 dark:hover:to-slate-700 xl:order-1',
      'swiftcn-ui': 'hover:to-orange-300 dark:hover:to-orange-500 xl:order-2',
      'CoLive': 'hover:to-indigo-300 dark:hover:to-indigo-700 xl:order-3',
      'Hermes': 'hover:to-yellow-300 dark:hover:to-yellow-500 xl:order-4',
      'stealth': 'hover:to-neutral-100 dark:hover:to-neutral-800 xl:order-5',
      'TweetWidget': 'hover:to-sky-300 dark:hover:to-sky-600 xl:order-6',
      'CNCPT': 'hover:to-cyan-300 dark:hover:to-cyan-600 xl:order-7',
      'Delfos': 'hover:to-fuchsia-300 dark:hover:to-fuchsia-600 xl:order-8',
      'Matrix': 'hover:to-emerald-300 dark:hover:to-emerald-600 xl:order-9',
    };
    return hoverClasses[name] || '';
  }
</script>

<a href={url} target={isExternal ? '_blank' : '_self'} rel="noreferrer" class={cardClass}>
  <div class="flex items-start gap-2 sm:gap-3.5">
    <h2 class="font-bold text-2xl decoration-2 underline-offset-4 group-hover:underline sm:text-3xl md:text-4xl">
      {name}
    </h2>
    <!-- {#if isExternal}
        <ExternalLink class="mt-px size-4 stroke-[1.5] transition-all duration-200 sm:size-5" />
    {/if} -->
  </div>
  <div class="mt-3.5 flex gap-x-1">
    {#each tags as tag}
      <div class="flex items-center rounded-full bg-gradient-to-tr from-transparent to-neutral-100 px-2 py-1 text-center font-light font-mono sm:px-3 dark:to-neutral-700">
        <span class="text-xs">{tag}</span>
      </div>
    {/each}
  </div>
  <p class="mt-4 font-light">{description}</p>
</a>