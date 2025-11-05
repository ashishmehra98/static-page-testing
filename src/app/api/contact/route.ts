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

		const body = await request.json();

		// Validate required fields
		const requiredFields = ["firstName", "lastName", "email", "phoneNumber"];
		const missingFields = requiredFields.filter((field) => !body[field]?.trim());

		if (missingFields.length > 0) {
			return NextResponse.json({ error: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 });
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(body.email.trim())) {
			return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
		}

		// Map form data to database schema (camelCase to snake_case)
		const submissionData: TablesInsert<"contact_form_submissions"> = {
			first_name: body.firstName.trim(),
			last_name: body.lastName.trim(),
			phone_number: body.phoneNumber.trim(),
			email: body.email.trim(),
			service: body.service?.trim() || null,
			date: body.date || null,
			location: body.location?.trim() || null,
		};

		// Create server-side Supabase client
		const supabase = createServerClient();

		// Insert the submission
		const { data, error } = await supabase.from("contact_form_submissions").insert([submissionData]).select();

		if (error) {
			console.error("Supabase insert error:", error);
			return NextResponse.json({ error: "Failed to submit form. Please try again." }, { status: 500 });
		}

		return NextResponse.json({ success: true, data }, { status: 201 });
	} catch (error) {
		console.error("API route error:", error);

		// Handle JSON parsing errors
		if (error instanceof SyntaxError) {
			return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
		}

		// Handle other errors
		return NextResponse.json({ error: error instanceof Error ? error.message : "An unexpected error occurred" }, { status: 500 });
	}
}
