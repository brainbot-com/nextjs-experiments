type Measurement = 'weight' | 'length'
export type Product = {
  id: string
  title: string
  description: string
  price: number
  category: string
  measurement: Measurement
}

export type ProductInCard = Product & { amount: number }