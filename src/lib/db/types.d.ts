export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          avatar_uri: string | null
          created_at: string | null
          id: string
          stage_name: string
          user_id: string | null
        }
        Insert: {
          avatar_uri?: string | null
          created_at?: string | null
          id?: string
          stage_name: string
          user_id?: string | null
        }
        Update: {
          avatar_uri?: string | null
          created_at?: string | null
          id?: string
          stage_name?: string
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
