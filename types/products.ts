type Measurement = 'weight' | 'length'
export type Product = {
  id: string
  title: string
  description: string
  price: number
  category: string
  measurement: Measurement
}
