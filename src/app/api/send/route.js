import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your App Password
      },
    });
    const mailOptions = {
      from: email, // Sender's email
      to: [email, process.env.GMAIL_USER], // Your Gmail address (to receive emails)
      subject: subject,
      text: message,
      html: `<p>Thank you for contacting us!</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Send the email
    const data = await transporter.sendMail(mailOptions);
    // const data = await resend.emails.send({
    //   from: fromEmail,
    //   to: [email],
    //   subject: subject,
    //   react: (
    //     <>
    //       <h1>{subject}</h1>
    //       <p>Thank you for contacting us!</p>
    //       <p>New message submitted:</p>
    //       <p>{message}</p>
    //     </>
    //   ),
    // });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}