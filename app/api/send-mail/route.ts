import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const body: { name: string; email: string; message: string } =
    await req.json();
}
