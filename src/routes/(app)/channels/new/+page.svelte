<script lang="ts">
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  export const data = {}

  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>New Content Channel | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="supabase connection test" />
</svelte:head>

<h1>New Content Chanel</h1>

<form method="post">
  <fieldset>
    <label for="name">Name</label>
    <input type="text" name="name" id="description" required />
  </fieldset>
  <fieldset>
    <label for="description">Description</label>
    <textarea class="align-top" name="description" id="description" rows="5" required />
  </fieldset>
  <fieldset>
    <label for="logo">Logo (512x512)</label>
    <input type="file" name="logo" id="logo" />
  </fieldset>
  <fieldset>
    <label for="cover">Cover (1920x1920)</label>
    <input type="file" name="cover" id="cover" />
  </fieldset>
  <button type="submit">sss</button>
</form>

<style lang="postcss">
</style>
