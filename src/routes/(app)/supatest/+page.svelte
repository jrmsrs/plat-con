<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  export let data
  $: ({ users } = data)
</script>

<svelte:head>
  <title>Supabase Test | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

<h1>Supabase Connection Test</h1>
{#each users as { stage_name, avatar_uri }}
  <div class="channel mb-2">
    <h2>{stage_name}</h2>
    <img src={avatar_uri} alt="avatar of {stage_name}" />
  </div>
{/each}
