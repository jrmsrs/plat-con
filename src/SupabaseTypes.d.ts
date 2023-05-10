export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      channel_members: {
        Row: {
          channel_id: string
          created_at: string | null
          id: string
          member_id: string
        }
        Insert: {
          channel_id: string
          created_at?: string | null
          id?: string
          member_id: string
        }
        Update: {
          channel_id?: string
          created_at?: string | null
          id?: string
          member_id?: string
        }
      }
      channels: {
        Row: {
          cover_img_uri: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          logo_img_uri: string | null
          name: string
          symbols: string[] | null
          tags: string[] | null
        }
        Insert: {
          cover_img_uri?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          logo_img_uri?: string | null
          name: string
          symbols?: string[] | null
          tags?: string[] | null
        }
        Update: {
          cover_img_uri?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          logo_img_uri?: string | null
          name?: string
          symbols?: string[] | null
          tags?: string[] | null
        }
      }
      content_body: {
        Row: {
          content_id: string
          created_at: string | null
          created_by: string | null
          id: string
          type: string
          value: string
        }
        Insert: {
          content_id: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          type?: string
          value: string
        }
        Update: {
          content_id?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          type?: string
          value?: string
        }
      }
      contents: {
        Row: {
          channel_id: string
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          thumb_uri: string | null
          title: string
        }
        Insert: {
          channel_id: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          thumb_uri?: string | null
          title: string
        }
        Update: {
          channel_id?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          thumb_uri?: string | null
          title?: string
        }
      }
      fav_channels: {
        Row: {
          channel_id: string
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          channel_id: string
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          channel_id?: string
          created_at?: string | null
          id?: string
          user_id?: string
        }
      }
      fav_contents: {
        Row: {
          content_id: string
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          content_id: string
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          content_id?: string
          created_at?: string | null
          id?: string
          user_id?: string
        }
      }
      members: {
        Row: {
          avatar_uri: string | null
          created_at: string | null
          description: string | null
          id: string
          stage_name: string
          user_id: string | null
        }
        Insert: {
          avatar_uri?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          stage_name: string
          user_id?: string | null
        }
        Update: {
          avatar_uri?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          stage_name?: string
          user_id?: string | null
        }
      }
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
