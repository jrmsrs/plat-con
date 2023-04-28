import { db } from '$lib/db/client'
import { error } from '@sveltejs/kit'

export const _fetchChannels = async () => {
  const { data: channels, error: db_error } = await db
    .from('channels')
    .select('*, members(stage_name)')
  if (!channels) throw error(404, db_error)
  return channels
}

export const load = async () => {
  return { channels: await _fetchChannels() }
}
