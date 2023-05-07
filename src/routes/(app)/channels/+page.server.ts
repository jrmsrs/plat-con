import type { SupabaseClient } from '@supabase/supabase-js'
import { error } from '@sveltejs/kit'

export const _fetchChannels = async (supabase: SupabaseClient) => {
  const { data: channels, error: db_error } = await supabase
    .from('channels')
    .select('*, members(stage_name)')
  if (!channels) throw error(404, db_error)
  return channels
}

export const load = async ({ locals: { supabase } }) => {
  return { streamed: { channels: _fetchChannels(supabase) } }
}
