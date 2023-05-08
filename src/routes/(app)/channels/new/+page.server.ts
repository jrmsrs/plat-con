import { error, redirect } from '@sveltejs/kit'

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const { error: db_error } = await supabase.from('channels').insert({
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      logo_img_uri: formData.get('logo') as string,
      cover_img_uri: formData.get('cover') as string
    })
    if (db_error) throw error(404, db_error)
  }
}

export const load = async ({ locals: { getSession } }) => {
  if (!(await getSession())) throw redirect(300, '/')

  return {}
}
