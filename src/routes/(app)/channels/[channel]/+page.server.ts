import { db } from '$lib/db/client'
import { error } from '@sveltejs/kit'

export const _fetchChannel = async (channel_id: string) => {
  const { data: channel, error: db_error1 } = await db
    .from('channels')
    .select('*, contents(*), members(*)')
    .eq('id', channel_id)
  if (!channel) throw error(404, db_error1)

  if (channel.length < 1) throw error(404, { message: 'not found' })
  return channel[0]
}

export const load = async ({ params }) => {
  const id = params.channel
  return {
    channel: await _fetchChannel(id),
    channel_id: id
  }
}
