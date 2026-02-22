import nodemailer from 'nodemailer';

const host = process.env.EMAIL_HOST;
const port = Number(process.env.EMAIL_PORT) || 587;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;
  if (!host || !user || !pass) return null;
  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporter;
}

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  package: string;
  timestamp: string;
};

export function getContactEmailHtml(payload: ContactPayload): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Contact form submission</title></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #CC0000;">New consultation request – Mentor Malta</h2>
  <p><strong>Received:</strong> ${payload.timestamp}</p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
  <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
  <p><strong>Interested package:</strong> ${escapeHtml(payload.package)}</p>
  <p><strong>Message:</strong></p>
  <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${escapeHtml(payload.message)}</div>
  <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
  <p style="font-size: 12px; color: #666;">Sent via Mentor Malta contact form.</p>
</body>
</html>
`.trim();
}

export function getContactEmailText(payload: ContactPayload): string {
  return [
    `New consultation request – Mentor Malta`,
    `Received: ${payload.timestamp}`,
    ``,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Interested package: ${payload.package}`,
    ``,
    `Message:`,
    payload.message,
  ].join('\n');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(payload: ContactPayload): Promise<boolean> {
  const to = process.env.CONTACT_RECEIVER_EMAIL;
  if (!to) {
    console.warn('CONTACT_RECEIVER_EMAIL not set');
    return false;
  }
  const trans = getTransporter();
  if (!trans) {
    console.warn('SMTP not configured (EMAIL_HOST, EMAIL_USER, EMAIL_PASS)');
    return false;
  }
  try {
    await trans.sendMail({
      from: process.env.EMAIL_FROM || `Mentor Malta <${user}>`,
      to,
      replyTo: payload.email,
      subject: `[Mentor Malta] Consultation request from ${payload.name} – ${payload.package}`,
      text: getContactEmailText(payload),
      html: getContactEmailHtml(payload),
    });
    return true;
  } catch (err) {
    console.error('Nodemailer send error:', err);
    return false;
  }
}
