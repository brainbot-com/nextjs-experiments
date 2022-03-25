import ExportedImage from 'next-image-export-optimizer'
import styles from '../styles/lastProductBlock.module.css'
import grain from '../public/images/grain.jpg'
import { ProductInCard } from '../types/products'
import { currencyName } from '../constants'
import { Button } from '@wfp/ui'
import { iconClose } from '@wfp/icons'

type Props = {
  product: ProductInCard
  onDelete: (productId: string) => void
}
export const LastProductBlock = ({ product, onDelete }: Props) => {
  return (
    <article
      className={styles.productItem}
      itemScope
      itemType="http://schema.org/Product"
    >
      <div className={styles.imageContainer}>
        <ExportedImage
          alt={`food image ${product.title}`}
          src={grain}
          width={60}
          layout="fixed"
          height={45}
        />
      </div>

      <div className={styles.productMeta}>
        <div>
          <h2 itemProp="name">{product.title}</h2>
          <p>
            <data value={product.amount}>{product.amount}</data>kg{' '}
            <data value={product.price}>{product.price}</data>
            {currencyName}
          </p>
        </div>

        <div>
          <Button
            icon={iconClose}
            kind="tertiary"
            onClick={() => {
              onDelete(product.id)
            }}
          ></Button>
        </div>
      </div>
    </article>
  )
}
