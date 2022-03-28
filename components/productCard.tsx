import ExportedImage from 'next-image-export-optimizer'
import styles from '../styles/ProductCard.module.css'
import grain from '../public/images/grain.jpg'
import { type Product } from '../types/products'

type Props = {
  product: Product
  onClick: (productId: string) => void
}
export const ProductCard = ({ product, onClick }: Props) => {
  return (
    <a onClick={() => onClick(product.id)} title={'Add to order'} data-cy={"product-card"}>
      <article
        className={styles.productItem}
        itemScope
        itemType="http://schema.org/Product"
      >
        <div className={styles.imageContainer}>
          <ExportedImage
            alt={`food image ${product.title}`}
            src={grain}
            width={120}
            layout="fixed"
            height={85}
          />
        </div>

        <div className={styles.productMeta}>
          <h2 itemProp="name" data-cy={"product-title"}>{product.title}</h2>
          <p>
            <data value={product.price}>{product.price}</data>$
          </p>
        </div>
      </article>
    </a>
  )
}
