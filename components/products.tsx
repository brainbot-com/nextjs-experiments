import type { Product } from '../types/products'
import { ProductCard } from './productCard'

type Props = {
  products: Array<Product>
  onProductClick: (productId: string) => void
}
export const Products = ({ products, onProductClick }: Props) => {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.id}
            onClick={onProductClick}
          />
        )
      })}
    </>
  )
}
