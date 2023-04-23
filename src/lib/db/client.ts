// src/lib/db/client.ts

import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'
import { SUPABASE_KEY, SUPABASE_URI } from '$env/static/private'

export const db = createClient<Database>(SUPABASE_URI, SUPABASE_KEY)
