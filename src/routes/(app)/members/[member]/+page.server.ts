import { db } from '$lib/db/client'
import { error } from '@sveltejs/kit'

export const _fetchMember = async (member_id: string) => {
  const { data: member, error: db_error } = await db
    .from('members')
    .select('*, channels(*)')
    .eq('id', member_id)
  if (!member) throw error(404, db_error)
  if (member.length < 1) throw error(404, { message: 'not found' })
  return member[0]
}

export const load = async ({ params }) => {
  const id = params.member
  return {
    member: await _fetchMember(id),
    member_id: id
  }
}
