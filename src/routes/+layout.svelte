<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores'
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'

  const pages = ['home', 'about', 'projects', 'muses']

  let { children } = $props()
  let pathname = $derived($page.url.pathname)
  let currentPage = $derived(pathname === '/' ? 'home' : pathname.split('/')[1])

  function getPageHref(page: string) {
    return page === 'home' ? '/' : `/${page}`
  }
</script>

<div class="flex h-dvh flex-col sm:h-full sm:min-h-screen" id="root">
  <header>
    <nav class="text-sm">
      <ul class="flex justify-evenly sm:divide-x-[.33px] sm:border-b-[.33px]">
        {#each pages as page}
          <li class="grow transition duration-300 sm:hover:underline">
            <a
              href={getPageHref(page)}
              class="flex justify-center py-3 font-light tracking-wide underline-offset-4 hover:underline sm:hover:no-underline"
              class:underline={page === currentPage}
              class:sm:bg-foreground={page === currentPage}
              class:sm:text-background={page === currentPage}
              class:sm:no-underline={page === currentPage}
            >
              {page}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
  <main class="flex flex-1">
    {@render children()}
  </main>
  <footer class="flex justify-center gap-6 pb-3.5 text-center font-extralight text-xs underline-offset-2 sm:text-sm md:pb-6">
    <a href="https://github.com/carlos-garciamoran" target="_blank" rel="noopener noreferrer" class="underline">GitHub</a>
    <a href="https://x.com/cgarciamoran" target="_blank" rel="noopener noreferrer" class="underline">X</a>
    <a href="https://linkedin.com/in/carlos-garcia-moran" target="_blank" rel="noopener noreferrer" class="underline">LinkedIn</a>
    <div class="fixed right-[7px] bottom-2.5 sm:right-4 sm:bottom-4">
      <ThemeToggle />
    </div>
  </footer>
</div>