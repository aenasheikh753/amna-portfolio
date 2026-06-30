'use server';

/**
 * Send contact form data via Resend email service.
 * Requires RESEND_API_KEY environment variable.
 */
export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const projectType = formData.get('projectType') as string;
  const message = formData.get('message') as string;

  const emailBody = `
    Name: ${name}\n
    Email: ${email}\n
    Service: ${projectType}\n
    Message:\n${message}\n`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Acme <no-reply@resend.dev>',
        to: 'amnaaena12@gmail.com',
        subject: 'New Contact Form Submission',
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return { success: false, message: 'Failed to send email.' };
    }

    return { success: true, message: 'Message sent successfully!' };
  } catch (e) {
    console.error('Contact submission error:', e);
    return { success: false, message: 'Unexpected error occurred.' };
  }
}
