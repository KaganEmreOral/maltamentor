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

    logContactMessage(payload);

    const sent = await sendContactEmail(payload);
    if (!sent) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
