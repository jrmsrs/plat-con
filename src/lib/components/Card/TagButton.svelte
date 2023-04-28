<script lang="ts">
  import Link from '$components/Link.svelte'
  export let tag: string
</script>

<Link
  style="z-index: 20"
  shadow
  nodefault
  href="/tags/{tag}"
  cls="pointer-events-auto mr-1 px-1 rounded-md bg-zinc-900 tag"
  >{tag}
</Link>
