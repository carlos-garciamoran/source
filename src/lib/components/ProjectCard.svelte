<script lang="ts">
  import type { Project } from '$lib/data'

  export let project: Project
  const { name, tags, description, url } = project
  const isExternal = url !== '#'

  const projectClasses: Record<string, string> = {
    'nativecn-ui': 'hover:to-slate-300 dark:hover:to-slate-700 xl:order-1',
    'swiftcn-ui': 'hover:to-orange-300 dark:hover:to-orange-500 xl:order-2',
    'CoLive': 'hover:to-indigo-300 dark:hover:to-indigo-700 xl:order-3',
    'Hermes': 'hover:to-yellow-300 dark:hover:to-yellow-500 xl:order-4',
    'stealth': 'hover:to-neutral-100 dark:hover:to-neutral-800 xl:order-5',
    'TweetWidget': 'hover:to-sky-300 dark:hover:to-sky-600 xl:order-6',
    'CNCPT': 'hover:to-cyan-300 dark:hover:to-cyan-600 xl:order-7',
    'Delfos': 'hover:to-fuchsia-300 dark:hover:to-fuchsia-600 xl:order-8',
    'Matrix': 'hover:to-emerald-300 dark:hover:to-emerald-600 xl:order-9',
  }
</script>

<a
  href={url}
  target={isExternal ? '_blank' : '_self'}
  rel="noreferrer"
  class="border group flex animate-mutate-border cursor-default flex-col justify-center rounded-md bg-gradient-to-b bg-transparent from-neutral-200 to-neutral-50 p-6 transition delay-75 duration-200 ease-in-out sm:h-52 sm:p-8 lg:p-10 xl:h-[calc((100dvh-48px-68px-32px-6px)/3)] xl:px-12 2xl:px-14 dark:from-[hsl(0,0%,5%)] dark:to-[hsl(0,0%,3%)] {projectClasses[name] || ''}"
>
  <div class="flex items-start gap-2 sm:gap-3.5">
    <h2 class="font-bold text-2xl decoration-2 underline-offset-4 group-hover:underline sm:text-3xl md:text-4xl">
      {name}
    </h2>
    {#if isExternal}
      <svg class="mt-px size-4 stroke-[1.5] transition-all duration-200 sm:size-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    {/if}
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