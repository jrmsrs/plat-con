import { error, json } from '@sveltejs/kit'

import type { AuthError, AuthResponse } from '@supabase/supabase-js'

export async function POST({ request, cookies }) {
  const data = await request.json()
  console.log(data)
  let connection: AuthResponse | { error: null | AuthError }
  switch (data.view) {
    case 'login':
      connection = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      })
      break
    case 'signup':
      connection = await supabase.auth.signUp({
        email: data.email,
        password: data.password
      })
      break
    case 'send':
      connection = await supabase.auth.resetPasswordForEmail(data.email)
      break
    default:
      throw error(404, { message: 'invalid option' })
  }
  console.log(await supabase.auth.getSession())
  if (connection.error) throw error(400, { message: connection.error.message })

  // throw redirect(303, '/')

  return json({ message: 'logged' }, { status: 200 })
}
