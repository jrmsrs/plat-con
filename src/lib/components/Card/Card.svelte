<script lang="ts">
  import Link from '$components/Link.svelte'
  export let href: string | null = null
  export let id: string
  export let mini = false
  export let pulse = false
</script>

{#if !mini}
  <div
    class="card bg-zinc-800 mb-2 col max-w-full relative rounded-xl {pulse
      ? 'animate-pulse  opacity-0'
      : ''}"
  >
    {#if href}
      <Link nodefault {href} cls="absolute left-0 top-0 hover bottom-0 right-0 rounded-xl" {id} />
    {/if}
    <div class="p-3 relative pointer-events-none z-10">
      <slot />
    </div>
  </div>
{/if}
