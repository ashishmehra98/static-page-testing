import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";
import { validateRequestOrigin } from "@/utils/api/request-validation";
import type { TablesInsert } from "@/utils/supabase/database.types";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		// Validate request origin before processing
		const originValidation = validateRequestOrigin(request);
		if (!originValidation.isValid) {
			return NextResponse.json({ error: originValidation.error || "Unauthorized request" }, { status: 403 });
		}

		const { id } = params;

		// Validate ID is provided
		if (!id || typeof id !== "string") {
			return NextResponse.json({ error: "Service report ID is required" }, { status: 400 });
		}

		// Create server-side Supabase client
		const supabase = createServerClient();

		// Fetch all pesticide applications for this service report
		const { data, error } = await supabase
			.from("pesticide_applications")
			.select("*")
			.eq("service_report_id", id)
			.order("created_at", { ascending: true });

		if (error) {
			console.error("Supabase fetch error:", error);
			return NextResponse.json({ error: "Failed to fetch pesticide applications. Please try again." }, { status: 500 });
		}

		// Return empty array if no data found (this is valid)
		return NextResponse.json({ success: true, data: data || [] }, { status: 200 });
	} catch (error) {
		console.error("API route error:", error);

		// Handle other errors
		return NextResponse.json({ error: error instanceof Error ? error.message : "An unexpected error occurred" }, { status: 500 });
	}
}

// Transform form data to database format
const transformFormDataToDB = (
	formData: {
		areasCovered: string[];
		pesticide: string;
		batch: string;
		rawAmount: string;
		rawAmountUnit: string;
		appliedAmount: string;
		appliedAmountUnit: string;
		chemicalUsed: string;
		mixedRate: string;
		mixedRateUnit: string;
		defaultUnit: string;
		defaultUnitUnit: string;
	},
	serviceReportId: string,
): TablesInsert<"pesticide_applications"> => {
	// Helper function to safely parse numbers
	const parseNumber = (value: string): number | null => {
		if (!value || value.trim() === "") return null;
		const parsed = parseFloat(value);
		return isNaN(parsed) ? null : parsed;
	};

	return {
		service_report_id: serviceReportId,
		areas_covered: formData.areasCovered.length > 0 ? formData.areasCovered : null,
		pesticides: formData.pesticide ? [formData.pesticide] : null,
		batch: formData.batch || null,
		raw_amount: parseNumber(formData.rawAmount),
		raw_amount_unit: formData.rawAmountUnit || null,
		applied_amount: parseNumber(formData.appliedAmount),
		applied_amount_unit: formData.appliedAmountUnit || null,
		chemical_used: formData.chemicalUsed || null,
		mixed_rate: parseNumber(formData.mixedRate),
		mixed_rate_unit: formData.mixedRateUnit || null,
		default_unit: parseNumber(formData.defaultUnit),
		default_unit_unit: formData.defaultUnitUnit || null,
	};
};

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		// Validate request origin before processing
		const originValidation = validateRequestOrigin(request);
		if (!originValidation.isValid) {
			return NextResponse.json({ error: originValidation.error || "Unauthorized request" }, { status: 403 });
		}

		const { id } = params;

		// Validate ID is provided
		if (!id || typeof id !== "string") {
			return NextResponse.json({ error: "Service report ID is required" }, { status: 400 });
		}

		// Parse request body
		const body = await request.json();
		const { applications } = body;

		// Validate applications array
		if (!Array.isArray(applications)) {
			return NextResponse.json({ error: "Applications array is required" }, { status: 400 });
		}

		// Create server-side Supabase client
		const supabase = createServerClient();

		// First, delete all existing pesticide applications for this service report
		const { error: deleteError } = await supabase.from("pesticide_applications").delete().eq("service_report_id", id);

		if (deleteError) {
			console.error("Supabase delete error:", deleteError);
			return NextResponse.json({ error: "Failed to delete existing pesticide applications. Please try again." }, { status: 500 });
		}

		// If no applications to insert, return success
		if (applications.length === 0) {
			return NextResponse.json({ success: true, data: [] }, { status: 200 });
		}

		// Transform and insert new pesticide applications
		const dbApplications = applications.map((app: any) => transformFormDataToDB(app, id));

		// Insert all applications
		const { data, error } = await supabase.from("pesticide_applications").insert(dbApplications).select();

		if (error) {
			console.error("Supabase insert error:", error);
			return NextResponse.json({ error: "Failed to save pesticide applications. Please try again." }, { status: 500 });
		}

		return NextResponse.json({ success: true, data: data || [] }, { status: 200 });
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
