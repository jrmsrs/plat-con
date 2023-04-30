<script lang="ts">
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import HamburguerBtn from './HamburguerBtn.svelte'
  import Link from './Link.svelte'
  let visible = false
  const toggleVisible = () => {
    visible = !visible
  }
</script>

<header>
  <nav class="container px-6 py-8 mx-auto sm:flex justify-between items-center">
    <ul class="{visible ? 'mb-10' : ''} sm:mb-auto">
      <li>
        <Link
          href="/"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-red-300 hover:text-red-300 text-lg font-bold md:text-xl"
        >
          {PUBLIC_APP_NAME}
        </Link>
      </li>
    </ul>
    <!-- <HamburguerBtn on:click={() => (visible = !visible)} /> -->

    <button type="button" class="fixed top-8 right-5 p-1 sm:hidden" on:click={toggleVisible}>
      <svg
        viewBox="0 0 90 75"
        width="1.25rem"
        height="1.25rem"
        class="hover:fill-red-300 fill-white"
      >
        <rect y="0" width="100" height="15" stroke-linejoin="round" />
        <rect y="30" width="100" height="15" stroke-linejoin="round" />
        <rect y="60" width="100" height="15" stroke-linejoin="round" />
      </svg>
    </button>

    <ul
      class="ease-in-out transition-all duration-200 sm:flex sm:flex-row text-center sm:text-left justify-between sm:visible sm:translate-x-0 {visible
        ? 'translate-y-0 opacity-100 h-36 sm:h-min'
        : '-translate-y-96 sm:translate-y-0 h-0 opacity-0 sm:h-auto sm:opacity-100 '}"
    >
      <li class="mb-4 sm:mb-auto" on:click={toggleVisible} on:keydown={null}>
        <Link
          href="/"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-red-300 hover:text-red-300 border-t-4 ml-3 {$page
            .url.pathname === '/'
            ? 'border-red-300'
            : 'border-transparent'}"
        >
          Home
        </Link>
      </li>
      <li class="mb-4 sm:mb-auto" on:click={toggleVisible} on:keydown={null}>
        <Link
          href="/channels"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-red-300 hover:text-red-300 border-t-4 ml-3 {$page
            .url.pathname === '/channels'
            ? 'border-red-300'
            : 'border-transparent'}"
        >
          Channels
        </Link>
      </li>
      <li class="mb-4 sm:mb-auto" on:click={toggleVisible} on:keydown={null}>
        <Link
          href="/members"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-red-300 hover:text-red-300 border-t-4 ml-3 {$page
            .url.pathname === '/members'
            ? 'border-red-300'
            : 'border-transparent'}"
        >
          Members
        </Link>
      </li>
      <li class="mb-4 sm:mb-auto" on:click={toggleVisible} on:keydown={null}>
        <Link
          href="/about"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-red-300 hover:text-red-300 border-t-4 ml-3 {$page
            .url.pathname === '/about'
            ? 'border-red-300'
            : 'border-transparent'}"
        >
          About
        </Link>
      </li>
    </ul>
  </nav>
</header>

<style lang="postcss">
</style>
