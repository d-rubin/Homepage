import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "@/emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  require("dotenv").config();

  try {
    // const body: { name: string; email: string; message: string } =
    //   await req.json();
    const data = await resend.emails.send({
      from: "homepage@daniel-rubin.de",
      to: process.env.SMTP_TO_EMAIL!,
      subject: "Registrierung erfolgreich!",
      react: Email(),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: `Error while sending email ${error}` },
      { status: 500 }
    );
  }
}
