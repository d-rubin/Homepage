"use strict";

type EmailPayload = {
  from: string;
  subject: string;
  html: string;
};

export const sendEmail = async (data: EmailPayload) => {
  const nodemailer = require("nodemailer");
  require("dotenv").config();
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "user",
      pass: process.env.SMTP_PASSWORD || "password",
    },
  });

  return await transporter.sendMail({
    to: process.env.SMTP_TO_EMAIL,
    ...data,
  });
};
