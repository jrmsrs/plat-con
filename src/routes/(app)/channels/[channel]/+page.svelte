<script lang="ts">
  import Link from '$components/Link.svelte'
  import TagButton from '$components/Card/TagButton.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  const title = decodeURI($page.url.searchParams.get('name') || PUBLIC_APP_NAME)
  export let data
  $: ({ channel } = data.streamed)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Channel | {title}</title>
  <meta name="description" content="supabase connection test" />
  <meta name="theme-color" content="#FCA5A5" />
</svelte:head>

{#await channel then channel}
  <h1>{channel.name}</h1>
  <div class="channel mb-2">
    <p>{channel.description}</p>

    <p>
      Hosted by
      {#if Array.isArray(channel.members)}
        {#each channel.members as { stage_name, id }, i}
          {#if i < channel.members.length - 2}
            <Link cls="host" href="/members/{id}?name={encodeURIComponent(stage_name)}"
              >{stage_name}</Link
            >,&nbsp;
          {:else if i == channel.members.length - 2}
            <Link cls="host" href="/members/{id}?name={encodeURIComponent(stage_name)}"
              >{stage_name}</Link
            > and&nbsp;
          {:else}<Link cls="host" href="/members/{id}?name={encodeURIComponent(stage_name)}"
              >{stage_name}</Link
            >
          {/if}
        {/each}
      {/if}
    </p>

    <p>
      tags:
      {#if channel.tags}
        {#each channel.tags as tag}
          <TagButton {tag} />
        {/each}
      {/if}
    </p>
  </div>

  {#if Array.isArray(channel.contents)}
    {#each channel.contents as { title, description, id, channel_id }}
      <div class="content mb-3">
        <h3>
          <Link href="/channels/{channel_id}/{id}?name={encodeURIComponent(title)}">{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    {/each}
  {/if}
{/await}
