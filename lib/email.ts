import nodemailer from "nodemailer"

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  // Create transporter using Gmail (you can use other providers)
  const transporter = nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_APP_PASSWORD, // Your Gmail App Password
    },
  })

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "dhumnorsrinath06052002@gmail.com", // Your email where you want to receive messages
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1a1a1a; color: #e5e5e5; border-radius: 8px;">
        <h2 style="color: #60a5fa; margin-bottom: 20px;">// New Contact Form Submission</h2>
        
        <div style="background-color: #2d2d2d; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
          <p style="margin: 5px 0;"><span style="color: #a78bfa;">name:</span> <span style="color: #fbbf24;">"${data.name}"</span></p>
          <p style="margin: 5px 0;"><span style="color: #a78bfa;">email:</span> <span style="color: #fbbf24;">"${data.email}"</span></p>
          <p style="margin: 5px 0;"><span style="color: #a78bfa;">subject:</span> <span style="color: #fbbf24;">"${data.subject}"</span></p>
        </div>
        
        <div style="background-color: #2d2d2d; padding: 15px; border-radius: 6px;">
          <p style="color: #a78bfa; margin-bottom: 10px;">message:</p>
          <div style="background-color: #1a1a1a; padding: 10px; border-radius: 4px; border-left: 3px solid #60a5fa;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #4a4a4a;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Sent from your portfolio contact form • ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `,
    // Also send a plain text version
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Sent: ${new Date().toLocaleString()}
    `,
  }

  // Send auto-reply to the user
  const autoReplyOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "Thanks for reaching out! - Srinath Patil",
    html: `
      <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1a1a1a; color: #e5e5e5; border-radius: 8px;">
        <h2 style="color: #60a5fa; margin-bottom: 20px;">// Message Received Successfully</h2>
        
        <p style="margin-bottom: 15px;">Hi <span style="color: #fbbf24;">${data.name}</span>,</p>
        
        <div style="background-color: #2d2d2d; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
          <p style="margin: 0; line-height: 1.6;">
            Thanks for reaching out through my portfolio! I've received your message about 
            "<span style="color: #a78bfa;">${data.subject}</span>" and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div style="background-color: #2d2d2d; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
          <p style="color: #10b981; margin: 0; font-weight: bold;">console.log("Your message has been queued for processing...");</p>
        </div>
        
        <p style="margin-bottom: 15px;">
          In the meantime, feel free to check out my projects on 
          <a href="https://github.com/dhumnorsrinath" style="color: #60a5fa; text-decoration: none;">GitHub</a> 
          or connect with me on 
          <a href="https://linkedin.com/in/dhumnorsrinath" style="color: #60a5fa; text-decoration: none;">LinkedIn</a>.
        </p>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #4a4a4a;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Best regards,<br>
            <span style="color: #60a5fa;">Srinath Patil</span><br>
            Full Stack Developer & Entrepreneur
          </p>
        </div>
      </div>
    `,
    text: `
Hi ${data.name},

Thanks for reaching out through my portfolio! I've received your message about "${data.subject}" and I'll get back to you as soon as possible.

In the meantime, feel free to check out my projects on GitHub or connect with me on LinkedIn.

Best regards,
Srinath Patil
Full Stack Developer & Entrepreneur
    `,
  }

  try {
    // Send both emails
    await Promise.all([transporter.sendMail(mailOptions), transporter.sendMail(autoReplyOptions)])

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
