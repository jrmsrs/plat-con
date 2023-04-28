<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>About | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="about da app" />
</svelte:head>

<h1>About</h1>

<p>This is About page.</p>
