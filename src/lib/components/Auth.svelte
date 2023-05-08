<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { authVisible$ } from '$stores/contentStore'
  import type { SupabaseClient } from '@supabase/supabase-js'

  export let supabase: SupabaseClient
  export let view = 'login'
  let password = ''
  let confirmPassword = ''
  let errorMsg = ''
  let successMsg = ''
  const setView = (v: string) => {
    view = v
  }
  const handleSubmit = async (e: SubmitEvent) => {
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      view: formData.get('view') as string,
      fullname: (formData.get('name') as string) || '',
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }

    let connection
    switch (view) {
      case 'login':
        connection = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password
        })
        break
      case 'signup':
        connection = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: { data: { full_name: data.fullname, display_name: data.fullname.split(' ')[0] } }
        })
        break
      case 'send':
        connection = await supabase.auth.resetPasswordForEmail(data.email)
        break
      default:
        connection = await supabase.auth.signOut()
        break
    }

    if (connection?.error) {
      errorMsg = connection.error.message
      successMsg = ''
    } else {
      if (view != 'send') {
        await goto(`/redirect?to=${$page.url.pathname}`)
        authVisible$.set(!authVisible$)
      } else {
        errorMsg = ''
        successMsg = 'Email sent'
      }
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  {#if view != 'logout'}
    {#if view == 'signup'}
      <fieldset>
        <label for="name">Full Name</label>
        <input type="text" name="name" id="name" required />
      </fieldset>
    {/if}
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
        <button
          type="button"
          class="text-green-500 hover:text-green-300"
          on:click={() => setView('login')}
        >
          Login
        </button>
      {/if}
      {#if view != 'signup'}
        <button
          type="button"
          class="text-green-500 hover:text-green-300"
          on:click={() => setView('signup')}
        >
          Sign Up
        </button>
      {/if}
      {#if view != 'send'}
        <button
          type="button"
          class="text-green-500 hover:text-green-300"
          on:click={() => setView('send')}
        >
          Forgot password?
        </button>
      {/if}
    </div>
  {:else}
    <p class="mb-6">Are you sure you want to log out?</p>
  {/if}

  <input name="view" id="view" bind:value={view} hidden required />
  {#if view != 'logout'}
    <button
      class="confirm"
      type="submit"
      disabled={view == 'signup' && password != confirmPassword}
    >
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
  {:else}
    <button class="confirm !border-red-300 hover:!bg-red-300 hover:!text-zinc-900" type="submit">
      Log out
    </button>
  {/if}
  <p class="mt-2 text-green-300">{successMsg}</p>
  <p class="mt-2 text-red-300">{errorMsg}</p>
</form>
