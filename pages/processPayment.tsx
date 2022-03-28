import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useContext, useEffect } from 'react'
import OrderContext from '../contexts/order'
import { useRouter } from 'next/router'
import Layout from '../components/layout'

const ProcessPayment: NextPage = () => {
  const router = useRouter()
  const [order, setOrder] = useContext(OrderContext)

  useEffect(() => {
    setTimeout(() => {
      setOrder([])
      router.push('/')
    }, 3000)
  })

  return (
    <Layout title={'Processing payment'}>
      <div className={styles.container}>
        <Head>
          <title>Processing payment</title>
          <meta name="description" content="Processing payment" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          On this screen one would authenticate the user with biometric and
          authorize the transaction. The page will automatically redirect in 3s.
        </div>
      </div>
    </Layout>
  )
}

export default ProcessPayment
