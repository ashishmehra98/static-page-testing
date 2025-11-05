import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";
import type { TablesInsert } from "@/utils/supabase/database.types";
import { validateRequestOrigin } from "@/utils/api/request-validation";

export async function POST(request: NextRequest) {
	try {
		// Validate request origin before processing
		const originValidation = validateRequestOrigin(request);
		if (!originValidation.isValid) {
			return NextResponse.json({ error: originValidation.error || "Unauthorized request" }, { status: 403 });
		}

		// Create server-side Supabase client
		const supabase = createServerClient();

		// Insert a new service report row with minimal default data
		const serviceReportData: TablesInsert<"service_reports"> = {
			// All fields are optional, so we can create an empty row
			// The database will auto-generate the id and created_at
		};

		const { data, error } = await supabase.from("service_reports").insert([serviceReportData]).select("id").single();

		if (error) {
			console.error("Supabase insert error:", error);
			return NextResponse.json({ error: "Failed to create service report. Please try again." }, { status: 500 });
		}

		if (!data || !data.id) {
			return NextResponse.json({ error: "Failed to create service report. No ID returned." }, { status: 500 });
		}

		return NextResponse.json({ success: true, id: data.id }, { status: 201 });
	} catch (error) {
		console.error("API route error:", error);

		// Handle other errors
		return NextResponse.json({ error: error instanceof Error ? error.message : "An unexpected error occurred" }, { status: 500 });
	}
}
