<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import CardContainer from '$components/Card/CardContainer.svelte'
  import Card from '$components/Card/Card.svelte'
  import TagButton from '$components/Card/TagButton.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export let data
  $: ({ channels } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Channels | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

<h1>Channels</h1>
<CardContainer>
  {#each channels as { name, description, tags, id, members }}
    <Card href="/channels/{id}" {id}>
      <div>
        <img
          src="https://ui-avatars.com/api/?size=512&background=random&name={name}&uppercase=false"
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
