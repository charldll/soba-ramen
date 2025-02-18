import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { userEmail, message } = JSON.parse(event.body);

    if (!userEmail || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing email or message" }),
      };
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.VITE_EMAIL_USER,
        pass: process.env.VITE_EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify the transporter
    await transporter.verify();

    // Send email to the user
    await transporter.sendMail({
      from: process.env.VITE_EMAIL_USER,
      to: userEmail,
      subject: "Potwierdzenie otrzymania wiadomości",
      html: `
        <h2>Dziękujemy za Twoją wiadomość!</h2>
        <p>Otrzymaliśmy następującą wiadomość:</p>
        <blockquote>${message}</blockquote>
        <p>Skontaktujemy się z Tobą jak najszybciej.</p>
      `,
    });

    // Send email to the admin
    await transporter.sendMail({
      from: process.env.VITE_EMAIL_USER,
      to: process.env.VITE_EMAIL_USER,
      subject: "Nowa wiadomość od użytkownika",
      html: `
        <h2>Nowa wiadomość</h2>
        <p><strong>Od:</strong> ${userEmail}</p>
        <p><strong>Wiadomość:</strong></p>
        <blockquote>${message}</blockquote>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send emails" }),
    };
  }
}
