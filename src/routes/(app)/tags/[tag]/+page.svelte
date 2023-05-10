<script lang="ts">
  import { PUBLIC_APP_NAME, PUBLIC_SUPABASE_URI } from '$env/static/public'
  import CardContainer from '$components/Card/CardContainer.svelte'
  import Card from '$components/Card/Card.svelte'
  import TagButton from '$components/Card/TagButton.svelte'
  import Image from '$components/Image.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export let data
  $: ({ channels, tag } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Channels with {tag} tag | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

<h1 class="font-extralight">Channels with <strong class="font-extrabold">{tag}</strong> tag</h1>
<CardContainer>
  {#each channels as { name, description, tags, id, members }}
    <Card href="/channels/{id}?name={encodeURIComponent(name)}" {id}>
      <div>
        <Image
          class="w-full rounded-md overflow-hidden"
          src="{PUBLIC_SUPABASE_URI}/storage/v1/object/public/channel-logo/{id}.png"
          alt="logo of {name}"
        />
        <h2>{name}</h2>
        <p>
          Hosted by
          {#if Array.isArray(members)}
            {#each members as { stage_name }, i}
              {#if i < members.length - 2}
                {stage_name},&nbsp;
              {:else if i == members.length - 2}
                {stage_name} and&nbsp;
              {:else}{stage_name}
              {/if}
            {/each}
          {/if}
        </p>
        <p>{description}.</p>
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
</CardContainer>
