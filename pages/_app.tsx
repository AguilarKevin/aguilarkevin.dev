import '../styles/global.css'
import {SiteLayout} from '@components/mod'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MyApp
