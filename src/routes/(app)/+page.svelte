<script lang="ts">
  import '$root/app.css'
  import './styles.css'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import { loading$ } from '$stores/contentStore'
  import { afterUpdate } from 'svelte'
  afterUpdate(() => loading$.set(false))
</script>

<svelte:head>
  <title>Home | {PUBLIC_APP_NAME}</title>
  <meta name="description" content="da app" />
</svelte:head>

<section>
  <h1>Hello world</h1>

  <p>This is Home page.</p>
</section>

<style lang="postcss">
  :root {
    --link-color: rgba(255, 62, 62, 0.5);
    --blur: 1.5px;
  }
</style>
