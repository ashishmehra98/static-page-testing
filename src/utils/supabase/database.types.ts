export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      contact_form_submissions: {
        Row: {
          created_at: string
          date: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          location: string | null
          phone_number: string | null
          service: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          location?: string | null
          phone_number?: string | null
          service?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          location?: string | null
          phone_number?: string | null
          service?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pesticide_applications: {
        Row: {
          applied_amount: number | null
          applied_amount_unit: string | null
          areas_covered: string[] | null
          batch: string | null
          chemical_used: string | null
          created_at: string
          default_unit: number | null
          default_unit_unit: string | null
          id: string
          mixed_rate: number | null
          mixed_rate_unit: string | null
          pesticides: string[] | null
          raw_amount: number | null
          raw_amount_unit: string | null
          service_report_id: string
          updated_at: string | null
        }
        Insert: {
          applied_amount?: number | null
          applied_amount_unit?: string | null
          areas_covered?: string[] | null
          batch?: string | null
          chemical_used?: string | null
          created_at?: string
          default_unit?: number | null
          default_unit_unit?: string | null
          id?: string
          mixed_rate?: number | null
          mixed_rate_unit?: string | null
          pesticides?: string[] | null
          raw_amount?: number | null
          raw_amount_unit?: string | null
          service_report_id: string
          updated_at?: string | null
        }
        Update: {
          applied_amount?: number | null
          applied_amount_unit?: string | null
          areas_covered?: string[] | null
          batch?: string | null
          chemical_used?: string | null
          created_at?: string
          default_unit?: number | null
          default_unit_unit?: string | null
          id?: string
          mixed_rate?: number | null
          mixed_rate_unit?: string | null
          pesticides?: string[] | null
          raw_amount?: number | null
          raw_amount_unit?: string | null
          service_report_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pesticide_applications_service_report_id_fkey"
            columns: ["service_report_id"]
            isOneToOne: false
            referencedRelation: "service_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      service_reports: {
        Row: {
          asbestos_identified: string | null
          asbestos_present: boolean | null
          asbestos_procedures: boolean | null
          asbestos_risk: string | null
          children_parental_supervision: boolean | null
          children_present: boolean | null
          created_at: string
          dogs_cats_present: boolean | null
          dogs_cats_removed: boolean | null
          end_time: string | null
          excessive_noise: boolean | null
          excessive_noise_earmuffs: boolean | null
          heat_cold_issue: boolean | null
          heat_cold_safety_gear: boolean | null
          housekeeping_rating: string | null
          id: string
          job_comments: string | null
          job_date: string | null
          lighting_carry_torch: boolean | null
          lighting_issue: boolean | null
          other_pest: string | null
          other_risks_noted: string | null
          people_asked_to_vacate: boolean | null
          people_present: boolean | null
          pest_types: string[] | null
          property_address: string | null
          site_active: boolean | null
          slippery_floors: boolean | null
          slippery_floors_signage: boolean | null
          start_time: string | null
          technician_licence: string | null
          technician_name: string | null
          technician_signature: string | null
          tools_used: string[] | null
          updated_at: string | null
          wind_speed: string | null
        }
        Insert: {
          asbestos_identified?: string | null
          asbestos_present?: boolean | null
          asbestos_procedures?: boolean | null
          asbestos_risk?: string | null
          children_parental_supervision?: boolean | null
          children_present?: boolean | null
          created_at?: string
          dogs_cats_present?: boolean | null
          dogs_cats_removed?: boolean | null
          end_time?: string | null
          excessive_noise?: boolean | null
          excessive_noise_earmuffs?: boolean | null
          heat_cold_issue?: boolean | null
          heat_cold_safety_gear?: boolean | null
          housekeeping_rating?: string | null
          id?: string
          job_comments?: string | null
          job_date?: string | null
          lighting_carry_torch?: boolean | null
          lighting_issue?: boolean | null
          other_pest?: string | null
          other_risks_noted?: string | null
          people_asked_to_vacate?: boolean | null
          people_present?: boolean | null
          pest_types?: string[] | null
          property_address?: string | null
          site_active?: boolean | null
          slippery_floors?: boolean | null
          slippery_floors_signage?: boolean | null
          start_time?: string | null
          technician_licence?: string | null
          technician_name?: string | null
          technician_signature?: string | null
          tools_used?: string[] | null
          updated_at?: string | null
          wind_speed?: string | null
        }
        Update: {
          asbestos_identified?: string | null
          asbestos_present?: boolean | null
          asbestos_procedures?: boolean | null
          asbestos_risk?: string | null
          children_parental_supervision?: boolean | null
          children_present?: boolean | null
          created_at?: string
          dogs_cats_present?: boolean | null
          dogs_cats_removed?: boolean | null
          end_time?: string | null
          excessive_noise?: boolean | null
          excessive_noise_earmuffs?: boolean | null
          heat_cold_issue?: boolean | null
          heat_cold_safety_gear?: boolean | null
          housekeeping_rating?: string | null
          id?: string
          job_comments?: string | null
          job_date?: string | null
          lighting_carry_torch?: boolean | null
          lighting_issue?: boolean | null
          other_pest?: string | null
          other_risks_noted?: string | null
          people_asked_to_vacate?: boolean | null
          people_present?: boolean | null
          pest_types?: string[] | null
          property_address?: string | null
          site_active?: boolean | null
          slippery_floors?: boolean | null
          slippery_floors_signage?: boolean | null
          start_time?: string | null
          technician_licence?: string | null
          technician_name?: string | null
          technician_signature?: string | null
          tools_used?: string[] | null
          updated_at?: string | null
          wind_speed?: string | null
        }
        Relationships: []
      }
      test: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_last_test_row: { Args: never; Returns: undefined }
      insert_two_hellos: { Args: never; Returns: undefined }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
