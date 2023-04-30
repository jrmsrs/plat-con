import { db } from '$lib/db/client'
import { error } from '@sveltejs/kit'

export const _fetchMembers = async () => {
  const { data: members, error: db_error } = await db.from('members').select()
  if (!members) throw error(404, db_error)
  return members
}

export const load = async () => {
  return { streamed: { members: _fetchMembers() } }
}
