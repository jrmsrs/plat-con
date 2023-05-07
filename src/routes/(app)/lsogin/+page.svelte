<script lang="ts">
  import Link from '$components/Link.svelte'

  let view = 'login'
  let password = ''
  let confirmPassword = ''
  const setView = (v: string) => {
    view = v
  }
</script>

<h1>
  {#if view == 'login'}
    Login
  {/if}
  {#if view == 'signup'}
    Sign Up
  {/if}
  {#if view == 'send'}
    Reset Password
  {/if}
</h1>

<form method="post">
  <fieldset>
    <label for="email">E-Mail</label>
    <input type="email" name="email" id="email" required />
  </fieldset>
  {#if view != 'send'}
    <fieldset>
      <label for="password">Password</label>
      <input type="password" bind:value={password} name="password" id="password" required />
    </fieldset>
  {/if}
  {#if view == 'signup'}
    <fieldset>
      <label for="confirm">Confirm Password</label>
      <input type="password" bind:value={confirmPassword} name="confirm" id="confirm" required />
    </fieldset>
  {/if}

  <div class="mb-6 flex justify-between">
    {#if view != 'login'}
      <button type="button" class="hover:text-red-300" on:click={() => setView('login')}>
        Login
      </button>
    {/if}
    {#if view != 'signup'}
      <button type="button" class="hover:text-red-300" on:click={() => setView('signup')}>
        Sign Up
      </button>
    {/if}
    {#if view != 'send'}
      <button type="button" class="hover:text-red-300" on:click={() => setView('send')}>
        Forgot password?
      </button>
    {/if}
  </div>

  <input name="view" id="view" bind:value={view} hidden required />
  <button class="confirm" type="submit" disabled={view == 'signup' && password != confirmPassword}>
    {#if view == 'login'}
      Login
    {/if}
    {#if view == 'signup'}
      Sign Up
    {/if}
    {#if view == 'send'}
      Reset Password
    {/if}
  </button>
</form>
