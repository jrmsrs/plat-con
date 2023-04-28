<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export let data
  $: ({ content } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Channels | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

{#if content}
  <h1>{content.title}</h1>
  <p>{content.description}</p>
{/if}
{#if Array.isArray(content.content_body)}
  {#each content.content_body as { type, value }}
    <div class="mb-3 body">
      <p>{type}</p>
      <p>{value}</p>
    </div>
  {/each}
{/if}
