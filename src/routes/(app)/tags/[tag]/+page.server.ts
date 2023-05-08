import type { Database } from '$root/SupabaseTypes.js'
import type { SupabaseClient } from '@supabase/supabase-js'
import { error } from '@sveltejs/kit'

export const _fetchChannelsByTag = async (
  supabase: SupabaseClient<Database>,
  channel_id: string
) => {
  const { data: channels, error: db_error } = await supabase
    .from('channels')
    .select('*,members(stage_name)')
    .contains('tags', [channel_id])
  if (!channels) throw error(404, db_error)
  if (channels.length < 1) throw error(404, { message: 'not found' })
  return channels
}

export const load = async ({ params, locals: { supabase } }) => {
  const tag = params.tag
  return { channels: await _fetchChannelsByTag(supabase, tag), tag }
}
