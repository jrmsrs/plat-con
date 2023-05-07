<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  onMount(() => {
    goto($page.url.searchParams.get('to') || '/')
  })
</script>

<svelte:head>
  <title>redirecting...</title>
</svelte:head>

<p>....</p>
