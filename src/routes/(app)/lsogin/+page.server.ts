// import { redirect } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    let connection
    switch (formData.get('view')) {
      case 'login':
        connection = await supabase.auth.signInWithPassword({
          email: formData.get('email') as string,
          password: formData.get('password') as string
        })
        break
      case 'signup':
        connection = await supabase.auth.signUp({
          email: formData.get('email') as string,
          password: formData.get('password') as string
        })
        break
      case 'send':
        connection = await supabase.auth.resetPasswordForEmail(formData.get('email') as string)
        break
      default:
        throw error(404, { message: 'invalid option' })
    }
    if (connection.error) throw error(400, { message: connection.error.message })

    // throw redirect(303, '/')
  }
}

// export const load = async ({ url, locals: { getSession } }) => {
//   const session = await getSession()

//   // if the user is already logged in return them to the account page
//   if (session) {
//     throw redirect(303, '/')
//   }

//   return { url: url.origin }
// }
