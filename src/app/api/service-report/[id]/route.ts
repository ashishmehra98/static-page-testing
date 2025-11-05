import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";
import type { TablesUpdate } from "@/utils/supabase/database.types";
import { validateRequestOrigin } from "@/utils/api/request-validation";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		// Validate request origin before processing
		const originValidation = validateRequestOrigin(request);
		if (!originValidation.isValid) {
			return NextResponse.json({ error: originValidation.error || "Unauthorized request" }, { status: 403 });
		}

		const { id } = await params;

		// Validate ID is provided
		if (!id || typeof id !== "string") {
			return NextResponse.json({ error: "Service report ID is required" }, { status: 400 });
		}

		// Create server-side Supabase client
		const supabase = createServerClient();

		// Fetch the service report
		const { data, error } = await supabase.from("service_reports").select("*").eq("id", id).single();

		if (error) {
			console.error("Supabase fetch error:", error);

			// Check if record doesn't exist
			if (error.code === "PGRST116") {
				return NextResponse.json({ error: "Service report not found" }, { status: 404 });
			}

			return NextResponse.json({ error: "Failed to fetch service report. Please try again." }, { status: 500 });
		}

		if (!data) {
			return NextResponse.json({ error: "Service report not found" }, { status: 404 });
		}

		return NextResponse.json({ success: true, data }, { status: 200 });
	} catch (error) {
		console.error("API route error:", error);

		// Handle other errors
		return NextResponse.json({ error: error instanceof Error ? error.message : "An unexpected error occurred" }, { status: 500 });
	}
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		// Validate request origin before processing
		const originValidation = validateRequestOrigin(request);
		if (!originValidation.isValid) {
			return NextResponse.json({ error: originValidation.error || "Unauthorized request" }, { status: 403 });
		}

		const { id } = await params;

		// Validate ID is provided
		if (!id || typeof id !== "string") {
			return NextResponse.json({ error: "Service report ID is required" }, { status: 400 });
		}

		// Parse request body
		const body = await request.json();

		// Create server-side Supabase client
		const supabase = createServerClient();

		// Prepare update data - exclude id and created_at from updates
		const { id: _, created_at: __, ...updateData } = body;
		const serviceReportUpdate: TablesUpdate<"service_reports"> = {
			...updateData,
			updated_at: new Date().toISOString(),
		};

		// Update the service report
		const { data, error } = await supabase.from("service_reports").update(serviceReportUpdate).eq("id", id).select().single();

		if (error) {
			console.error("Supabase update error:", error);

			// Check if record doesn't exist
			if (error.code === "PGRST116") {
				return NextResponse.json({ error: "Service report not found" }, { status: 404 });
			}

			return NextResponse.json({ error: "Failed to update service report. Please try again." }, { status: 500 });
		}

		if (!data) {
			return NextResponse.json({ error: "Failed to update service report. No data returned." }, { status: 500 });
		}

		return NextResponse.json({ success: true, data }, { status: 200 });
	} catch (error) {
		console.error("API route error:", error);

		// Handle JSON parsing errors
		if (error instanceof SyntaxError || error instanceof TypeError) {
			return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
		}

		// Handle other errors
		return NextResponse.json({ error: error instanceof Error ? error.message : "An unexpected error occurred" }, { status: 500 });
	}
}
