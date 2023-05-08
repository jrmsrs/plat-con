// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient, Session } from '@supabase/supabase-js'
import type { Database } from './SupabaseTypes.d'

declare global {
  namespace App {
    interface Error {
      code?: string
      message: string
    }
    interface Locals {
      supabase: SupabaseClient<Database, 'public'>
      getSession(): Promise<Session | null>
    }
    interface PageData {
      session: Session | null
    }
    // interface Platform {}
    interface Event {
      request: Request
      waitUntil(fn: Promise<void>): void
      respondWith(response: Promise<Response | undefined>): Promise<Response>
    }
  }
}
export {}
