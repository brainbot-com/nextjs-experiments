import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss'
import { OrderProvider } from '../contexts/order'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OrderProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </OrderProvider>
  )
}

export default MyApp
