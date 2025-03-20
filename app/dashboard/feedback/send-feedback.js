import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { feedback, rating, userEmail, userName } = req.body;

  if (!feedback || !rating) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sarthakjanrav@gmail.com', // your Gmail address
      pass: '', // your App Password from Google
    },
  });

  const mailOptions = {
    from: 'sarthakjanrav@gmail.com',
    to: 'sarthakjanrav@gmail.com',
    subject: '📩 New Feedback Received!',
    text: `
      You have received new feedback from your website:

      Name: ${userName || 'Anonymous'}
      Email: ${userEmail || 'Not provided'}
      Rating: ${rating} stars
      Feedback: ${feedback}

      Regards,
      Your Website Feedback System
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Feedback email sent to owner successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send feedback email' });
  }
}
