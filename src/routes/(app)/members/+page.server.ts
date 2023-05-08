import type { Database } from '$root/SupabaseTypes.js'
import type { SupabaseClient } from '@supabase/supabase-js'
import { error } from '@sveltejs/kit'

export const _fetchMembers = async (supabase: SupabaseClient<Database>) => {
  const { data: members, error: db_error } = await supabase.from('members').select()
  if (!members) throw error(404, db_error)
  return members
}

export const load = async ({ locals: { supabase } }) => {
  return { streamed: { members: _fetchMembers(supabase) } }
}
