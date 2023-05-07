<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { authVisible$ } from '$stores/contentStore'
  import type { SupabaseClient } from '@supabase/supabase-js'

  export let supabase: SupabaseClient
  let view = 'login'
  let password = ''
  let confirmPassword = ''
  let errorMsg = ''
  const setView = (v: string) => {
    view = v
  }
  const handleSubmit = async (e: SubmitEvent) => {
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      view: formData.get('view') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }

    const login = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    })
    if (login.error) {
      errorMsg = login.error.message
    } else {
      await goto(`/redirect?to=${$page.url.pathname}`)
      authVisible$.set(!authVisible$)
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} action="/login">
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
      <button type="button" class="hover:text-green-300" on:click={() => setView('login')}>
        Login
      </button>
    {/if}
    {#if view != 'signup'}
      <button type="button" class="hover:text-green-300" on:click={() => setView('signup')}>
        Sign Up
      </button>
    {/if}
    {#if view != 'send'}
      <button type="button" class="hover:text-green-300" on:click={() => setView('send')}>
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

  <p class="mt-2 text-red-300">{errorMsg}</p>
</form>
