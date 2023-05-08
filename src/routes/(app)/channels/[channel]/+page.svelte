<script lang="ts">
  import Link from '$components/Link.svelte'
  import Image from '$components/Image.svelte'
  import TagButton from '$components/Card/TagButton.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  const title = decodeURI($page.url.searchParams.get('name') || PUBLIC_APP_NAME)
  export let data
  $: ({ channel } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Channel | {title}</title>
  <meta name="description" content="supabase connection test" />
  <meta name="theme-color" content="#FCA5A5" />
</svelte:head>

<div class="w-full h-64 mb-6 flex relative justify-items-end overflow-hidden">
  <Image
    class="absolute w-full h-full"
    style="background-color: rgb({Math.random() * 200 + 55},{Math.random() * 200 +
      55},{Math.random() * 200 + 55});"
    src="https://drive.google.com/uc?export=view&id={channel.logo_img_uri}"
    alt="logo of {channel.name}"
  />
  <div class="absolute w-full h-full backdrop-blur-2xl" />
  <div class="absolute m-auto bottom-0 top-0 left-0 right-0 w-48 h-48 z-30">
    <Image
      class="overflow-hidden mr-3 mb-4"
      style="background-color: rgb({Math.random() * 200 + 55},{Math.random() * 200 +
        55},{Math.random() * 200 + 55});"
      src="https://drive.google.com/uc?export=view&id={channel.logo_img_uri}"
      alt="logo of {channel.name}"
    />
  </div>
  <div class="hidden sm:block">
    {#if Array.isArray(channel.members)}
      {#each channel.members as { avatar_uri, stage_name }}
        <Image
          class="absolute rounded-full overflow-hidden"
          style="background-color: rgb({Math.random() * 200 + 55},{Math.random() * 200 +
            55},{Math.random() * 200 + 55}); bottom: {Math.random() *
            190}px; right: {Math.random() * 100 + 10}px; width: {Math.random() * 42 +
            24}px; z-index: {Math.floor(Math.random() * 20) + 5}"
          src="https://drive.google.com/uc?export=view&id={avatar_uri}"
          alt="avatar of {stage_name}"
        />
      {/each}
    {/if}
    {#each { length: 20 } as _}
      <div
        class="absolute overflow-hidden"
        style="color: rgb({Math.random() * 200 + 55},{Math.random() * 200 + 55},{Math.random() *
          200 +
          55}); bottom: {Math.random() * 190}px; left: {Math.random() *
          1500}px; font-size: {Math.random() * 2 + 1}rem; z-index: {Math.floor(
          Math.random() * 20
        )}; transform: rotate({Math.random() * 60 + 325}deg);"
      >
        {channel.symbols[Math.floor(Math.random() * channel.symbols.length)]}
      </div>
    {/each}
  </div>
</div>
<h1>{channel.name}</h1>
<div class="channel mb-5">
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
