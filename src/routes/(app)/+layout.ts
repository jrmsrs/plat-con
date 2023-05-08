import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URI } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import type { LayoutLoad } from './$types'
import type { Database } from '$root/SupabaseTypes'

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URI,
    supabaseKey: PUBLIC_SUPABASE_KEY,
    event: { fetch },
    serverSession: data.session
  })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  return { supabase, session }
}
