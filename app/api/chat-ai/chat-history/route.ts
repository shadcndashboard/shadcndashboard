import { NextRequest, NextResponse } from "next/server";
import { chatHistory } from "./history";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      status: 200,
      data: chatHistory,
    });
  } catch {
    return NextResponse.json({
      status: 500,
      msg: "Error fetching questions",
    });
  }
}
