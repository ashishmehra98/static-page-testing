import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";
import { validateRequestOrigin } from "@/utils/api/request-validation";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];

/**
 * POST /api/upload
 * Handles image uploads to Supabase storage bucket "ecovia"
 */
export async function POST(request: NextRequest) {
	try {
		// Validate request origin before processing
		const originValidation = validateRequestOrigin(request);
		if (!originValidation.isValid) {
			return NextResponse.json({ error: originValidation.error || "Unauthorized request" }, { status: 403 });
		}

		// Parse the form data
		const formData = await request.formData();
		const file = formData.get("file") as File | null;

		if (!file) {
			return NextResponse.json({ error: "No file provided" }, { status: 400 });
		}

		// Validate file type
		if (!ALLOWED_MIME_TYPES.includes(file.type)) {
			return NextResponse.json(
				{
					error: `Invalid file type. Allowed types: ${ALLOWED_MIME_TYPES.join(", ")}`,
				},
				{ status: 400 },
			);
		}

		// Validate file size
		if (file.size > MAX_FILE_SIZE) {
			return NextResponse.json(
				{
					error: `File size exceeds maximum allowed size of ${MAX_FILE_SIZE / 1024 / 1024}MB`,
				},
				{ status: 400 },
			);
		}

		// Generate a unique filename
		const timestamp = Date.now();
		const randomString = Math.random().toString(36).substring(2, 15);
		const fileExtension = file.name.split(".").pop() || "jpg";
		const fileName = `${timestamp}-${randomString}.${fileExtension}`;

		// Optional: Get a folder path from the request if provided
		const folder = formData.get("folder") as string | null;
		const filePath = folder ? `${folder}/${fileName}` : fileName;

		// Convert file to buffer
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Create server-side Supabase client
		const supabase = createServerClient();

		// Upload file to Supabase storage
		const { error: uploadError } = await supabase.storage.from("ecovia").upload(filePath, buffer, {
			contentType: file.type,
			upsert: false, // Don't overwrite existing files
		});

		if (uploadError) {
			console.error("Supabase upload error:", uploadError);
			return NextResponse.json({ error: "Failed to upload file. Please try again." }, { status: 500 });
		}

		// Get public URL for the uploaded file
		const {
			data: { publicUrl },
		} = supabase.storage.from("ecovia").getPublicUrl(filePath);

		return NextResponse.json(
			{
				success: true,
				url: publicUrl,
				path: filePath,
				fileName: fileName,
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("API route error:", error);

		// Handle other errors
		return NextResponse.json(
			{
				error: error instanceof Error ? error.message : "An unexpected error occurred",
			},
			{ status: 500 },
		);
	}
}
