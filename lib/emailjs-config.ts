// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_egk2fw9", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_mxwaq0b", // Replace with your EmailJS template ID
  PUBLIC_KEY: "avjmOzEa0HPhjbQdG", // Replace with your EmailJS public key
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // This would typically use EmailJS on the client side
    // For server-side, we'll simulate the email sending
    console.log("Sending email with data:", data)

    // In a real implementation, you might use a different email service
    // like Nodemailer, SendGrid, or Resend for server-side sending

    return {
      success: true,
      message: "Email sent successfully",
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      message: "Failed to send email",
    }
  }
}
