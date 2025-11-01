import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

/**
 * Creates a server-side Supabase client for use in API routes and server components.
 * Uses the service role key for admin operations.
 * IMPORTANT: Never expose this client to the client-side code.
 */
export function createServerClient() {
	const supabaseUrl = process.env.SUPABASE_URL;
	const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

	if (!supabaseUrl) {
		throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable");
	}

	if (!supabaseServiceRoleKey) {
		throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
	}

	return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
		auth: {
			autoRefreshToken: false,
			persistSession: false,
		},
	});
}
