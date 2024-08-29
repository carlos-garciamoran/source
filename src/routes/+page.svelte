<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Carlos García Morán</title>
  <meta name="description" content="Software | Design" />
</svelte:head>

<div class="flex flex-1 grow cursor-default flex-col items-center justify-center px-4">
  <div class="flex items-start justify-center gap-4 transition-all duration-300 sm:gap-8 md:gap-10">
    <img
      alt="Me"
      src="/yo.webp"
      class="h-auto w-[4.9rem] rounded-tl-[2rem] shadow-lg transition-all duration-300 ease-in sm:w-[6.5rem] md:w-36"
      width="300"
      height="300"
    />
    <div>
      {#if mounted}
        <div in:fade="{{ duration: 500, delay: 300 }}" class="-mt-1 sm:-mt-1.5 font-thin text-[40px] leading-tight tracking-tighter first-line:leading-none sm:text-[50px] md:text-7xl">
          <p>Hi, my name</p>
          <p class="mt-0.5 sm:mt-2 md:mt-3.5">
            is <span class="font-extrabold tracking-tighter">Carlos</span>
          </p>
        </div>
        <p in:fade="{{ duration: 700, delay: 500 }}" class="mt-3 font-extralight text-sm sm:mt-6 sm:text-base sm:tracking-wide">
          I'm into <span class="font-medium">design</span> &{' '}
          <span class="font-medium">building software</span>
        </p>
      {/if}
    </div>
  </div>
</div>