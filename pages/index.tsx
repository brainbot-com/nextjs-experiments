import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import categories from '../data/categories.json'
import products from '../data/products.json'
import { Tabs, Tab } from '@wfp/ui'
import type { Product } from '../types/products'
import type { Category } from '../types/categories'
import { Input, Search, TextInput } from '@wfp/ui'
import { ChangeEvent, useContext, useState } from 'react'
import { Products } from '../components/products'
import { Modal } from '@wfp/ui'
import { useClientCheck } from '../hooks/clientCheck'
import Link from 'next/link'
import OrderContext from '../contexts/order'
import { LastProductBlock } from '../components/lastProductBlock'
import Layout from '../components/layout'

type groupedProducts = {
  [key: string]: Array<Product>
}
type Props = {
  products: Array<Product>
  categories: Array<Category>
}

const filterAndGroupProducts = (
  products: Array<Product> = [],
  filter = ''
): groupedProducts => {
  const filtered = products
    .filter((product) =>
      String(product.title).toLowerCase().includes(filter.toLowerCase())
    )
    .reduce((prev, curr) => {
      const groupedProducts = prev[curr.category]
      if (groupedProducts) {
        prev[curr.category] = [...groupedProducts, curr as Product]
      } else {
        prev[curr.category] = [curr as Product]
      }
      return prev
    }, {} as Record<string, Array<Product>>)

  return filtered
}
const Home: NextPage<Props> = ({ products, categories }: Props) => {
  const isClient = useClientCheck()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [order, setOrder] = useContext(OrderContext)
  const [filter, setFilter] = useState('')
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState<null | number>(null)
  const [localProducts, setLocalProducts] = useState(
    filterAndGroupProducts(products, '')
  )
  const filterProducts = (title: ChangeEvent<Input>) => {
    setFilter(String(title))
    setLocalProducts(filterAndGroupProducts(products, String(title)))
  }

  const submitAndClose = () => {
    if (selectedProduct && amount) {
      setOrder([
        ...order,
        {
          ...selectedProduct,
          amount: amount,
        },
      ])
    }

    setAmount(null)

    toggleModal()
  }

  console.log('order', order)

  const toggleModal = () => {
    setOpen(!open)
  }

  const onProductClick = (productId: string) => {
    const selected = products.find((product) => product.id === productId)
    setSelectedProduct(selected || null)
    toggleModal()
  }

  console.log('amout', amount)
  const setAmountWithProtection = (amount: ChangeEvent<Input>): void => {
    console.log('asfdaiojsafdioklj')
    // @ts-ignore
    setAmount(Number(String(amount.target.value)))
  }

  return (
    <Layout title={'New Order'}>
      <div className={styles.container}>
        <Head>
          <title>Order</title>
          <meta name="description" content="Order page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <Search
            id={'search-product'}
            className="search-product"
            name="search-product"
            placeholder="Search product"
            onChange={filterProducts}
            value={filter}
          />

          {filter ? (
            <div className={styles.marginTop}>
              {categories.map((category) => {
                return (
                  <Products
                    key={`product-per-cat-${category.id}`}
                    products={localProducts[category.id] || []}
                    onProductClick={onProductClick}
                  />
                )
              })}
            </div>
          ) : (
            <Tabs>
              {categories.map((category) => {
                return (
                  <Tab
                    tabIndex={0}
                    href={'#'}
                    selected={false}
                    role="tab"
                    label={category.title}
                    id={category.id}
                    key={`category-${category.id}`}
                  >
                    <div className={styles.tabContainer}>
                      <Products
                        key={`product-per-cat-${category.id}`}
                        products={localProducts[category.id] || []}
                        onProductClick={onProductClick}
                      />
                    </div>
                  </Tab>
                )
              })}
            </Tabs>
          )}

          {isClient && (
            <Modal
              open={open}
              primaryButtonText="Add"
              onRequestSubmit={submitAndClose}
              secondaryButtonText="Cancel"
              // onSecondarySubmit={toggleModal}
              onRequestClose={toggleModal}
              primaryButtonDisabled={!amount}
            >
              {selectedProduct && (
                <p className="wfp--modal-content__text">
                  {selectedProduct.title}
                  {selectedProduct.price}
                  <TextInput
                    name="amount"
                    value={amount ? amount : ''}
                    onChange={setAmountWithProtection}
                    placeholder={
                      selectedProduct.measurement === 'weight'
                        ? 'Enter kg'
                        : 'Enter length'
                    }
                  />
                </p>
              )}
            </Modal>
          )}

          {!!order.length && (
            <div className={'footerAbsoluteContainer'}>
              <div className={styles.lastProductBlock}>
                <div>
                  <strong>Last product</strong>
                </div>
                <LastProductBlock
                  product={order[order.length - 1]}
                  onDelete={() => {
                    setOrder(order.slice(0, -1))
                  }}
                />
              </div>

              <Link href={'checkout'}>
                <a
                  className={'wfp--btn wfp--btn--primary'}
                  data-cy={'checkout-button'}
                >
                  Checkout
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      products: products,
      categories: categories,
    },
  }
}

export default Home
