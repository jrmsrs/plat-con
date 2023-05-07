import type { SupabaseClient } from '@supabase/supabase-js'
import { error } from '@sveltejs/kit'

export const _fetchContent = async (supabase: SupabaseClient, content_id: string) => {
  const { data: content, error: db_error } = await supabase
    .from('contents')
    .select('*, content_body(*)')
    .eq('id', content_id)
  if (!content) throw error(404, db_error)

  if (content.length < 1) throw error(404, { message: 'not found' })
  return content[0]
}

export const load = async ({ params, locals: { supabase } }) => {
  const id = params.content

  return { content: _fetchContent(supabase, id) }
}
