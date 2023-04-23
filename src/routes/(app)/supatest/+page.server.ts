import { db } from '$lib/db/client'
import { error } from '@sveltejs/kit'

export const load = async () => {
  const { data: users, error: db_error } = await db.from('users').select()
  if (!users) throw error(404, db_error)
  return { users }
}
