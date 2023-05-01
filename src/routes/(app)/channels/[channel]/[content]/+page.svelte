<script lang="ts">
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  const title = decodeURI($page.url.searchParams.get('name') || PUBLIC_APP_NAME)
  export let data
  $: ({ content } = data.streamed)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Content | {title}</title>
  <meta name="description" content="supabase connection test" />
  <meta name="theme-color" content="#FCA5A5" />
</svelte:head>

{#await content then content}
  <h1>{content.title}</h1>
  <p>{content.description}</p>

  {#if Array.isArray(content.content_body)}
    {#each content.content_body as { type, value }}
      <div class="mb-3 body">
        <p>{type}</p>
        <p>{value}</p>
      </div>
    {/each}
  {/if}
{/await}
