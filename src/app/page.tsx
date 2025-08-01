import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  metadataBase: new URL("https://31degreesnorth.in"),
  title: "31st Degree North | Investing in Innovation Across Markets",
  description:
    "31st Degree North invests in high-potential innovations across public and private markets—with a commitment to responsible risk management and long-term value creation.",
  keywords: [
    "innovation investing",
    "private equity",
    "public markets investment",
    "responsible risk management",
    "impact investing",
    "entrepreneurship",
    "31st Degree North"
  ],
  openGraph: {
    title: "31st Degree North | Innovation-Focused Investments",
    description:
      "Discover how 31st Degree North backs cutting-edge companies across public and private markets with a rigorous risk framework and sustainability lens.",
    url: "https://31degreesnorth.in",
    siteName: "31st Degree North",
    images: [
      {
        url: "/og-innovation-investment.png",
        width: 1200,
        height: 630,
        alt: "31st Degree North investing innovation across markets",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "31st Degree North | Innovation Through Responsible Investing",
    description:
      "Supporting innovation-led growth in public & private markets—powered by disciplined risk management and long-term thinking.",
    images: ["/og-innovation-investment.png"],
  },
};


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
              <Link href="/contact" className="contact-btn">
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
