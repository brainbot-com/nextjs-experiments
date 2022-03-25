import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import categories from '../data/categories.json'
import products from '../data/products.json'
import { Tabs, Tab } from '@wfp/ui'
import { ProductCard } from './components/productCard'
import { type Product } from '../types/products'
import { type Category } from '../types/categories'

type groupedProducts = {
  [key: string]: Array<Product>
}
type Props = {
  products: groupedProducts
  categories: Array<Category>
}
const Home: NextPage<Props> = ({ products, categories }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Order</title>
        <meta name="description" content="Order page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
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
                  {products[category.id]?.map((product) => {
                    return (
                      <ProductCard
                        product={product}
                        key={product.id}
                        onClick={() => {
                          console.log('test')
                        }}
                      />
                    )
                  })}
                </div>
              </Tab>
            )
          })}
        </Tabs>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      products: products.reduce((prev, curr) => {
        const groupedProducts = prev[curr.category]
        if (groupedProducts) {
          prev[curr.category] = [...groupedProducts, curr as Product]
        } else {
          prev[curr.category] = [curr as Product]
        }
        return prev
      }, {} as Record<string, Array<Product>>),
      categories: categories,
    },
  }
}

export default Home
