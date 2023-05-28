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
      products: {
        Row: {
          created_at: string | null
          name: string | null
          sid: number
        }
        Insert: {
          created_at?: string | null
          name?: string | null
          sid?: number
        }
        Update: {
          created_at?: string | null
          name?: string | null
          sid?: number
        }
      }
      test: {
        Row: {
          "1111": number
          created_at: string | null
          id: number
        }
        Insert: {
          "1111"?: number
          created_at?: string | null
          id?: number
        }
        Update: {
          "1111"?: number
          created_at?: string | null
          id?: number
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
