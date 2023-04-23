<script lang="ts">
  import { page } from '$app/stores'
  import { PUBLIC_APP_NAME } from '$env/static/public'
  import Link from './Link.svelte'
</script>

<header>
  <nav class="container px-6 py-8 mx-auto flex justify-between items-center">
    <ul>
      <li>
        <Link
          href="/"
          nodefault
          class="dark:text-gray-100 text-gray-900 dark:hover:text-red-300 hover:text-red-300 text-lg font-bold md:text-xl"
        >
          {PUBLIC_APP_NAME}</Link
        >
      </li>
    </ul>
    <ul class="flex flex-row">
      <li>
        <Link
          href="/"
          nodefault
          class="dark:text-gray-100 text-gray-900 dark:hover:text-red-300 hover:text-red-300 border-t-4 ml-3 {$page
            .url.pathname === '/'
            ? 'border-red-300'
            : 'border-transparent'}"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          nodefault
          class="dark:text-gray-100 text-gray-900 dark:hover:text-red-300 hover:text-red-300 border-t-4 ml-3 {$page
            .url.pathname === '/about'
            ? 'border-red-300'
            : 'border-transparent'}"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/supatest"
          nodefault
          class="dark:text-gray-100 text-gray-900 dark:hover:text-red-300 hover:text-red-300 border-t-4 ml-3 {$page
            .url.pathname === '/supatest'
            ? 'border-red-300'
            : 'border-transparent'}"
        >
          Test
        </Link>
      </li>
    </ul>
  </nav>
</header>
