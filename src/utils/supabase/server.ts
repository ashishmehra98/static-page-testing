import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Singleton instance to prevent multiple client creation
let supabaseClient: SupabaseClient<Database> | null = null;

/**
 * Creates or returns the existing server-side Supabase client for use in API routes and server components.
 * Uses the service role key for admin operations.
 * IMPORTANT: Never expose this client to the client-side code.
 *
 * This function implements a singleton pattern to ensure only one client instance
 * is created and reused across all server-side requests, preventing memory leaks
 * and connection pool exhaustion.
 */
export function createServerClient(): SupabaseClient<Database> {
	// Return existing client if already created
	if (supabaseClient) {
		return supabaseClient;
	}

	const supabaseUrl = process.env.SUPABASE_URL;
	const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

	if (!supabaseUrl) {
		throw new Error("Missing SUPABASE_URL environment variable");
	}

	if (!supabaseServiceRoleKey) {
		throw new Error("Missing SERVICE_ROLE_KEY environment variable");
	}

	// Create and cache the client instance
	supabaseClient = createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
		auth: {
			autoRefreshToken: false,
			persistSession: false,
		},
	});

	return supabaseClient;
}
