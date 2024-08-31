<script lang="ts">
  import { books, films } from '$lib/data'
  import BookSection from '$lib/components/BookSection.svelte'
  import FilmSection from '$lib/components/FilmSection.svelte'
</script>

<svelte:head>
  <title>Inspiration</title>
  <meta name="description" content="Books | Movies" />
</svelte:head>

<div class="flex flex-col p-6 sm:py-10 lg:mx-auto lg:max-w-screen-xl xl:px-0">
  <div class='mb-4 flex min-h-8 border-neutral-700 border-l-2 dark:border-neutral-300'>
    <p class='pl-2 font-thin text-base italic first-line:leading-none dark:border-neutral-300'>
      Some works that have inspired me...
    </p>
  </div>
  <div class='grid grid-cols-1 gap-x-32 gap-y-8 lg:grid-cols-2'>
    <div>
      <h2>Books</h2>
      <div class="flex flex-col gap-y-3">
        <BookSection title="Currently..." items={books.now} />
        <BookSection title="Unfinished..." items={books.unfinished} />
        <BookSection title="Philosophy" items={books.philosophy} />
        <BookSection title="Meditation / Spirituality" items={books.meditation} />
        <BookSection title="Fiction" items={books.fiction} />
        <BookSection title="Startup / Building" items={books.startup} />
        <BookSection title="Engineering" items={books.engineering} />
        <BookSection title="History" items={books.history} />
        <BookSection title="Misc" items={books.misc} />
      </div>
    </div>
    <div>
      <h2>Films</h2>
      <div class="flex flex-col gap-4 sm:w-full sm:flex-row sm:justify-between">
        <FilmSection title="Movies" items={films.movies} />
        <FilmSection title="Shows" items={films.shows} />
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  h2 {
    @apply font-black tracking-tight text-5xl sm:text-6xl md:text-7xl uppercase mb-1 sm:mb-2 lg:mb-4;
  }
</style>