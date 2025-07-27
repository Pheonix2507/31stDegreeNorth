import { Inter, Playfair_Display } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function Home() {
  return (
 <>
      <Head>
        <title>Coming Soon | Your Brand</title>
        <meta name="description" content="We are launching something amazing soon. Stay tuned!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center justify-center px-6 ${inter.variable} ${playfair.variable}`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <div className="text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-slate-300">
            We&apos;re working hard to bring you something awesome. Stay tuned and get ready to be amazed!
          </p>

          <div className="mt-4 animate-pulse text-slate-400 text-sm">Launching soon...</div>

          <div className="mt-10 border-t border-slate-700 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}
