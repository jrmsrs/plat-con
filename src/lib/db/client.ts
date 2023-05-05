// src/lib/db/client.ts

import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'
import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URI } from '$env/static/public'

export const db = createClient<Database>(PUBLIC_SUPABASE_URI, PUBLIC_SUPABASE_KEY)
