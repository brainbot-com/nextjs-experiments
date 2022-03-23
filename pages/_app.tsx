import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/layout'
// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
