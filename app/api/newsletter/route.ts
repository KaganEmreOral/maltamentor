import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const listId = process.env.RESEND_AUDIENCE_ID;
    if (listId && process.env.RESEND_API_KEY) {
      const res = await fetch(`https://api.resend.com/audiences/${listId}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error('Resend audience error:', err);
        return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
