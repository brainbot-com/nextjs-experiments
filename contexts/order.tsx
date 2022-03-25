import { createContext, ReactNode, useState } from 'react'
import { ProductInCard } from '../types/products'

type ContextType = [
  productsInOrder: [] | ProductInCard[],
  setProductsInOrder: (payload: [] | ProductInCard[]) => void
]

type Props = {
  children: ReactNode
}

const OrderContext = createContext<ContextType>([[], () => {}])

export const OrderProvider = ({ children }: Props) => {
  const [productsInOrder, setProductsInOrder] = useState<
    Array<ProductInCard> | []
  >([])

  return (
    <OrderContext.Provider value={[productsInOrder, setProductsInOrder]}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
