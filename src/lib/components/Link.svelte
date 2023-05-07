<script lang="ts">
  import { page } from '$app/stores'
  import { loading$ } from '$lib/stores/contentStore'

  const gotoNewTab = (url: string) => window.open(url, '_blank')

  export let href = ''
  export let cls = ''
  export let blank = false
  export let nodefault = false
  export let shadow = false

  const triggerLoading = () => {
    const pageIsFirstLibrary = $page.url.pathname === '/library/1' && href === '/library'
    const pageIsNotHref = $page?.url.pathname !== href
    if (!pageIsFirstLibrary && pageIsNotHref) loading$.set(true)
  }
</script>

<!-- cls: component class attribute preppend, nodefault: if true will not consider default class attribute -->
<a
  draggable="false"
  {href}
  class={cls +
    ' ' +
    (nodefault ? '' : 'text-green-500 hover:text-green-300') +
    (shadow ? 'shadow' : '')}
  on:auxclick={() => gotoNewTab(href)}
  target={blank ? '_blank' : null}
  rel={blank ? 'noreferrer' : null}
  on:click={() => triggerLoading()}
  {...$$restProps}
>
  <slot />
</a>

<style lang="postcss">
  .shadow {
    border-width: 4px;
    border-color: transparent;
    border-radius: 0.375rem;
  }
  .shadow:hover {
    border-color: var(--link-color);
  }
  .hover:hover {
    border-width: 4px;
    border-color: var(--link-color);
  }
</style>
