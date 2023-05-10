<script lang="ts">
  import TagButton from '$components/Card/TagButton.svelte'
  import CardContainer from '$components/Card/CardContainer.svelte'
  import Card from '$components/Card/Card.svelte'
  import Image from '$components/Image.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME, PUBLIC_SUPABASE_URI } from '$env/static/public'
  const title = decodeURI($page.url.searchParams.get('name') || PUBLIC_APP_NAME)
  export let data
  $: ({ member } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Member | {title}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

{#if member}
  <div class="flex">
    <div>
      <Image
        class="w-24 rounded-full overflow-hidden mr-3 mb-4"
        style="background-color: rgb({Math.random() * 200 + 55},{Math.random() * 200 +
          55},{Math.random() * 200 + 55});"
        src="{PUBLIC_SUPABASE_URI}/storage/v1/object/public/avatar/{member.id}.png"
        alt="avatar of {member.stage_name}"
      />
    </div>
    <div>
      <h1>{member.stage_name}</h1>
      <p class="mb-4">{member.description}</p>
    </div>
  </div>
{/if}
<h2>Member of</h2>
<CardContainer>
  {#if Array.isArray(member.channels)}
    {#each member.channels as { name, description, tags, id }}
      <Card href="/channels/{id}?name={encodeURIComponent(name)}" {id}>
        <div>
          <Image
            class="w-full rounded-md overflow-hidden"
            src="{PUBLIC_SUPABASE_URI}/storage/v1/object/public/channel-logo/{id}.png"
            alt="logo of {name}"
          />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div class="mt-2">
          {#if tags}
            {#each tags as tag}
              <TagButton {tag} />
            {/each}
          {/if}
        </div>
      </Card>
    {/each}
  {/if}
</CardContainer>
