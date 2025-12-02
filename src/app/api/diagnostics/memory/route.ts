import { NextRequest, NextResponse } from "next/server";
import { getMemoryReport } from "@/utils/diagnostics/memory";

export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest) {
	const expectedToken = process.env.DIAGNOSTICS_TOKEN;
	if (!expectedToken) {
		return true;
	}

	const providedToken = request.headers.get("x-diagnostic-token");
	return expectedToken === providedToken;
}

export async function GET(request: NextRequest) {
	if (!isAuthorized(request)) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
	}

	const response = NextResponse.json(getMemoryReport());

	response.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate");
	response.headers.set("Pragma", "no-cache");
	response.headers.set("Expires", "0");

	return response;
}
