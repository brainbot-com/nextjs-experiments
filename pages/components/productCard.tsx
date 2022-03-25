import Image from 'next/image'
import styles from '../../styles/ProductCard.module.css'
import grain from '../../public/grain.jpg'
import { type Product } from '../../types/products'

type Props = {
  product: Product
  onClick: (productId: string) => {}
}
export const ProductCard = ({ product, onClick }: Props) => {
  return (
    <a onClick={() => onClick(product.id)} title={'Add to order'}>
      <article
        className={styles.productItem}
        itemScope
        itemType="http://schema.org/Product"
      >
        <div className={styles.imageContainer}>
          <Image
            alt={`food image ${product.title}`}
            src={grain}
            width={120}
            layout="fixed"
            height={85}
          />
        </div>

        <div className={styles.productMeta}>
          <h2 itemProp="name">{product.title}</h2>
          <p>
            <data value={product.price}>{product.price}</data>$
          </p>
        </div>
      </article>
    </a>
  )
}
