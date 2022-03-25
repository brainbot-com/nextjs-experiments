import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Checkout.module.css'
import { useContext } from 'react'
import Link from 'next/link'
import OrderContext from '../contexts/order'
import { currencyName } from '../constants'
import { Icon } from '@wfp/ui'
import { iconVisibilityOn } from '@wfp/icons'

const Checkout: NextPage = () => {
  const [order] = useContext(OrderContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Order page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.productsContainer}>
          {order.map((product) => {
            return (
              <div key={product.id} className={styles.productItem}>
                <strong>{product.title}</strong> {product.amount}kg{' '}
                {product.amount * product.price} {currencyName}
              </div>
            )
          })}
        </div>

        <div className={styles.totalContainer}>
          <div>
            <strong>Total:</strong>
            <strong>
              {order
                .map((product) => product.price * product.price)
                .reduce((prev, curr) => {
                  return curr + prev
                }, 0)}{' '}
              {currencyName}
            </strong>
          </div>
        </div>

        <div className={'footerAbsoluteContainer'}>
          <Icon
            description={'Biometric icon'}
            icon={iconVisibilityOn}
            width={'100'}
            height={'100'}
          />
          <div>
            <Link href={'processPayment'}>
              <a className={'wfp--btn wfp--btn--primary'}>
                Approve payment with Iris
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
