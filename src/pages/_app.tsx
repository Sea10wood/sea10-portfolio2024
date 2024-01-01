import '@/styles/globals.css'
import '@/styles/bubble.css'
import '@/styles/fuwa.css'
import '@/styles/speach-bubble.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
