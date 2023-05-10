<script lang="ts">
  import { PUBLIC_APP_NAME, PUBLIC_SUPABASE_URI } from '$env/static/public'
  import CardContainer from '$components/Card/CardContainer.svelte'
  import Card from '$components/Card/Card.svelte'
  import Image from '$components/Image.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export let data
  $: ({ members } = data.streamed)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Members | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

<h1>Members</h1>
<CardContainer>
  {#await members}
    {#each { length: 5 } as _, i}
      <Card id={i.toString()} pulse>
        <div class="bg-zinc-700 animate-pulse" style="width: 100%;height: 0;padding-top: 100%;" />
        <h2>------ -- ------</h2>
      </Card>
    {/each}
  {:then members}
    {#each members as { stage_name, id, description }}
      <Card href="/members/{id}?name={encodeURIComponent(stage_name)}" {id}>
        <Image
          class="w-full rounded-md overflow-hidden"
          style="background-color: rgb({Math.random() * 200 + 55},{Math.random() * 200 +
            55},{Math.random() * 200 + 55});"
          src="{PUBLIC_SUPABASE_URI}/storage/v1/object/public/avatar/{id}.png"
          alt="avatar of {stage_name}"
        />
        <h2>{stage_name}</h2>
        <p>{description}</p>
      </Card>
    {/each}
  {:catch}
    <p>Error. Perhaps you don't have access to this page or our server is under maintance.</p>
  {/await}
</CardContainer>
