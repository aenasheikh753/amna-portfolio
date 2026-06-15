'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const projectType = formData.get('projectType');
  const message = formData.get('message');

  // Here you would typically save to a database or send an email.
  console.log('Received contact submission:', { name, email, projectType, message });

  // Simulating network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: 'Message sent successfully!' };
}
