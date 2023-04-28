<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import Link from '$components/Link.svelte'
  import TagButton from '$components/Card/TagButton.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export let data
  $: ({ channel } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Channels | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

{#if channel.members}
  <h1>{channel.name}</h1>
  <div class="channel mb-2">
    <p>{channel.description}</p>

    <p>
      Hosted by
      {#if Array.isArray(channel.members)}
        {#each channel.members as { stage_name, id }, i}
          {#if i < channel.members.length - 2}
            <Link cls="host" href="/members/{id}">{stage_name}</Link>,&nbsp;
          {:else if i == channel.members.length - 2}
            <Link cls="host" href="/members/{id}">{stage_name}</Link> and&nbsp;
          {:else}<Link cls="host" href="/members/{id}">{stage_name}</Link>
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
{/if}

{#if Array.isArray(channel.contents)}
  {#each channel.contents as { title, description, id, channel_id }}
    <div class="content mb-3">
      <h3><Link href="/channels/{channel_id}/{id}">{title}</Link></h3>
      <p>{description}</p>
    </div>
  {/each}
{/if}
