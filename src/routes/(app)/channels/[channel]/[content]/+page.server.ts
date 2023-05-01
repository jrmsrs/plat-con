import { db } from '$lib/db/client'
import { error } from '@sveltejs/kit'
import { PUBLIC_APP_NAME } from '$env/static/public'

export const _fetchContent = async (content_id: string) => {
  const { data: content, error: db_error2 } = await db
    .from('contents')
    .select('*, content_body(*)')
    .eq('id', content_id)
  if (!content) throw error(404, db_error2)
  if (content.length < 1) throw error(404, { message: 'not found' })
  return content[0]
}

export const load = async ({ params, url }) => {
  const id = params.content

  return { streamed: { content: _fetchContent(id) } }
}
