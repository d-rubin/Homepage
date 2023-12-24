import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  require("dotenv").config();

  try {
    const body: { name: string; email: string; message: string } =
      await req.json();
    const data = await resend.emails.send({
      from: "homepage@daniel-rubin.dd",
      to: process.env.SMTP_TO_EMAIL!,
      subject: `New Project request from ${body.name}`,
      html: `${body.message} FROM: ${body.email}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: `Error while sending email ${error}` },
      { status: 500 }
    );
  }
}
