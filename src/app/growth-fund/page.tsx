import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon | 31 Degrees North Fund</title>
        <meta name="description" content="We are launching something amazing soon. Stay tuned!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-center px-6">
        <div id="homePage" className="home-page container">
          <div className="main-content">
            <div className="left-content">
              <h1>Expanding access to next-generation value creators</h1>
            </div>
            <div className="right-content">
              <p>
                Investing in innovation through public and private markets with responsible risk
                management.
              </p>
            </div>
          </div>

          <div className="bottom-section">
            <div className="logo-section">
              <div className="logo">
                <img src="/logo.png" alt="31 Degrees North Fund Logo"  />
              </div>
            </div>

            <div className="cta-section">
              <span className="cta-text blinking">Launching Soon...</span>
              <Link href="/contact2" className="contact-btn">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="footer">
            <p>© 2025 31 Degrees North Fund. All rights reserved.</p>
          </div>
        </div>
      </main>
    </>
  );
}
