<script lang="ts">
  import '$root/app.css'
  import './styles.css'
  import Header from '$components/Header.svelte'
  import { PUBLIC_THEME_HEX } from '$env/static/public'
  import FloatingSpin from '$components/FloatingSpin.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { loading$, authVisible$ } from '$stores/contentStore'
  import Auth from '$components/Auth.svelte'
  import { invalidate } from '$app/navigation'
  import type { LayoutData } from './$types'

  export let data: LayoutData
  $: ({ supabase, session } = data)
  let loadingSubscription: any
  let loading: boolean
  let authVisibleSubscription: any
  let authVisible: boolean

  const registerLocal = () => {
    loadingSubscription = loading$.subscribe(value => {
      loading = value
    })
    authVisible$.subscribe(value => {
      authVisible = value
    })
  }
  const toggleAuthVisible = () => {
    authVisible$.set(!authVisible)
  }
  onMount(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })
    registerLocal()
    return () => subscription.unsubscribe()
  })
  onDestroy(() => {
    loadingSubscription?.unsubscribe()
  })
</script>

<svelte:head>
  <meta name="theme-color" content={PUBLIC_THEME_HEX} />
</svelte:head>

<div class="app dark h-screen scroll-smooth">
  <FloatingSpin {loading} />

  <div class="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 min-h-screen">
    <Header {session} {supabase} />
    <main class="container mx-auto px-5 my-4 pb-9">
      <slot />
    </main>
  </div>
  <div
    class="fixed top-0 left-0 h-screen w-screen {authVisible
      ? 'grid'
      : 'hidden'} content-center backdrop-blur-lg z-50"
    on:click={toggleAuthVisible}
    on:keyup={null}
  >
    <div class="bg-zinc-900 text-white w-96 p-16 m-auto" on:click|stopPropagation on:keyup={null}>
      <Auth {supabase} />
    </div>
  </div>
</div>
