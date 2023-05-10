<script lang="ts">
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import Icon from '@iconify/svelte'
  import Link from './Link.svelte'
  import { authVisible$ } from '$stores/contentStore'
  import { onMount } from 'svelte'
  import type { AuthSession, SupabaseClient } from '@supabase/supabase-js'
  import { goto } from '$app/navigation'
  let visible = false
  export let supabase: SupabaseClient
  export let session: AuthSession | null = null

  let authVisible: boolean
  onMount(() => {
    authVisible$.subscribe(value => {
      authVisible = value
    })
  })
  const toggleVisible = () => {
    visible = !visible
  }
  const toggleAuthVisible = () => {
    authVisible$.set(!authVisible)
  }
</script>

<header>
  <nav class="container px-6 py-8 mx-auto sm:flex justify-between items-center">
    <ul class="{visible ? 'mb-10' : ''} sm:mb-auto">
      <li>
        <Link
          href="/"
          nodefault
          class="text-zinc-100 hover:text-green-300 text-lg font-bold md:text-xl"
        >
          {PUBLIC_APP_NAME}
        </Link>
      </li>
    </ul>
    <!-- <HamburguerBtn on:click={() => (visible = !visible)} /> -->

    <button
      type="button"
      class="fixed top-8 right-5 p-1 sm:hidden"
      on:click={toggleVisible}
      aria-label="Menu"
    >
      <svg
        viewBox="0 0 90 75"
        width="1.25rem"
        height="1.25rem"
        class="hover:fill-green-300 fill-white"
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
          href="/channels"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-green-300 hover:text-green-300 border-t-4 ml-3 {$page
            .url.pathname === '/channels'
            ? 'border-green-300'
            : 'border-transparent'}"
        >
          Channels
        </Link>
      </li>
      <li class="mb-4 sm:mb-auto" on:click={toggleVisible} on:keydown={null}>
        <Link
          href="/members"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-green-300 hover:text-green-300 border-t-4 ml-3 {$page
            .url.pathname === '/members'
            ? 'border-green-300'
            : 'border-transparent'}"
        >
          Members
        </Link>
      </li>
      <li class="mb-4 sm:mb-auto" on:click={toggleVisible} on:keydown={null}>
        <Link
          href="/about"
          nodefault
          class="dark:text-zinc-100 text-zinc-900 dark:hover:text-green-300 hover:text-green-300 border-t-4 ml-3 {$page
            .url.pathname === '/about'
            ? 'border-green-300'
            : 'border-transparent'}"
        >
          About
        </Link>
      </li>
      <li class="mb-4 sm:mb-auto hidden sm:inline"><span class="ml-3">|</span></li>
      <li class="mb-4 sm:mb-auto" on:click={toggleVisible} on:keydown={null}>
        {#if !session}
          <span class="ml-3 text-zinc-300 font-thin"> sign in </span>
          <button
            aria-label="Login"
            class="ml-0.5 p-0.5 border-[1px] border-green-300 hover:bg-green-300 hover:text-zinc-900 rounded-md text-sm"
            on:click={toggleAuthVisible}
            on:keyup={null}
          >
            <Icon icon="mdi:login" height="1.4em" style="display: inline" />
          </button>
        {:else}
          <span class="ml-3 text-zinc-300 font-light">
            {session.user.user_metadata?.display_name || session.user.email}
          </span>
          <button
            aria-label="Logout"
            class="ml-0.5 p-0.5 border-[1px] border-red-300 hover:bg-red-300 hover:text-zinc-900 rounded-md text-sm"
            on:click={toggleAuthVisible}
            on:keyup={null}
          >
            <Icon icon="mdi:logout" height="1.4em" class=" " style="display: inline" />
          </button>
        {/if}
      </li>
    </ul>
  </nav>
</header>

<style lang="postcss">
</style>
