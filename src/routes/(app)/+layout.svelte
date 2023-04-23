<script lang="ts">
  import '$root/app.css'
  import './styles.css'
  import Header from '$components/Header.svelte'
  import { PUBLIC_THEME_HEX } from '$env/static/public'
</script>

<svelte:head>
  <meta name="theme-color" content={PUBLIC_THEME_HEX} />
</svelte:head>

<div class="app dark h-screen scroll-smooth">
  <div class="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 min-h-screen">
    <Header />
    <main class="container mx-auto px-5 my-4">
      <slot />
    </main>
  </div>
</div>
