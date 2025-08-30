import { Resend } from 'resend';

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, subject, message } = await req.json();
    console.log('Contact form submission:', { name, email, subject, message: message.substring(0, 50) + '...' });

    if (!name || !email || !subject || !message) {
      console.log('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key exists:', !!apiKey);
    
    if (!apiKey) {
      console.log('Email service not configured - missing RESEND_API_KEY');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const resend = new Resend(apiKey);
    console.log('Attempting to send email...');

    const result = await resend.emails.send({
      from: 'Elvision Website <onboarding@resend.dev>',
      to: 'elvision.technology@gmail.com',
      replyTo: email,
      subject: `[Elvision] ${subject}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log('Email sent successfully:', result);
    
    return new Response(
      JSON.stringify({ ok: true, result }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}


