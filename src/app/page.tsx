import { Inter, Playfair_Display } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon | 31 Degrees North Fund</title>
        <meta name="description" content="We are launching something amazing soon. Stay tuned!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 ${inter.variable} ${playfair.variable}`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <div className="text-center max-w-xl">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.svg" 
              alt="31 Degrees North Fund"
              width={300}
              height={300}
              priority
            />
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-black"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Coming Soon
          </h1>

          <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
            We&apos;re building something exceptional at 31 Degrees North Fund.
            Stay tuned for our full launch.
          </p>

          <div className="mt-4 animate-pulse text-gold-500 text-sm">Launching shortly...</div>

          <div className="mt-12 border-t border-slate-700 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} 31 Degrees North Fund. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}
