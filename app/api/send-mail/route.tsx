import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const body: { name: string; email: string; message: string } =
    await req.json();
  try {
    await sendEmail({
      from: body.email,
      subject: `New Project request from ${body.name}`,
      html: body.message,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error while sending email" },
      { status: 500 }
    );
  }
}
