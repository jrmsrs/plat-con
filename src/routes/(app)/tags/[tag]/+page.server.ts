import { db } from '$lib/db/client'
import { error } from '@sveltejs/kit'

export const _fetchChannelsByTag = async (channel_id: string) => {
  const { data: channels, error: db_error } = await db
    .from('channels')
    .select('*,members(stage_name)')
    .contains('tags', [channel_id])
  if (!channels) throw error(404, db_error)
  if (channels.length < 1) throw error(404, { message: 'not found' })
  return channels
}

export const load = async ({ params }) => {
  const tag = params.tag
  return { channels: await _fetchChannelsByTag(tag), tag }
}
