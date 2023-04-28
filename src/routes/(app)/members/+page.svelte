<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import Link from '$components/Link.svelte'
  import CardContainer from '$components/Card/CardContainer.svelte'
  import Card from '$components/Card/Card.svelte'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export let data
  $: ({ members } = data)
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Members | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

<h1>Members</h1>
<CardContainer>
  {#each members as { stage_name, id }}
    <Card href="/members/{id}" {id}>
      <img
        src="https://ui-avatars.com/api/?background=random&name={stage_name}&rounded=true&uppercase=false"
        alt="avatar of {stage_name}"
      />
      <h2>{stage_name}</h2>
    </Card>
  {/each}
</CardContainer>
