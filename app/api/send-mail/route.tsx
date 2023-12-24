import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!) || 25,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const body: { name: string; email: string; message: string } =
      await req.json();
    const data = await resend.emails.send({
      from: body.email,
      to: process.env.SMTP_TO_EMAIL!,
      subject: `New Project request from ${body.name}`,
      html: body.message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: `Error while sending email ${error}` },
      { status: 500 }
    );
  }

  // try {
  //   const body: { name: string; email: string; message: string } =
  //     await req.json();
  //
  //   await new Promise((resolve, reject) => {
  //     transporter.verify((error: Error | null, success: boolean) => {
  //       if (error) {
  //         console.log(`Verify-error: ${error}`);
  //         reject(error);
  //       } else {
  //         resolve(success);
  //       }
  //     });
  //   });
  //
  //   const mailData = {
  //     from: body.email,
  //     to: process.env.SMTP_TO_EMAIL,
  //     subject: `New Project request from ${body.name}`,
  //     text: body.message + " | Sent from: " + body.email,
  //     html: body.message,
  //   };
  //
  //   await new Promise(async (resolve, reject) => {
  //     await transporter.sendMail(
  //       mailData,
  //       (err: Error | null, info: SMTPTransport.SentMessageInfo) => {
  //         if (err) {
  //           console.log(`sendMail-error: ${err}`);
  //           reject(err);
  //         } else {
  //           resolve(info);
  //         }
  //       }
  //     );
  //   });
  //
  //   return NextResponse.json(
  //     { message: "Email sent successfully" },
  //     { status: 200 }
  //   );
  // } catch (err) {
  //   return NextResponse.json(
  //     { message: `Error while sending email ${err}` },
  //     { status: 500 }
  //   );
  // }
}
