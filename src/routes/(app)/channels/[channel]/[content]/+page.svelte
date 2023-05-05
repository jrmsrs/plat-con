<script lang="ts">
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import MarkDown from 'svelte-exmarkdown'
  import rehypeRaw from 'rehype-raw'
  const plugins = [{ rehypePlugin: rehypeRaw }]
  const title = decodeURI($page.url.searchParams.get('name') || PUBLIC_APP_NAME)
  export let data
  $: ({ content } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Content | {title}</title>
  <meta name="description" content="supabase connection test" />
  <meta name="theme-color" content="#FCA5A5" />
</svelte:head>

<h1>{content.title}</h1>
<p class="mb-3">{content.description}</p>

{#if Array.isArray(content.content_body)}
  {#each content.content_body as { type, value }}
    <div
      class="mb-3 body bg-zinc-800 p-3 rounded-md text-justify [&>pre]:whitespace-pre-wrap [&>pre]:text-left [&>pre]:border-green-400 [&>pre]:border-l-4 [&>pre]:pl-2 [&>p]:indent-4 [&>*]:mb-2"
    >
      {#if type == 'text'}
        <MarkDown {plugins} md={value} />
      {:else}
        <p>{value}</p>
      {/if}
    </div>
  {/each}
{/if}
