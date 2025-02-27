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
        <div
      style="
        font-family: Arial, sans-serif;
        padding: 1.5rem;
        background-color: #e6e1e7;
        color: #122653;
        font-size: 1rem;
        border-radius: 5px;
      "
    >
    
      <h2 style="font-size: 24px; font-weight: bold">
        Dziękujemy za wiadomość!
      </h2>
      <p>Otrzymałyśmy maila o następującej treści:</p>
      <div style="border-radius: 5px; padding: 0.5rem; margin-block: 0.5rem">
        <blockquote style="padding: 10px 20px; border-left: 4px solid #af282f">
          ${message}
        </blockquote>
      </div>
      <p>Skontaktujemy się z Tobą jak najszybciej.</p>
      <p>Inga, Żaklina i Agnieszka</p>
    </div>
      `,
    });

    // Send email to the admin
    await transporter.sendMail({
      from: process.env.VITE_EMAIL_USER,
      to: process.env.VITE_EMAIL_USER,
      subject: "Nowa wiadomość od użytkownika",
      html: `
         <div
      style="
        font-family: Arial, sans-serif;
        padding: 1.5rem;
        background-color: #e6e1e7;
        color: #122653;
        font-size: 1rem;
        border-radius: 5px;
      "
    >
      <h2 style="font-size: 24px; font-weight: bold">Nowa wiadomość</h2>
      <p><strong>Od: </strong>${userEmail}</p>
      <div style="border-radius: 5px; padding: 0.5rem; margin-block: 0.5rem">
        <blockquote style="padding: 10px 20px; border-left: 4px solid #af282f">
          ${message}
        </blockquote>
      </div>
    </div>
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
