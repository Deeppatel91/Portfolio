import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required." }, { status: 400 });
    }

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Email HTML template
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">📩 New Contact Form Message</h2>
        <p style="font-size: 16px; color: #555;"><strong>From:</strong> ${email}</p>
        <p style="font-size: 16px; color: #555;"><strong>Message:</strong></p>
        <blockquote style="font-style: italic; color: #666; padding-left: 10px; border-left: 3px solid #007BFF;">
          ${message}
        </blockquote>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
        <p style="text-align: center; font-size: 14px; color: #888;">
          This email was sent from your website's contact form.
        </p>
      </div>
    `;

    // Mail options
    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `New Message from ${email}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
      html: emailHTML,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
