import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import categories from '../data/categories.json'
import products from '../data/products.json'
import { Tabs, Tab } from '@wfp/ui'
import { ProductCard } from './components/productCard'
import { type Product } from '../types/products'
import { type Category } from '../types/categories'
import { Input, Search } from '@wfp/ui'
import { ChangeEvent, useState } from 'react'
import { Products } from './components/products'

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
  const [filter, setFilter] = useState('')
  const [localProducts, setLocalProducts] = useState(
    filterAndGroupProducts(products, '')
  )
  const filterProducts = (title: ChangeEvent<Input>) => {
    setFilter(String(title))
    setLocalProducts(filterAndGroupProducts(products, String(title)))
  }

  const onProductClick = (productId: string) => {
    console.log('product clicked', productId)
  }

  return (
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
      </div>
    </div>
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
