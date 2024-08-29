<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores'
  import { base } from '$app/paths'

  const pages = ['home', 'about', 'projects', 'muses'];

  let pathname = $derived($page.url.pathname)
  let currentPage = $derived(pathname === '/' ? 'home' : pathname.split('/')[1])
  let { children } = $props()

  function getPageHref(page: string) {
    return page === 'home' ? base || '/' : `${base}/${page}`;
  }

  $effect(() => {
    console.log('Current page:', currentPage);
  });
</script>

<div class="flex min-h-screen flex-col">
  <header>
    <nav class="text-sm">
      <ul class="flex justify-evenly sm:divide-x-[.33px] sm:border-b-[.33px]">
        {#each pages as page}
          <li class="grow transition duration-300 sm:hover:underline">
            <a
              href={getPageHref(page)}
              class="flex justify-center underline-offset-4 py-3 font-light tracking-wide hover:underline sm:hover:no-underline"
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
    <div class="fixed right-[7px] bottom-2.5 lg:right-6 lg:bottom-4">
      <!-- Placeholder for theme toggle. You'll need to implement this separately -->
      <button>T</button>
    </div>
  </footer>
</div>