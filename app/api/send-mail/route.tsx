import { NextRequest, NextResponse } from "next/server";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: NextRequest) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "user",
      pass: process.env.SMTP_PASSWORD || "password",
    },
  });

  try {
    const body: { name: string; email: string; message: string } =
      await req.json();

    const mailData = {
      from: body.email,
      to: process.env.SMTP_TO_EMAIL,
      subject: `New Project request from ${body.name}`,
      text: body.message + " | Sent from: " + body.email,
      html: body.message,
    };

    transporter.sendMail(
      mailData,
      function (err: Error | null, info: SMTPTransport.SentMessageInfo) {
        if (err) console.log(err);
        else console.log(info);
      }
    );

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: `Error while sending email ${err}` },
      { status: 500 }
    );
  }
}
