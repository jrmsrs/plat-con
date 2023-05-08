import type { Database } from '$root/SupabaseTypes.js'
import type { SupabaseClient } from '@supabase/supabase-js'
import { error } from '@sveltejs/kit'

export const _fetchChannel = async (supabase: SupabaseClient<Database>, channel_id: string) => {
  const { data: channel, error: db_error } = await supabase
    .from('channels')
    .select('*, contents(*), members(*)')
    .eq('id', channel_id)
  if (!channel) throw error(404, db_error)

  if (channel.length < 1) throw error(404, { message: 'not found' })
  return channel[0]
}

export const load = async ({ params, locals: { supabase } }) => {
  const id = params.channel

  return { channel: await _fetchChannel(supabase, id) }
}
