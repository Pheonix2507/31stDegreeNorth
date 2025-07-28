"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.currentTarget.reset();
  };

  return (
    <>
      <Head>
        <title>Contact Us | 31 Degrees North Fund</title>
        <meta name="description" content="Contact 31 Degrees North Fund for inquiries and opportunities." />
      </Head>

      <main className="contact-page">
        <Link href="/" className="back-btn">
          Back to Home
        </Link>
        

<div className="contact-cont">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our team to learn more about 31 Degrees North Fund and investment opportunities.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Get in Touch</h2>

            <div className="contact-detail">
              <div className="label">Contact Person</div>
              <div className="value">Pruthvi Shah</div>
            </div>

            <div className="contact-detail">
              <div className="label">Phone</div>
              <div className="value">
                <a href="tel:+919099917969">+91-9099917969</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="label">Email</div>
              <div className="value">
                <a href="mailto:info@31degreesnorth.in">info@31degreesnorth.in</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email address" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
  </div>

        <div className="footer">
          <p>© 2025 31 Degrees North Fund. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}
