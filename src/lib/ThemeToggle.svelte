<script>
    import { onMount } from 'svelte'

  let isDarkMode = $state(false)

  function toggleTheme() {
    isDarkMode = !isDarkMode
    updateColorScheme()
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }

  function updateColorScheme() {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }

  // Initialize theme based on user's preference
  onMount(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    isDarkMode = storedTheme === 'dark' || (storedTheme === null && prefersDark);
    updateColorScheme()
  });
</script>

<button onclick={toggleTheme} aria-label="Toggle theme">
  {#if isDarkMode}
    <img src="/svg/sun.svg" alt="Light mode" class="size-4 sun-icon" />
  {:else}
    <img src="/svg/moon.svg" alt="Dark mode" class="size-4 moon-icon" />
  {/if}
</button>

<style lang="postcss">
  :global(html) {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .sun-icon {
    filter: invert(70%) sepia(74%) saturate(1115%) hue-rotate(359deg) brightness(105%) contrast(102%);
  }

  .moon-icon {
    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(176deg) brightness(90%) contrast(88%);
  }
</style>