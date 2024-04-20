import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  require("dotenv").config();
  let result;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PW,
      },
    });
    const body: { name: string; email: string; message: string } =
      await req.json();
    const options = {
      from: body.email,
      to: process.env.SMTP_TO_EMAIL,
      subject: "New Project Request",
      html: body.message,
    };
    result = await transporter.sendMail(options);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(
      "ERROR:",
      error,
      "\nSMTP_USER:",
      process.env.SMTP_USER,
      "\nSMTP_PW:",
      process.env.SMTP_PW,
      "\nSMTP_HOST:",
      process.env.SMTP_HOST,
      "\nSMTP_TO_EMAIL:",
      process.env.SMTP_TO_EMAIL,
      "RESULT:",
      result,
    );
    return NextResponse.json(
      { message: `Error while sending email ${error}` },
      { status: 500 },
    );
  }
}
