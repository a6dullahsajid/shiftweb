import nodemailer from "nodemailer";

const recipient = "shiftwebdesign.in@gmail.com";

export async function POST(request) {
  try {
    const { name, mobile } = await request.json();

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof mobile !== "string" ||
      !/^\d{10}$/.test(mobile)
    ) {
      return Response.json(
        { error: "Please provide a name and a valid 10 digit mobile number." },
        { status: 400 },
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP configuration for call request email.");
      return Response.json(
        { error: "Email service is not configured yet. Please try again later." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT || 587) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: recipient,
      replyTo: SMTP_FROM || SMTP_USER,
      subject: `New call request from ${name.trim()}`,
      text: `Name: ${name.trim()}\nMobile: ${mobile}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Call request email failed:", error);
    return Response.json(
      { error: "We could not send your request. Please try again." },
      { status: 500 },
    );
  }
}