/* Minimal email service using Express + Nodemailer.
   - If SMTP_* env vars are provided, uses them to send emails.
   - Otherwise, falls back to Ethereal test SMTP and returns a preview URL.
*/

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.EMAIL_SERVER_PORT || 3001;

async function getTransport() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  // Fallback to Ethereal for testing (no credentials required)
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
}

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing name, email or message' });
    }

    const transporter = await getTransport();

    const mailOptions = {
      from: process.env.MAIL_FROM || `Portfolio Contact <no-reply@portfolio.local>` ,
      to: process.env.MAIL_TO || process.env.SMTP_USER || email, // default to your inbox or echo back
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);

    const previewUrl = nodemailer.getTestMessageUrl(info) || null;

    return res.json({ ok: true, messageId: info.messageId, previewUrl });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
});
