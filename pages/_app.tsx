import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ParallaxProvider } from 'react-scroll-parallax'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>
)

export default appWithTranslation(MyApp)
