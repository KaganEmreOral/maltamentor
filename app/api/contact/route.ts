import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { logContactMessage } from '@/lib/contact-log';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, package: pkg } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    const packageName = typeof pkg === 'string' ? pkg : 'Not specified';
    const timestamp = new Date().toISOString();

    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      package: packageName,
      timestamp,
    };

    try {
      logContactMessage(payload);
    } catch (logErr) {
      console.error('Contact log failed:', logErr);
      return NextResponse.json({ error: 'Could not save your message. Please try again.' }, { status: 500 });
    }

    const emailSent = await sendContactEmail(payload);

    return NextResponse.json({
      success: true,
      emailSent,
    });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
